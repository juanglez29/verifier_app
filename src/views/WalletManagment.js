import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Dids from "../components/dids";
import Credentials from "../components/credentials";
const axios = require('axios');


function WalletManagment() {

    const [didlist, setDidlist] = useState([]);
    const [myschemas, setMychemas] = useState([]);
    
    

    useEffect(async () => {

        await axios.get('http://localhost:8031/myapi/wallet/dids')
            .then(res => setDidlist(res.data.DIDs))

        await axios.get('http://localhost:8031/myapi/wallet/credentials/schemas/created')
            .then(res => setMychemas(res.data.schemas))


    }, [])



    return (

        <div>

            <div style={{ margin: "3%" }}>
                <h2 style={{ marginBottom: "2%" }}>DIDs</h2>  
                <Dids didlist={didlist}/>
            </div>

            <div style={{ margin: "3%" }}>
                <h2 style={{ marginBottom: "2%" }}>schemas</h2>  
                <Credentials myschemas={myschemas} />

            </div>

        </div>

    )
}

export default WalletManagment;