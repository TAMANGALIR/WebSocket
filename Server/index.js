const express = require("express");
const {Server} = require("socket.io");

const  app = express();

const PORT = 3003;

app.use("/", (req, res)=>{
    res.send("Hello World");
})

app.listen(PORT, () =>{
    console.log("Server running on PORT:", PORT)
});