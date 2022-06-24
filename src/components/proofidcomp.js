import {React}from "react"
import {Link} from "react-router-dom"
import {Form, DropdownButton, Dropdown } from "react-bootstrap"

function Proofidcomp(props) {

    function handleInputChange2(att, event) {
        props.handleInputChange(att, event.target.value)
       
    }

    function handleinputdefid2(event) {
        props.handleinputdefid(event)
    }

    function handleinputschid2(event) {
        props.handleinputschid(event)
    }


    const atrib = props.attr.map((att) => {

        var a= "";

        if(att=="photo_url"){
            a= "Photo"
            return <div>
            <Form.Check type="checkbox" label={a} onChange={(e) => handleInputChange2(att, e)} />
        </div>
        }

        if(att=="full_name"){
            a= "Full name"
            return <div>
            <Form.Check type="checkbox" label={a} onChange={(e) => handleInputChange2(att, e)} />
        </div>
        }

        if(att=="birthday"){
            a= "Age"
            return <div>
            <Form.Check type="checkbox" label={a} onChange={(e) => handleInputChange2(att, e)} />
        </div>
        }

        if(att=="dni_number"){
            a= "Dni"
            return <div>
            <Form.Check type="checkbox" label={a} onChange={(e) => handleInputChange2(att, e)} />
        </div>
        }

        if(att=="address"){
            a= "Home adress"
            return <div>
            <Form.Check type="checkbox" label={a} onChange={(e) => handleInputChange2(att, e)} />
        </div>
        } 

    })

   
    if (props.step == 1) {
        return (
            <>
                <Form  style={{ marginTop: "2%", marginBottom: "2%"}} onSubmit={props.handlebool}>
                  
                    <h4>Select the schema and credential definition </h4>
                    <DropdownButton variant="secondary" style={{ marginTop: "2%", marginBottom: "1%"}} onSelect={handleinputschid2} title="schema" id="dropdown-basic-button" >
                      {/*   <Dropdown.Item eventKey="5zSjAUVLutZmATa97c5cNK:2:covID_PoC_Identity:1.06">5zSjAUVLutZmATa97c5cNK:2:covID_PoC_Identity:1.06 (297813)</Dropdown.Item>
                        <Dropdown.Item eventKey="5zSjAUVLutZmATa97c5cNK:2:covID_PoC_Identity:1.07">5zSjAUVLutZmATa97c5cNK:2:covID_PoC_Identity:1.07 (299953)</Dropdown.Item> */}
                        <Dropdown.Item eventKey="5zSjAUVLutZmATa97c5cNK:2:covID_PoC_Identity:1.08">5zSjAUVLutZmATa97c5cNK:2:covID_PoC_Identity:1.08 (335951)</Dropdown.Item>
                        <Dropdown.Item eventKey="5zSjAUVLutZmATa97c5cNK:2:covID_PoC_Identity:1.09">5zSjAUVLutZmATa97c5cNK:2:covID_PoC_Identity:1.09 (338520)</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton variant="secondary" style={{ marginTop: "1%", marginBottom: "4%"}} onSelect={handleinputdefid2} title="credential definition" id="dropdown-basic-button" >   
                        {/* <Dropdown.Item eventKey="5zSjAUVLutZmATa97c5cNK:3:CL:297813:covID_PoC_Identity">5zSjAUVLutZmATa97c5cNK:3:CL:297813:covID_PoC_Identity</Dropdown.Item>
                        <Dropdown.Item eventKey="5zSjAUVLutZmATa97c5cNK:3:CL:299953:covID_PoC_Identity">55zSjAUVLutZmATa97c5cNK:3:CL:299953:covID_PoC_Identity</Dropdown.Item>    */}
                        <Dropdown.Item eventKey="5zSjAUVLutZmATa97c5cNK:3:CL:335951:covID_PoC_Identity">55zSjAUVLutZmATa97c5cNK:3:CL:335951:covID_PoC_Identity</Dropdown.Item>  
                        <Dropdown.Item eventKey="5zSjAUVLutZmATa97c5cNK:3:CL:338520:covID_PoC_Identity">55zSjAUVLutZmATa97c5cNK:3:CL:338520:covID_PoC_Identity</Dropdown.Item>  
                    </DropdownButton>

                    <button type="submit">Next</button>

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
                    <button style={{ marginTop: "2%" }}type="submit">Send identity request</button>
                </Form>
            </div>
        )
    }

    
    if (props.step == 3) {
        if(props.msg==="nuevanotif"){
        return (
            <div>
            <p> Please, <Link to='/Checkid' state={{presid: props.prof, connid: props.connid}}>click here </Link> to check the result. </p>
            </div>
        )}

        if (props.msg==="error") {
            return (
                <div>
                <p>An error ocurred during the presentation </p>
                </div>
        )}

        else {
            return (
                <div>
                <p>Your request has been sent successfully.</p>
                </div>
                  )}   
                              
     }

 

}
export default Proofidcomp;
