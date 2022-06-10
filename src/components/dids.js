import React from "react"
import { Table, Button } from "react-bootstrap"

function Dids(props) {


    const didslist = props.didlist.map(dids => {
        return <tr key={dids.did}>
            <td style={{textAlign: "center"}}> {dids.did}</td>
            <td style={{textAlign: "center"}}> {dids.posture=="wallet_only" ? "only available in wallet" : "posted on Blockchain"}</td>
        </tr>

    });

  
        return (

            <>

                <Table variant="dark" style={{ marginTop: "1%", maxWidth: "45%", overflow: "auto" }} striped bordered hover responsive>
                    <thead >
                        <tr >
                            <th style={{textAlign: "center"}}> Did</th>
                            <th style={{textAlign: "center"}}> Status</th>
                        </tr>

                    </thead>
                    <tbody style={{ height: "10px", overflowY: "scroll" }}>{didslist}</tbody>

                </Table>

            </>

        )
    

}
export default Dids;