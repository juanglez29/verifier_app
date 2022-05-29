import React from "react"
import { Table, Button } from "react-bootstrap"

function Dids(props) {


    const didslist = props.didlist.map(dids => {
        return <tr key={dids.did}>
            <td style={{textAlign: "center"}}> {dids.did}</td>
            <td style={{textAlign: "center"}}> {dids.posture}</td>
        </tr>

    });

  
        return (

            <>

                <Table variant="dark" style={{ marginTop: "1%", maxWidth: "55%" }} striped bordered hover responsive>
                    <thead >
                        <tr >
                            <th style={{textAlign: "center"}}> Did</th>
                            <th style={{textAlign: "center"}}> Status</th>
                        </tr>

                    </thead>
                    <tbody style={{ overflowY: "scroll" }}>{didslist}</tbody>

                </Table>

            </>

        )
    

}
export default Dids;