const axios = require('axios');


exports.getdids = async (req, res, next) => {
  try {
    const resp = await axios.get("http://localhost:8030/api/wallet/dids");
    res.send(resp.data);

  } catch (error) {
    console.error(error);
  }
};
  
  exports.getschemas = async (req, res, next) => {
    try {
      const resp = await axios.get("http://localhost:8020/api/wallet/credentials/schemas/created");
      res.send(resp.data);
  
    } catch (error) {
      console.error(error);
    }
  };

  exports.getschema = async (req, res, next) => {
    try {
      const schemaID = req.body.schema;
      const resp = await axios.get(`http://localhost:8030/api/wallet/credentials/schemas/${schemaID}`);
      res.send(resp.data);
  
    } catch (error) {
      console.error(error);
    }
  };

  
  exports.getdefinitions = async (req, res, next) => {
    try {
      const resp = await axios.get("http://localhost:8020/api/wallet/credentials/definitions/created");
      res.send(resp.data);
  
    } catch (error) {
      console.error(error);
    }
  };


  