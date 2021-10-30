var express = require("express"),
    session= require("express-session"),
    router = express.Router(),
    url = require('url');
const { uuid } = require('uuidv4');
const { v4: uuidv4 } = require('uuid');
const { connected } = require("process");
const timestamp = require('time-stamp'),
    dbConnection = require("../config/dbConnection.js"),
    connection = dbConnection.getConnection();// for database connection.


router.post("/login",function(req,res){
    var username =req.body.userName;
    var password = req.body.password;
    console.log(username,password);
    connection.query("SELECT * FROM clmsdb.parking_data ",function(err,data){
        if(err) throw err;
        else {
            console.log(data);
            res.send(response(true,"success",data));
        }
        
    }) 


})



;
         









function response(success, message, data) {
    return { success: success, message: message, data: data }
}
module.exports = router;