import React, { useState, useEffect } from "react";
import { useLocation, Link} from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import { FcApproval, FcHighPriority, FcInfo } from "react-icons/fc"
import axios from "axios";

function Checkcred() {

    const location = useLocation();
    const {presid} = location.state;
    const [listatt, setListatt] = useState({});

    var allowed = null;

    useEffect(async () => {
        await axios.post('http://localhost:8031/myapi/proof', { presid: presid })
            .then(res => setListatt(res.data))
    }, [])


    const list = Object.entries(listatt).map(([key, value]) => {

        var currentdate = new Date();

        if (key === "agent") {
            if (value !== "covid") {
                allowed = false
                return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                    <h5>Agent <FcHighPriority/></h5><p>{value} </p>
                </div>
            } else {
                return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                    <h5>Agent <FcApproval/></h5><p>{value} </p>
                </div>
            }
        }


        if (key === "n_dosis") {
            if (value < 3) {
                allowed = false
                return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                    <h5>Number of doses <FcHighPriority/></h5><p>{value} </p>
                </div>
            } else {
                return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                    <h5>Number of doses <FcApproval/></h5><p>{value} </p>
                </div>
            }
        }

        if (key === "expiration") {
            var date = new Date(value);
            if (date < currentdate) {
                allowed = false
                return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                    <h5>Expiration date <FcHighPriority/></h5><p>{value} </p>
                </div>
            }

            else {
                return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                    <h5>Expiration date <FcApproval/></h5><p>{value} </p>
                </div>
            }
        }

        if (key === "date_last_dosis") {
            var date2 = new Date(value);
            if ((currentdate.getTime() - date2.getTime()) / 86400000 >= 270) {
                allowed = false
                return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                    <h5>Date of last dose <FcHighPriority/></h5><p>{value} </p>
                </div>
            }

            else {
                return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                    <h5>Date of last dose <FcApproval/></h5><p>{value} </p>
                </div>
            }
        }

        if(key== "name_last_dosis") {
            return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                <h5>Name of last dose <FcInfo/></h5><p>{value} </p>
            </div>
        }

        if(key== "country_last_dosis") {
            return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                <h5>Country of last dose <FcInfo/></h5><p>{value} </p>
            </div>
        }
        

    });

    if (allowed == false) {
        return (

            <div>
            <ProgressBar style={{ marginTop: "1.5%", marginBottom: "4%" }} animated now={100} label={"Covid credential verification: finished"} />
            <div style={{ marginTop: "2%" }}>{list}</div>
            <div style={{ marginBottom: "4%", marginTop: "3%", height: "10%", width: "52%", backgroundColor: "#ffe2e2", borderRadius: "19%" }}>
                <p style={{ padding: "3%", fontSize: "150%" }}>This passanger does not meet the requirements to fly <FcHighPriority /></p>
            </div>
            <button ><Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link></button>

        </div>
        )
    }

    else {

        return (

            <div>
                <ProgressBar style={{ marginTop: "1.5%", marginBottom: "4%" }} animated now={100} label={"Covid credential verification: finished"} />
                <div style={{ marginTop: "2%" }}>{list}</div>
                <div style={{ marginBottom: "4%", marginTop: "3%", height: "10%", width: "28%", backgroundColor: "#b1ceb5", borderRadius: "19%" }}>
                    <p style={{ padding: "3%", fontSize: "150%" }}>Passanger authorized to fly <FcApproval /></p>
                </div>
                <button ><Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link></button>

            </div>
 
        )
    }



}

export default Checkcred;
