const axios = require('axios');

 exports.proofcred = async (req, res, next) => {
 
  try {
      
    const cred = req.body; 
    resp= await axios.post("http://localhost:8030/api/proof/send-request/", cred)
    res.send(resp.data.response.presentation_exchange_id)
   
  } catch (error) {
    console.error(error);
  }
};  



exports.checkcred = async (req, res, next) => {
 
  try {
      
    const ppp = req.body.presid; 
    resp= await axios.get(`http://localhost:8030/api/proof/${ppp}`);
    res.send(resp.data.presentation.attributes);
   
  } catch (error) {
    console.error(error);
  }
};  