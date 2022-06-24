import React, {useState} from "react";
import '../App.css';
import QRCode  from "react-qr-code";
const axios = require('axios');


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
        
        <div>
        <h4 style={{marginTop: "2%", marginBottom:"2%"}}>Please, enter your name below: </h4>
        <form onSubmit={createinv}>
        <input style={{width: 180, height: 30}} type= "text" onChange={handleInputChange}/>
        <button style={{marginLeft: "2%"}} type="submit">Send</button>
        </form>

        
        <QRCode style={{marginTop: "2%", marginBottom: "1.4%"}} value = {inv} />
        <div className="url">
        <h6>Invitation URL:</h6>
        <div style={{marginBottom: "2%", marginTop: "1%", height:"30%", width:"62%", backgroundColor: "#e6ccff"}}>
                <p style={{padding: "1.8%", }}>{inv} </p>
         </div>
           
        </div>
      
        </div>
    )
}

export default Invitations;

