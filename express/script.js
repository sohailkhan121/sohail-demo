const express = require("express")
const app = express();

const port = 3000;

app.listen(port , ()=>{
    console.log(` ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help`)
})