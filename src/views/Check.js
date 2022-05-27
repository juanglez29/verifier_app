import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { FcApproval } from "react-icons/fc"
import { FcHighPriority } from "react-icons/fc"
import { Link } from "react-router-dom"
import axios from "axios";

function Check() {

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
            return <div style={{ marginTop: "2%", marginBottom: "4%" }}>
                <h5>{key} <FcHighPriority /></h5><p>{value} </p>
            </div>
        }


        if ((key === "n_dosis") && (value < 3)) {
           
           ver="This passanger does not meet the requirements to fly"
            return <div style={{ marginTop: "2%", marginBottom: "4%" }}>
                <h5>{key} <FcHighPriority /></h5><p>{value} </p>
            </div>
        }


        if (key === "expiration") {
            var date = new Date(value);
            if (date < currentdate) {
                ver="This passanger does not meet the requirements to fly"
                return <div style={{ marginTop: "2%", marginBottom: "4%" }}>
                    <h5>{key} <FcHighPriority /></h5><p>{value} </p>
                </div>
            }

            else {
                return <div style={{ marginTop: "2%", marginBottom: "4%" }}>
                    <h5>{key} <FcApproval /></h5><p>{value} </p>
                </div>
            }
        }

        if (key === "date_last_dosis") {
            var date2 = new Date(value);
            if ((currentdate.getTime() - date2.getTime()) / 86400000 >= 270) {
                ver="This passanger does not meet the requirements to fly"
                return <div style={{ marginTop: "2%", marginBottom: "4%" }}>
                    <h5>{key} <FcHighPriority /></h5><p>{value} </p>
                </div>
            }

            else {
                return <div style={{ marginTop: "2%", marginBottom: "4%" }}>
                    <h5>{key} <FcApproval /></h5><p>{value} </p>
                </div>
            }
        }

        else {
            return <div style={{ marginTop: "2%", marginBottom: "4%" }}>
                <h5>{key} <FcApproval/></h5><p>{value} </p>
            </div>
        }




    });
    if (finish == true) {
        return (

            <div>

                <div style={{ marginTop: "2%" }}>{list}</div>
                <h6>{ver}</h6>
                <Link to='/'>home</Link>

            </div>
        )
    }

    else {

        return (

            <div>

                <div style={{ marginTop: "2%" }}>{list}</div>
         
                <Link to='/Proofr2' state={{ r2: true, connid2: connid }}>cred request</Link>

            </div>
        )

    }

}

export default Check;

