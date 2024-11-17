const express = require("express")
const app = express();

const port = 3000;

app.listen(port , ()=>{
    console.log(`App is running on Port ${port}`)
})

// app.use((req,res) => {
//     console.log("Response Recieved!")
//     res.send("My First Express Project!")
// })

app.get("/",(req,res)=>{
    res.send("Root Directory!")
})