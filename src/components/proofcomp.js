import React from "react"
import {Link} from "react-router-dom"
import { Button, Form, DropdownButton, Dropdown } from "react-bootstrap"

function Proofcomp(props) {

    
    function handleInputChange2(att, event) {
        props.handleInputChange(att, event.target.value)
       
    }

    function handleinputcredid2(event) {
        props.handleinputcredid(event)
    }

    function handleinputschid2(event) {
        props.handleinputschid(event)
    }




    const atrib = props.attr.map((att) => {

        return <div>
            <Form.Check type="checkbox" label={`${att}`} onChange={(e) => handleInputChange2(att, e)} />
        </div>

    })

   
    if (props.step == 1) {
        return (
            <>
                <Form  style={{ marginTop: "2%", marginBottom: "4%"}} onSubmit={props.handlebool}>
                  
                 {/*    <div>
                        <input placeholder="introduce comment" style={{ width: 330, height: 30 , marginBottom: "2%"}} type="text" onChange={handleinputcomm2} />
                    </div>
                    <div>
                        <input placeholder="introduce cred_def_id" style={{ width: 330, height: 30 , marginBottom: "2%"}} type="text" onChange={handleinputcredid2} />
                    </div>
 */}
                    <DropdownButton onSelect={handleinputschid2} id="dropdown-basic-button" title="Select schema">
                        <Dropdown.Item eventKey="5zSjAUVLutZmATa97c5cNK:2:covID_PoC_Identity:1.05">5zSjAUVLutZmATa97c5cNK:2:covID_PoC_Identity:1.05</Dropdown.Item>
                        <Dropdown.Item eventKey="pato">Another action</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton onSelect={handleinputcredid2} id="dropdown-basic-button" title="Select cred def">
                        <Dropdown.Item eventKey="5zSjAUVLutZmATa97c5cNK:3:CL:279629:covID_PoC_Identity">5zSjAUVLutZmATa97c5cNK:3:CL:279629:covID_PoC_Identity</Dropdown.Item>
                        <Dropdown.Item eventKey="pato">Another action</Dropdown.Item>   
                    </DropdownButton>

                    {/* <div>
                        <input placeholder="introduce schema_id" style={{ width: 330, height: 30, marginBottom: "2%" }} type="text" onChange={handleinputschid2} />
                    </div> */}

                    <button type="submit">Start proof</button>
                </Form>

            </>
        )

    }


    if (props.step == 2) {
        return (
            <div>

                <Form onSubmit={props.proofcred}>
                    {atrib}
                    <button type="submit">Submit</button>
                </Form>
            </div>


        )
    }

    
    if (props.step == 3) {
        return (
            <div>
            <p>Your request has been sent successfully</p>
            
            <Link to='/Check' state={{presid: props.prof, connid: props.connid}}>check credential attributes</Link>

            </div>

        )
    }

 

}
export default Proofcomp;