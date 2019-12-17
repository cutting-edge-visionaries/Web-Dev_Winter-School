// Code By Pushpendra
const express = require("express"); // Demanding Express Library to import
const app = express(); // creating obj of express

app.listen(5000, () => console.log(`Listening on port ${port}`)); // listen method expects 2 params, 1 - PORT Number, and another callback function


app.get('/hello',(req,res)=>{ // req not used because it iis not neded here
    res.setHeader('Content-type','text/json') // Defining type of data we are trying to send it as reponse from server
    obj = {
        event:"CEV Event was Really Awesome!! and I enjoyed that one !!"
    } // obj is just a sample data JS Ojbect that we will send as reponse
    res.send(obj);
})
