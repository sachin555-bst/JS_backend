require('dotenv').config()  //env
const express = require("express");

const app = express();   //all the functions and method is accessible to "app variable"

const port = 4000;  //old port

//first (get) the req and (send) the res
app.get('/', (req, res) => {
  res.send("hello world");
});

app.get('/login',(req,res)=>{
    res.send('<h1>Login into bista.com</h1>')
})

//then listen the port 

//NOW THE PORT WILL BE 3000 FROM .ENV PORT
//port is replaced by process.env.PORT
app.listen(process.env.PORT, () => {     
  //console.log(`example app listening on port ${port}`);  //PREVIOUS PORT
  console.log(`example app listening on port ${process.env.PORT}`);  // new .env port
  console.log("server is built and running...............");
});
