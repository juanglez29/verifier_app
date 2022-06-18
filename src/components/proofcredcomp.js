import React from "react"
import {Link} from "react-router-dom"
import { Button, Form, DropdownButton, Dropdown } from "react-bootstrap"

function Proofcredcomp(props) {

    
    function handleInputChange2(att, event) {
        props.handleInputChange(att, event.target.value)
       
    }
    function handleinputzkp2(p, event) {
        props.handleinputzkp(p, event.target.value)
       
    } 
    function handleinputdefid2(event) {
        props.handleinputdefid(event)
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

        var a= "";
        if(att=="agent"){
            a= "Agent"
            return <div>
            <Form.Check type="checkbox" label={`${a}`} onChange={(e) => handleInputChange2(att, e)} />
            </div>
        }
        if(att=="expiration"){
            a = "Expiration date"
            //var date = new Date();
            var p = {name: "expiration",condition: ">=",comparisonValue: "4"}
           
            return <div style={{width: "50%"}}>
            <Form.Check style={{marginRight:"7.2%" ,display: 'inline-block'}} type="checkbox" label={`${a}`} onChange={(e) => handleInputChange2(att, e)} />
            <Form.Check style={{marginRight: "10%",display: 'inline-block'}} type="checkbox" label={`${a} (zkp)`} onChange={(e) => handleinputzkp2(p, e)} />
        </div>
        }

        if(att=="name_last_dosis"){
            a= "Vaccine name"
            return <div>
            <Form.Check type="checkbox" label={`${a}`} onChange={(e) => handleInputChange2(att, e)} />
        </div>
        }
        if(att=="n_dosis"){
            a= "Number of doses"
            var p= {name: "n_dosis",condition: ">=",comparisonValue: "3"}
                   return <div style={{width: "50%"}}>
            <Form.Check style={{marginRight:"5%" ,display: 'inline-block'}} type="checkbox" label={`${a}`} onChange={(e) => handleInputChange2(att, e)} />
            <Form.Check style={{marginRight: "10%",display: 'inline-block'}} type="checkbox" label={`${a} (zkp)`} onChange={(e) => handleinputzkp2(p, e)} />
        </div>
        }
        if(att=="date_last_dosis"){
            a= "Date of last dose"
            //var date = new Date();
            //var date2= (date - 23328000000);
            var p= {name: "date_last_dosis",condition: "<=",comparisonValue: ""}
            return <div style={{width: "50%"}}>
            <Form.Check style={{marginRight:"5.3%" ,display: 'inline-block'}} type="checkbox" label={`${a}`} onChange={(e) => handleInputChange2(att, e)} />
            <Form.Check style={{marginRight: "10%", display: 'inline-block'}} type="checkbox" label={`${a} (zkp)`} onChange={(e) => handleinputzkp2(p, e)} />
        </div>
        }
        if(att=="country_last_dosis"){
            a= "Country of last dose"
            return <div>
            <Form.Check type="checkbox" label={`${a}`} onChange={(e) => handleInputChange2(att, e)} />
        </div>

        }

    })


    if (props.step == 1) {
        return (
                    <>
            <Form  style={{ marginTop: "2%", marginBottom: "4%"}} onSubmit={props.handlebool}>
              <h4>Select the schema and credential definition </h4>
                <DropdownButton variant="secondary" style={{ marginTop: "2%", marginBottom: "1%"}} onSelect={handleinputschid2} title="schema">
                    {schids} 
                </DropdownButton>

                <DropdownButton variant="secondary" style={{ marginTop: "1%", marginBottom: "4%"}} onSelect={handleinputdefid2} title="credential definition">
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
export default Proofcredcomp;