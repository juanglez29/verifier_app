import React from "react";
import { Table, Button } from "react-bootstrap"

function Credentials(props) {

    function handleInputChangeschema2(event) {
        props.handleInputChangeschema(event.target.value);
    }


    const credlist = props.myschemas.map(schema => {
       
        return <tr key={schema.id}>
            <td> {schema.ver}</td>
            <td> {schema.id}</td>
            <td> {schema.name}</td>
            <td> {schema.version}</td>
            <td> {schema.attrNames} </td>

        </tr>

    });


    if (props.all == true) {

        return (

            <>

                <form onSubmit={props.getschema}>
                    <input placeholder="introduce SchemaID" style={{ width: 330, height: 30 }} type="text" onChange={handleInputChangeschema2} />
                    <Button variant="primary" size= "sm" style={{marginLeft: "1.6%"}} type="submit">Search by SchemaID</Button>
                </form>

                <Table style={{marginTop: "1%", maxWidth: "55%"}} striped bordered hover responsive>
                    <thead >
                        <tr >
                            <th> Ver</th>
                            <th> ID</th>
                            <th> name</th>
                            <th> version</th>
                            <th> attributes</th>
                        </tr>

                    </thead>
                    <tbody style={{ overflowY: "scroll" }}>
                        {credlist}
                    </tbody>

                    </Table>

            </>
        )
    }


    else {

        return (
            <>

                <Button variant= "outline-info" onClick={() => props.handleOnclick()}>See all schemas</Button>

                <Table style={{ maxWidth: "55%" }} striped bordered hover responsive>
                    <thead >
                        <tr >
                            <th> Ver</th>
                            <th> ID</th>
                            <th> name</th>
                            <th> version</th>
                            <th> attributes</th>
                        </tr>

                    </thead>
                    <tbody style={{ overflowY: "scroll" }}>
                        <tr key={props.schema.id}>
                            <td> {props.schema.ver}</td>
                            <td> {props.schema.id}</td>
                            <td> {props.schema.name}</td>
                            <td> {props.schema.version}</td>
                            <td> {props.schema.attrNames} </td>

                        </tr>
                    </tbody>

                </Table>
            </>
        )
    }
}

export default Credentials;