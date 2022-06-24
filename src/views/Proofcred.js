import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import Proofcredcomp from "../components/proofcredcomp.js";
import io from 'socket.io-client';
const axios = require('axios');

function Proofcred() {

    const [msg, setmsg] = useState("");
    const socket= io("http://localhost:8031"); 
    const location= useLocation();
    const {connid2, r2} =location.state;
    const [attr, setAttr] = useState([]);
    const [boddy, setBoddy] = useState([]);
    const [schid, setSchid] = useState(""); 
    const [defid, setDefid] = useState("");
    const [prof, setProf] = useState("");
    const [step, setStep] = useState(1);
    const [schemas, setSchemas]= useState([]);
    const [defs, setDefs]=useState([]);
    const [prog, setProg]=useState(60);
    const [pred, setPred] = useState([]);
    const [label, setLabel] = useState("Covid credential verification: Step 5");
   
    
    useEffect(async () => {
        if (step == 2) {
            await axios.post('http://localhost:8031/myapi/wallet/credentials/schemas', { schema: schid })
                .then(res => setAttr(res.data.schema.attrNames))
        }
        if(r2==true){        
        await axios.get('http://localhost:8031/myapi/wallet/credentials/schemas/created')
        .then(res => setSchemas(res.data.schemas))
         await axios.get('http://localhost:8031/myapi/wallet/credentials/definitions/created')
        .then(res => setDefs(res.data.definitions)) 

        }

    }, [step])

    useEffect(() => {

        socket.on('msg', msg => { 
        setmsg(msg)
   
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

    function handleinputzkp(p) {

        let b = pred
        if (!(b.includes(p))) {
            b.push(p)
        }
        else {
            b.splice(b.indexOf(p), 1)
        }
        setPred(pred) 
    }

    function handleinputschid(schid) {
        setSchid(schid)
    }

    function handleinputdefid(defid) {
        setDefid(defid)
    }

    function handlebool() {
        setStep(2)
        setProg(72)
        setLabel("Covid credential verification: Step 6")
    }
  

    async function proofcred() {

        try {
        
            await axios.post('http://localhost:8031/myapi/proof/send-request', {
                comment: "This is a credential request",
                connectionID: connid2,
                cred_def_id: defid,
                attributes: boddy,
                predicates: pred
            }).then(res=> setProf(res.data), setStep(3), setProg(84), setLabel("Covid credential verification: Step 7"))
            
        } catch (error) {
            console.error(error);
        }
    } 



    return (
        <div>
            <ProgressBar style={{ marginTop: "1.5%", marginBottom: "4%"}} animated now={prog} label={label}/>
            <Proofcredcomp
                handleInputChange={handleInputChange}
                handleinputzkp= {handleinputzkp}
                handleinputdefid={handleinputdefid}
                handleinputschid={handleinputschid}
                proofcred={proofcred}
                handlebool={handlebool}
                attr={attr}
                pred={pred}
                step={step}
                prof={prof}
                schemas={schemas}
                defs={defs}
                msg={msg}
            />
        
        </div>
    )
}

export default Proofcred;