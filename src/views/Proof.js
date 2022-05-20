import React, { useState, useEffect } from "react";
import Proofcomp from "../components/proofcomp.js";
const axios = require('axios');

function Proof() {

    const [attr, setAttr] = useState([]);
    const [boddy, setBoddy] = useState([]);
    const [connid, setId] = useState("");
    const [comment, setComm] = useState("");
    const [schid, setSchid] = useState("");
    const [credid, setCredid] = useState("");
    const [prof, setProf] = useState("");
    const [init, setInit] = useState(true);



    useEffect(async () => {
        if (init == false) {
            await axios.post('http://localhost:8031/myapi/wallet/credentials/schemas', { schema: schid })
                .then(res => setAttr(res.data.schema.attrNames))
        }

    }, [init])


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

    function handleinputconnId(id) {
        setId(id)
    }

    function handleinputcomm(c) {
        setComm(c)
    }

    function handleinputschid(schid) {
        setSchid(schid)
    }
    function handleinputcredid(credid) {
        setCredid(credid)
    }

    function handlebool() {
        setInit(false);
    }

    async function proofcred() {

        try {
        
            await axios.post('http://localhost:8031/myapi/proof/send-request', {
                comment: comment,
                connectionID: connid,
                cred_def_id: credid,
                attributes: boddy,
                predicates: []
            }).then(res=> setProf(res.data), setInit(true))
            
        } catch (error) {
            console.error(error);
        }
    }

/* 
    async function verify() {

        try {

            await axios.get('http://localhost:8031/myapi/webhooks')
            .then(res => console.log(res.data))
            
        } catch (error) {
            console.error(error);
        }
    } */




    return (
        <div>
            <Proofcomp
                handleInputChange={handleInputChange}
                handleinputconnId={handleinputconnId}
                handleinputcomm={handleinputcomm}
                handleinputcredid={handleinputcredid}
                handleinputschid={handleinputschid}
                proofcred={proofcred}
                handlebool={handlebool}
                //verify={verify}
                attr={attr}
                init={init}
            />
        <p>{prof}</p>
        </div>
    )
}

export default Proof;