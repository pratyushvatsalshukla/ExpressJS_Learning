const express= require('express');
const app = express() ;

// www.pratyush.com - welcome to my homepage
// /about - welcome to my about page 
// /contact - welcome to my contact page
// /temp - welcome to my temp page


app.get('/', (req, res)=> {
    res.send("Welcome to my homepage");
}).get('/about', (req,res)=>{
    res.send("Welcome to About Page !!") ;
}).get('/contact', (req, res)=>{
    res.send("Welcome to Contact Page !") ;
}).get('/temp', (req, res)=>{
    res.send("Welcome to Temp Page !!") ;
}) ;

app.listen(3000,'127.0.0.1', ()=>{
    console.log("Server is running on port 3000") ;
})