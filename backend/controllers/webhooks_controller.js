const axios = require('axios');

 exports.whconn = async (req, res, next) => {
  
     const event= req.body;
      switch(event.topic){
    case "presentproof":
    if(event.event_name==="presentation_verified"){
       // const x= res.json({});
        res.send(event);
    }
    else{
        console.log("msg received");
    }
break;
      }
     
   
  
};  