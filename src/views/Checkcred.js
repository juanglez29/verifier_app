import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Form, ProgressBar } from "react-bootstrap";
import { FcApproval } from "react-icons/fc"
import { FcHighPriority } from "react-icons/fc"
import { Link } from "react-router-dom"
import axios from "axios";

function Checkcred() {

    const location = useLocation();
    const { connid, presid, finish } = location.state;
    const [listatt, setListatt] = useState({});
  
    var ver= "Passanger authorized to fly";

    useEffect(async () => {
        await axios.post('http://localhost:8031/myapi/proof', { presid: presid })
            .then(res => setListatt(res.data))
    }, [])


    const list = Object.entries(listatt).map(([key, value]) => {

        var currentdate = new Date();

        if ((key === "agent") && (value !== "covid")) {
            
            ver= "This passanger does not meet the requirements to fly"
            return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                <h5>{key} <FcHighPriority /></h5><p>{value} </p>
            </div>
        }


        if ((key === "n_dosis") && (value < 3)) {
           
           ver="This passanger does not meet the requirements to fly"
            return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                <h5>{key} <FcHighPriority /></h5><p>{value} </p>
            </div>
        }


        if (key === "expiration") {
            var date = new Date(value);
            if (date < currentdate) {
                ver="This passanger does not meet the requirements to fly"
                return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                    <h5>{key} <FcHighPriority /></h5><p>{value} </p>
                </div>
            }

            else {
                return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                    <h5>{key} <FcApproval /></h5><p>{value} </p>
                </div>
            }
        }

        if (key === "date_last_dosis") {
            var date2 = new Date(value);
            if ((currentdate.getTime() - date2.getTime()) / 86400000 >= 270) {
                ver="This passanger does not meet the requirements to fly"
                return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                    <h5>{key} <FcHighPriority /></h5><p>{value} </p>
                </div>
            }

            else {
                return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                    <h5>{key} <FcApproval /></h5><p>{value} </p>
                </div>
            }
        }

        else {
            return <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                <h5>{key} <FcApproval/></h5><p>{value} </p>
            </div>
        }

    });
    
        return (

            <div>
                <ProgressBar style={{ marginTop: "1.5%", marginBottom: "4%"}} animated now={100} label={"Covid credential verification: finished"}/> 
                <div style={{ marginTop: "2%" }}>{list}</div>
                <p style={{marginBottom: "4%"}}>{ver}</p>
                <button ><Link to='/' style={{color:'black', textDecoration: 'none'}}>Home</Link></button>

            </div>
        )
    


}

export default Checkcred;

