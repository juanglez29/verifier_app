import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import '../App.css';
import QRCode  from "react-qr-code";
const axios = require('axios');
//const download = require('react-file-download')


function Invitations() {

    const [inv, setListinv] = useState("");
    const [alias, setAlias] = useState("");


        async function createinv(event) {

            try {
                event.preventDefault();
                await axios.post('http://localhost:8031/myapi/connections/create-invitation', {alias: alias})
                .then(res=> setListinv(res.data))
    
            } catch (error) {
                console.error(error);
            }
        }

        const handleInputChange = (event) => {
            setAlias(event.target.value);
        }
    return(
        
        <div style={{marginTop: "2%"}}>
        <h4>Please, enter your name below: </h4>
        <form onSubmit={createinv}>
        <input style={{width: 110, height: 30}} type= "text" onChange={handleInputChange}/>
        <Button variant= "primary" size ="sm" style={{marginLeft: "1%"}} type="submit">Send</Button>
        </form>

        
        <QRCode style={{marginTop: "2%"}} value = {inv} />
        <div className="url">
           <p>{inv}</p> 
        </div>
      
        </div>
    )
}

export default Invitations;

