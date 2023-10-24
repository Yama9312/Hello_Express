const express = require("express"); 
const app = express();
const port = 3000;
app.get("/", (req, res) => { //request and response
res.send("Hello World!"); //when a request is made this is what is sent back
});
app.listen(port, () => {
console.log(`Example app listening on port ${port}!`);
});