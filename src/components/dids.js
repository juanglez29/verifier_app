import React from "react"
import { Table, Button } from "react-bootstrap"

function Dids(props) {


    function handleInputChange2(event) {
        props.handleInputChange(event.target.value);
    }

    const didslist = props.didlist.map(dids => {
        return <tr key={dids.did}>
            <td> {dids.did}</td>
            <td> {dids.posture}</td>
        </tr>

    });

  
        return (

            <>

                <form style={{ marginTop: "2%" }} onSubmit={props.getdid}>
                    <input placeholder="introduce DID" style={{ width: 330, height: 30 }} type="text" onChange={handleInputChange2} />
                    <Button variant="primary" size="sm" style={{ marginLeft: "1.6%" }} type="submit">Search by DID</Button>
                </form>

                <Table style={{ marginTop: "1%", maxWidth: "55%" }} striped bordered hover responsive>
                    <thead >
                        <tr >
                            <th> Did</th>
                            <th> Posture</th>
                        </tr>

                    </thead>
                    <tbody style={{ overflowY: "scroll" }}>{didslist}</tbody>

                </Table>

            </>

        )
    

}
export default Dids;