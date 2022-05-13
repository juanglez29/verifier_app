const axios = require('axios');


exports.getconnections = async (req, res, next) => {
  try {
    const resp = await axios.get("http://localhost:8030/api/connections");
    res.send(resp.data);

  } catch (error) {
    console.error(error);
  }
};


exports.getActive = async (req, res, next) => {
  try {
    const resp = await axios.get("http://localhost:8030/api/connections/active");
    res.send(resp.data);

  } catch (error) {
    console.error(error);
  }
};


exports.getPending = async (req, res, next) => {
  try {
    const resp = await axios.get("http://localhost:8030/api/connections/pending");
    res.send(resp.data);

  } catch (error) {
    console.error(error);
  }
};


exports.createInvitation = async (req, res, next) => {
  try {
    const alias = req.body.alias;
    const resp = await axios.post(`http://localhost:8030/api/connections/create-invitation?alias=${alias}`);
    res.send(resp.data.invitation.invitation_url);

  } catch (error) {
    console.error(error);
  }
};


exports.acceptInvitation = async (req, res, next) => {
  try {
    const invitation = req.body; //por qué si lo hago con req.body.invitaton_url, también funciona?
    await axios.post("http://localhost:8030/api/connections/accept-invitation", invitation);

  } catch (error) {
    console.error(error);
  }
};

exports.acceptConnection = async (req, res, next) => {
  try {
    const conn_id = req.body.conn_id;
    await axios.post(`http://localhost:8030/api/connections/${conn_id}/accept-connection`);

  } catch (error) {
    console.error(error);
  }
};

exports.removeConnection = async (req, res, next) => {
  try {
    const conn_id = req.body.conn_id;
    await axios.delete(`http://localhost:8030/api/connections/${conn_id}`);

  } catch (error) {
    console.error(error);
  }
};


exports.sendMessage = async (req, res, next) => {
  try {
    const message = req.body.msg;
    const conn_id = req.body.conn_id;
    await axios.post(`http://localhost:8030/api/connections/${conn_id}/send-message`, message);

  } catch (error) {
    console.error(error);
  }
};


