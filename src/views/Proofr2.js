import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import Proofcompr2 from "../components/proofcompr2.js";

const axios = require('axios');

function Proofr2() {
    const location= useLocation();
    const {connid2, r2} =location.state;

    //const [r2state, setR2] = useState(r2);
    const [attr, setAttr] = useState([]);
    const [boddy, setBoddy] = useState([]);
    const [schid, setSchid] = useState(""); 
    const [credid, setCredid] = useState("");
    const [prof, setProf] = useState("");
    const [step, setStep] = useState(1);
    const [schemas, setSchemas]= useState([]);
     const[defs, setDefs]=useState([]);
     
    //const[did, setDid]=useState("");


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
         //await axios.get('http://localhost:8031/myapi/wallet/dids/did')
         //.then(res => setDid(res.data.DID),  setStep(4), console.log(esoo))
        }

    }, [step])


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
    function handleinputcredid(credid) {
        setCredid(credid)
    }

    function handlebool() {
        setStep(2);
    }
  

    async function proofcred() {

        try {
        
            await axios.post('http://localhost:8031/myapi/proof/send-request', {
                comment: "This is a credential request",
                connectionID: connid2,
                cred_def_id: credid,
                attributes: boddy,
                predicates: []
            }).then(res=> setProf(res.data), setStep(3))
            
        } catch (error) {
            console.error(error);
        }
    } 



    return (
        <div>
            <Proofcompr2
                handleInputChange={handleInputChange}
                handleinputcredid={handleinputcredid}
                handleinputschid={handleinputschid}
                proofcred={proofcred}
                handlebool={handlebool}
                attr={attr}
                step={step}
                prof={prof}
                schemas={schemas}
                defs={defs}
            />
        
        </div>
    )
}

export default Proofr2;