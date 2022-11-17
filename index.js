const connection = require("./modal/connection")

const express = require("express")
const app = express();
app.use(express.json())

const route = require("./routes/register.route")
app.use("/",route)
app.use("/",route)


app.get("/",(req,res)=>{
    res.send("hi friends")
})

app.listen(4546,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server startted")
    }
})
