import React from "react";
import { Table, Button } from "react-bootstrap"

function Credentials(props) {


    const credlist = props.myschemas.map(schema => {

        return <tr key={schema.id}>
            <td style={{ textAlign:"center", verticalAlign: "middle" }}> {schema.ver}</td>
            <td style={{ textAlign:"center", verticalAlign: "middle" }}> {schema.id}</td>
            <td style={{ textAlign:"center", verticalAlign: "middle" }}> {schema.name}</td>
            <td style={{ textAlign:"center", verticalAlign: "middle" }}> {schema.version}</td>
            <td style={{ textAlign:"center", verticalAlign: "middle" }}> {schema.attrNames.map(att => {

                if (att == "agent") {
                    return <p style={{ marginBottom: "0%" }}>Agent</p>
                }
                if (att == "expiration") {
                    return <p style={{ marginBottom: "0%", whiteSpace: 'nowrap' }}>Expiration date</p>
                }
                if (att == "name_last_dosis") {
                    return <p style={{ marginBottom: "0%", whiteSpace: 'nowrap' }}>Vaccine name</p>
                }
                if (att == "n_dosis") {
                    return <p style={{ marginBottom: "0%", whiteSpace: 'nowrap' }}>Number of doses</p>
                }
                if (att == "date_last_dosis") {
                    return <p style={{ marginBottom: "0%", whiteSpace: 'nowrap' }}>Date of last dose</p>
                }
                if (att == "country_last_dosis") {
                    return <p style={{ marginBottom: "0%", whiteSpace: 'nowrap' }}>Country of last dose</p>
                }

            })} </td>

        </tr>

    });


    if (props.myschemas.length == 0) {
        return (

            <>
                <p>The ECDC has not published any schema</p>
            </>
        )
    }


    else {

        return (

            <>

                <Table variant="dark" style={{ marginTop: "1%", maxWidth: "55%" }} striped bordered hover responsive>
                    <thead >
                        <tr >
                            <th style={{ textAlign: "center" }}> Ver</th>
                            <th style={{ textAlign: "center" }}> ID</th>
                            <th style={{ textAlign: "center" }}> name</th>
                            <th style={{ textAlign: "center" }}> version</th>
                            <th style={{ textAlign: "center" }}> attributes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {credlist}
                    </tbody>

                </Table>

            </>
        )
    }


}

export default Credentials;