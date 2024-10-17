const express = require("express");

const app = express();
app.use(express.json());

app.use("*", (req,res)=>{
    res.status(404).json({success:false, message: "route isn't there"});
});


module.exports = app;