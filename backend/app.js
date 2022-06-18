const express= require('express');
const app= express();
//const webhooks= require('/home/juan/verifier_app/backend/controllers/webhooks_controller.js');
const indexrouter= require('/home/juan/verifier_app/backend/routes/index2.js');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors());
app.use('/myapi',indexrouter);


app.listen(8031, ()=> console.log('server running on PORT 8031'));