import React, {useState, useEffect} from "react";
import { Button, Form} from "react-bootstrap";
import {FcApproval} from "react-icons/fc"
import {FcHighPriority} from "react-icons/fc"
import axios from "axios";

function Check() {

    const [presid, setPresid] = useState("");
    const [listatt, setListatt] = useState({});
    //const [allow, setAllow] = useState(true);

    async function listpresid(event) {

        try {
            event.preventDefault();
            await axios.post('http://localhost:8031/myapi/proof', {presid: presid})
            .then(res=> setListatt(res.data))

        } catch (error) {
            console.error(error);
        }
    }

    const handleInputChange = (event) => {
        setPresid(event.target.value);
    }

    const list = Object.entries(listatt).map( ([key, value]) => {

        var currentdate= new Date();
       
        if((key==="agent") && (value !== "covid")){
            return <div style={{ marginTop: "2%", marginBottom: "4%"}}>
            <h5>{key} <FcHighPriority/></h5><p>{value} </p>
               </div>
        }


        if((key==="n_dosis") && (value < 3)){
            return <div style={{ marginTop: "2%", marginBottom: "4%"}}>
            <h5>{key} <FcHighPriority/></h5><p>{value} </p>
               </div>
        }
        
  
        if(key==="expiration"){
            var date= new Date(value);
            if(date< currentdate){
            return <div style={{ marginTop: "2%", marginBottom: "4%"}}>
            <h5>{key} <FcHighPriority/></h5><p>{value} </p>
               </div>
            }

            else{
                return <div style={{ marginTop: "2%", marginBottom: "4%"}}>
                <h5>{key} <FcApproval/></h5><p>{value} </p>
                   </div>
            }
        }

        if(key==="date_last_dosis"){
            var date2= new Date(value);
            if((currentdate.getTime() - date2.getTime())/86400000 >= 270){
            return <div style={{ marginTop: "2%", marginBottom: "4%"}}>
            <h5>{key} <FcHighPriority/></h5><p>{value} </p>
               </div>
            }

            else{
                return <div style={{ marginTop: "2%", marginBottom: "4%"}}>
                <h5>{key} <FcApproval/></h5><p>{value} </p>
                   </div>
            }
        } 
        
        else{
            return <div style={{ marginTop: "2%", marginBottom: "4%"}}>
            <h5>{key} <FcApproval/></h5><p>{value} </p>
               </div>
        }
        

      

    });

    return  (
       
       
     <div>
        <div style={{marginTop: "2%"}}>
        <h6>Please, enter presentation id: </h6>
        
        <form onSubmit={listpresid}>
        <input style={{width: 310, height: 30}} type= "text" onChange={handleInputChange}/>
        <Button variant= "primary" size ="sm" style={{marginLeft: "1%"}} type="submit">Send</Button>
        </form>
        <div style={{marginTop: "2%"}}>{list}</div>
        </div>
       
        </div>
    )
       
}

export default Check;

/* function Check() {

    const [presid, setPresid] = useState("");
    const [listatt, setListatt] = useState({});

    async function listpresid(event) {

        try {
            event.preventDefault();
            await axios.post('http://localhost:8031/myapi/proof', {presid: presid})
            .then(res=> setListatt(res.data))

        } catch (error) {
            console.error(error);
        }
    }

    const handleInputChange = (event) => {
        setPresid(event.target.value);
    }

    const list = Object.entries(listatt).map( ([key, value]) => {
        
        return <div>
            <p>{key} <Form.Check type="checkbox" label={`${value}`}/> </p>
               </div>

    });

    return  (
       
       
     <div>
        <div style={{marginTop: "2%"}}>
        <h6>Please, enter presentation id: </h6>
        
        <form onSubmit={listpresid}>
        <input style={{width: 110, height: 30}} type= "text" onChange={handleInputChange}/>
        <Button variant= "primary" size ="sm" style={{marginLeft: "1%"}} type="submit">Send</Button>
        </form>
        <div style={{marginTop: "2%"}}>{list}</div>
        </div>
       
        </div>
    )
       
} */

