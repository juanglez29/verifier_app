import React from "react";
import { Table, Button } from "react-bootstrap"

function Credentials(props) {


    const credlist = props.myschemas.map(schema => {
       
        return <tr key={schema.id}>
            <td style={{textAlign: "center", verticalAlign: "center"}}> {schema.ver}</td>
            <td style={{textAlign: "center"}}> {schema.id}</td>
            <td style={{textAlign: "center"}}> {schema.name}</td>
            <td style={{textAlign: "center"}}> {schema.version}</td>
            <td style={{textAlign: "center"}}> {schema.attrNames.join(", ")} </td>

        </tr>

    });


    if(props.myschemas.length==0){
        return( 
            
            <>
            <p>The ECDC has not published any schema</p>
            </>
        )
    }

    
        else{ 
            
            return (

            <>

                <Table variant="dark" style={{marginTop: "1%", maxWidth: "55%"}} striped bordered hover responsive>
                    <thead >
                        <tr >
                            <th style={{textAlign: "center"}}> Ver</th>
                            <th style={{textAlign: "center"}}> ID</th>
                            <th style={{textAlign: "center"}}> name</th>
                            <th style={{textAlign: "center"}}> version</th>
                            <th style={{textAlign: "center"}}> attributes</th>
                        </tr>
                    </thead>
                    <tbody style={{ overflowY: "scroll" }}>
                        {credlist}
                    </tbody>

                </Table>

            </>
        )
            }


}

export default Credentials;