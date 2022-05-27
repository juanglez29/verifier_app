import React from "react"
import {Link} from "react-router-dom"
import { Button, Form, DropdownButton, Dropdown } from "react-bootstrap"

function Proofcompr2(props) {

    
    function handleInputChange2(att, event) {
        props.handleInputChange(att, event.target.value)
       
    }
    
    function handleinputcredid2(event) {
        props.handleinputcredid(event)
    }

    function handleinputschid2(event) {
        props.handleinputschid(event)
    }



    const schids = props.schemas.map(schema => {
       
        return <Dropdown.Item eventKey={schema.id}>{schema.id} ({schema.seqNo})</Dropdown.Item>
   
    });

    const defids = props.defs.map(def => {
       
        return <Dropdown.Item eventKey={def.id}>{def.id} </Dropdown.Item>
   
    });

    const atrib = props.attr.map((att) => {

        return <div>
            <Form.Check type="checkbox" label={`${att}`} onChange={(e) => handleInputChange2(att, e)} />
        </div>

    })


    if (props.step == 1) {
        return (
                    <>
            <Form  style={{ marginTop: "2%", marginBottom: "4%"}} onSubmit={props.handlebool}>
              <h4>Select the schema and credential definition </h4>
                <DropdownButton variant="secondary" style={{ marginTop: "2%", marginBottom: "3%"}} onSelect={handleinputschid2} title="Select schema">
                    {schids}
                </DropdownButton>

                <DropdownButton variant="secondary" style={{ marginTop: "2%", marginBottom: "3%"}} onSelect={handleinputcredid2} title="Select cred def">
                   {defids}
                </DropdownButton>

                <button type="submit">Start proof</button>
            </Form>

        </>

        )
    }


    if (props.step == 2) {
        return (
            <div>
            <h4 style={{ marginBottom: "2%"}}>Select the attributes to request </h4>
                <Form onSubmit={props.proofcred}>
                    {atrib}
                    <button style={{ marginTop: "2%" }}type="submit">Send credential request</button>
                </Form>
            </div>


        )
    }



    if (props.step == 3) {
        
        return (
            <div>
            <p>Your request has been sent successfully. Please <Link to='/Checkcred' state={{presid: props.prof}}>click here </Link> to check the result </p>
            </div>

        )
    }

    

}
export default Proofcompr2;