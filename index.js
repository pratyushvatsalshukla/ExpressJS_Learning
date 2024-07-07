// TO install expressJS, write npm install express --save

const fs = require('fs');

const jsonD = fs.readFileSync('./fakeJson.json');

const express = require('express') ;
const { type } = require('os');
const server = express();


//APIs / Endpoints / Routes / But not REST APIs
server.get('/',(req,res)=>{
    // res.send("<i>Hello from Express</i>") ; // sends either text or entire html
    // res.sendFile(__dirname+'/hello.txt') ; // sends file

    // res.sendStatus(404)
    // res.json(JSON.parse(jsonD)) ; // send express data

    // res.status(201).send("Hello From Express JS") // Using Shorthand

res.json({type:'GET'})
})

server.post('/',(req, res)=>{
    res.json({type:'POST'})
}) ;

server.put('/',(req, res)=>{
    res.json({type:'PUT'})
}) ;
      
server.delete('/',(req, res)=>{
    res.json({type:'DELETE'})
}) ;



server.listen(3000, '127.0.0.1',()=>{
    console.log("Hello from Server.Listen") ;
})

