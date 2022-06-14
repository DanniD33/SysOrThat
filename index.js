const { resolveSoa } = require("dns");
const express = require("express");
const { appendFile } = require("fs");
const { dirname } = require("path");
const server = express();
const PORT = process.env.PORT || 3000

//to serve static file, we still need to use our methods to determine what it is we want to do with said file once we've served it 
// server.use(express.static(__dirname + '/Scenarios/index.html'))

server.get("/", (req,res) => {
  res.sendFile(__dirname + '/Scenarios/index.html');
})

server.listen(PORT, () =>{
  console.log("Listening on port ", PORT);
});