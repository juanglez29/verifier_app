
import React, { useState, useEffect } from "react";
//import ReactTable from "react-table";
import { useLocalStorage } from "../filter_config";
import Connections from "../components/connections";
import ConnectWith from "../components/connectwith";
const axios = require('axios');


function ConnectionManagment() {

    const [list, setList] = useState([]);
    const [url, setUrl] = useState("");
    const [update, setUpdate] = useState(false);
    const [filter, setFilter] = useLocalStorage("filter", "all");
    //const [filter, setFilter] = useState("all");



    useEffect(async () => {

        if(filter==="all"){
        await axios.get('http://localhost:8031/myapi/connections')
         .then(res => setList(res.data.connections))
        }

        if (filter === "pendinng") {
            await axios.get('http://localhost:8031/myapi/connections/pending')
                .then(res => setList(res.data.connections_pending))
        }

        if (filter === "active") {
            await axios.get('http://localhost:8031/myapi/connections/active')
                .then(res => setList(res.data.connections_active))
        }

    }, [update, filter])


    async function getallconn() {
        try {
           await setFilter("all")
        } catch (error) {
            console.error(error);
        }

    }

    async function getpendingconn() {
        try {
            await setFilter("pendinng")
        } catch (error) {
            console.error(error);
        }

    }

    async function getactiveconn() {
        try {
            await setFilter("active")
        } catch (error) {
            console.error(error);
        }

    }

    async function receiveandaccept(event) {
        try {
            event.preventDefault();
            await axios.post('http://localhost:8031/myapi/connections/accept-invitation', { invitation_url: url })
                .then(setUpdate(!update));

        } catch (error) {
            console.error(error);
        }
    }

    async function acceptconnection(id, event) {
        try {
            event.preventDefault();
            await axios.post('http://localhost:8031/myapi/connections/accept-connection', { conn_id: id })
                 .then(setUpdate(!update));

        } catch (error) {
            console.error(error);
        }
    }

    async function removeconnection(id, event) {

        try {
            event.preventDefault();
            await axios.post('http://localhost:8031/myapi/connections/remove-connection', { conn_id: id })
                .then(setUpdate(!update));

        } catch (error) {
            console.error(error);
        }
    }



    function handleInputChange(url) {
        setUrl(url);
    }



    if (list.length == 0) {
        return (
            <> <p style={{textAlign: "center", padding:"220px"}}>no connections yet </p></>
        )
    }

    else {

        return (

            <div>

                <Connections removeconnection={removeconnection}
                    acceptconnection={acceptconnection}
                    getallconn={getallconn}
                    getpendingconn={getpendingconn}
                    getactiveconn={getactiveconn}
                    list={list}
                    filter={filter} />

                <ConnectWith handleInputChange={handleInputChange}
                    receiveandaccept={receiveandaccept} />

            </div>

        )
    }

}

export default ConnectionManagment;


