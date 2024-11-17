const express = require("express");
const app = express();

const port = 8080;

app.listen(port , ()=>{
    console.log(`App is running on Port ${port}`)
})

app.get("/" , (req,res)=>{
    res.render("home.ejs")
})