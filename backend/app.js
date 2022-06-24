const express = require('express');
const http = require('http');
const indexrouter = require('/home/juan/verifier_app/backend/routes/index2.js');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const server = http.createServer(app);
const socketio = require('socket.io');
const socket = socketio(server);

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.use('/myapi', indexrouter);

app.use('/webhooks', (req, res) => {

    const event = req.body;
     
    if (event.topic === "bassicmessages") {
        if (event.event_name === "message_received") {
            socket.emit('msg', "bien")
        }
        else {
            console.log("error");
        }
    }

    if (event.topic === "presentproof") {
        if (event.event_name === "presentation_verified") {
            socket.emit('msg', "nuevanotif")
        }
        else {
            socket.emit('msg', "error");
        }
    }

    else {
        console.log("error");
    }

});


server.listen(8031, () => console.log('server running on PORT 8031'));