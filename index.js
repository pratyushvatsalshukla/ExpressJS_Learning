// TO install expressJS, write npm install express --save

const fs = require('fs');

const jsonD = fs.readFileSync('./fakeJson.json');

const express = require('express') ;
const server = express();

server.get('/',(req,res)=>{
    // res.send("<i>Hello from Express</i>") ; // sends either text or entire html
    // res.sendFile(__dirname+'/hello.txt') ; // sends file
    res.json(JSON.parse(jsonD)) ; // send express data
})


server.listen(3000, '127.0.0.1',()=>{
    console.log("Hello from Server.Listen") ;
})

