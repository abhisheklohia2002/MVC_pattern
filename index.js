const express = require("express");
const app = express();
const port = 5000;
require("./db/db");
const userRoutess = require("./routes/Userroutes");
app.use(express.json())

app.use('/api',userRoutess);


app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})