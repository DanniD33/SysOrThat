const { resolveSoa } = require("dns");
const express = require("express");
const { appendFile } = require("fs");
const server = express();
const PORT = process.env.PORT || 3000

server.get("/", (req,res) => {
  res.send("What up tho")
})

server.listen(PORT, () =>{
  console.log("Listening on port ", PORT);
});