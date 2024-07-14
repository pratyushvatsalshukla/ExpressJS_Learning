// TO install expressJS, write npm install express --save

// const fs = require("fs");

// const jsonD = fs.readFileSync("./fakeJson.json");

// const express = require("express");
// const { type } = require("os");
// const server = express();

// Middleware. It should be written above the APIs.
// This is application level middleware
// server.use((req, res, next) => {
//   console.log("Hello from Use");
//   console.log(req.method, req.hostname, req.ip, req.get("User-Agent"));

//   // By next() we tell the server to move on to next request as this request is now comlpeted.
//   next();
// });

// const auth = (req, res, next) => {
//     console.log(req.query);
//     if (req.query.password==123) {
//         res.send("Hello from Auth");
//       // By next() we tell the server to move on to next request as this request is now comlpeted.
//       next();
//     } else {
//       res.sendStatus(401);
//     }
//   };

// server.use(auth);



//APIs / Endpoints / Routes / But not REST APIs
// server.get("/", (req, res) => {
  // res.send("<i>Hello from Express</i>") ; // sends either text or entire html
  // res.sendFile(__dirname+'/hello.txt') ; // sends file

  // res.sendStatus(404)
  // res.json(JSON.parse(jsonD)) ; // send express data

  // res.status(201).send("Hello From Express JS") // Using Shorthand

//   res.json({ type: "GET" });
// });


// Like below we can send post put get delete update mappings, just as springboot
// server.post("/", (req, res) => {
//   res.json({ type: "POST" });
// });

// server.put("/", (req, res) => {
//   res.json({ type: "PUT" });
// });

// server.delete("/", (req, res) => {
//   res.json({ type: "DELETE" });
// });

// server.listen(3000, "127.0.0.1", () => {
//   console.log("Hello from Server.Listen");
// });
// -----------------------------------------------------------------

                                    // TT

const express=  require('express');
const app = express() ;

// The callback function has 2 parameters, request and response . 
// The request object represents the HTTP request and 
// has propertiesfor the request query string parameters, body, Http Headers etc 

// Similarly the response object represents the HTTP response. 
// that the Express app sends when it receives an HTTP request


app.get('/', (req, res) => {
    res.send("Hello from Express JS");
})

app.listen(3000,'127.0.0.1', () => {
    console.log("Server is running on port 3000");
})