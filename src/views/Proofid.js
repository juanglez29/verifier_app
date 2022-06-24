import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import Proofidcomp from "../components/proofidcomp.js";
import { ProgressBar } from "react-bootstrap";
import io from 'socket.io-client';
const axios = require('axios');

function Proof() {

    const [msg, setmsg] = useState("");
    const socket= io("http://localhost:8031"); 
    const location= useLocation();
    const {connid} =location.state;
    const [attr, setAttr] = useState([]);
    const [boddy, setBoddy] = useState([]);
    const [schid, setSchid] = useState("");
    const [defid, SetDefid] = useState("");
    const [prof, setProf] = useState("");
    const [step, setStep] = useState(1);
    const [prog, setProg] = useState(12);
    const [label, setLabel] = useState("verify identity: Step 1");
     

    useEffect(async () => {
        if (step == 2) {
            await axios.post('http://localhost:8031/myapi/wallet/credentials/schemas', { schema: schid })
                .then(res => setAttr(res.data.schema.attrNames))
        }

    }, [step])

    useEffect(() => {

        socket.on('msg', msg => { 
        setmsg(msg)
        console.log(msg)
   
      })}, [msg])
       

    function handleInputChange(att) {

        let b = boddy
        if (!(b.includes(att))) {
            b.push(att)
        }
        else {
            b.splice(b.indexOf(att), 1)
        }

        setBoddy(b)
    }

    function handleinputschid(schid) {
        setSchid(schid) 
    }
    function handleinputdefid(defid) {
        SetDefid(defid)
    }

    function handlebool() {
        setStep(2);
        setProg(24);
        setLabel("verify identity: Step 2")
    }
  

    async function proofcred() {

        try {
        
            await axios.post('http://localhost:8031/myapi/proof/send-request', {
                comment: "This is a credential request",
                connectionID: connid,
                cred_def_id: defid,
                attributes: boddy,
                predicates: []
                
            }).then(res=> setProf(res.data), setStep(3), setProg(36), setLabel("verify identity: Step 3"))
            
        } catch (error) {
            console.error(error);
        }
    } 



    return (
        <div>
           <ProgressBar style={{ marginTop: "1.5%", marginBottom: "4%"}} animated now={prog} label={label}/> 
            <Proofidcomp
                handleInputChange={handleInputChange}
                handleinputdefid={handleinputdefid}
                handleinputschid={handleinputschid}
                proofcred={proofcred}
                handlebool={handlebool}
                attr={attr}
                step={step}
                prof={prof}
                connid={connid}
                msg={msg}
            
            />
        
        </div>
    )
}

export default Proof;
