import React, {useState, useEffect} from "react";
import { Button, Form, ProgressBar} from "react-bootstrap";
import {FcInfo} from "react-icons/fc"
import {Link, useLocation} from "react-router-dom"
import axios from "axios";

function Checkid() {

    const location= useLocation();
    const {presid, connid} = location.state;
    const [listatt, setListatt] = useState({});

    useEffect(async () => {
        await axios.post('http://localhost:8031/myapi/proof', {presid: presid})
        .then(res=> setListatt(res.data))
    }, [])



    const list = Object.entries(listatt).map( ([key, value]) => {

                return <div style={{ marginTop: "2%", marginBottom: "3%"}}>
                 <h5><FcInfo/> {key}</h5><p style={{ marginLeft: "2%"}}>{value} </p>
                </div>
            }
      
    );


    return  (
  
        <div>
             <ProgressBar style={{ marginTop: "1.5%", marginBottom: "4%"}} animated now={48} label={"verify identity: Step 4"}/> 
            <div style={{ marginTop: "2%" }}>{list}</div>
            <button style={{marginTop: "2%"}}><Link to='/Proofr2' style={{color:'black', textDecoration: 'none'}} state={{connid2: connid, r2: true }}>Next</Link></button>

        </div>     
    )
       
}

export default Checkid;


