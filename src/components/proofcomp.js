import React, { useState, useEffect } from "react"
import { Table, Button, Form } from "react-bootstrap"

function Proofcomp(props) {

    


    function handleInputChange2(att, event) {
        props.handleInputChange(att, event.target.value)
       
    }

    function handleinputconnId2(event) {
        props.handleinputconnId(event.target.value)
    }

    function handleinputcomm2(event) {
        props.handleinputcomm(event.target.value)
    }

    function handleinputcredid2(event) {
        props.handleinputcredid(event.target.value)
    }

    function handleinputschid2(event) {
        props.handleinputschid(event.target.value)
    }





    const atrib = props.attr.map((att) => {

        return <div>
            <Form.Check type="checkbox" label={`${att}`} onChange={(e) => handleInputChange2(att, e)} />
        </div>

    })

    if (props.init == false) {
        return (
            <div>

                <Form onSubmit={props.proofcred}>
                    {atrib}
                    <button type="submit">Submit</button>
                </Form>
            </div>


        )
    }
    else {
        return (
            <>
                <Form  style={{ marginTop: "2%", marginBottom: "4%"}} onSubmit={props.handlebool}>
                    <div>
                        <input placeholder="introduce conn_id" style={{ width: 330, height: 30, marginBottom: "2%" }} type="text" onChange={handleinputconnId2} />
                    </div>
                    <div>
                        <input placeholder="introduce comment" style={{ width: 330, height: 30 , marginBottom: "2%"}} type="text" onChange={handleinputcomm2} />
                    </div>
                    <div>
                        <input placeholder="introduce cred_def_id" style={{ width: 330, height: 30 , marginBottom: "2%"}} type="text" onChange={handleinputcredid2} />
                    </div>
                    <div>
                        <input placeholder="introduce schema_id" style={{ width: 330, height: 30, marginBottom: "2%" }} type="text" onChange={handleinputschid2} />
                    </div>
                    <button type="submit">Start proof</button>
                </Form>

                {/* <Button variant="info" onClick={() => props.verify()}>verify</Button> */}

            </>
        )

    }

}
export default Proofcomp;