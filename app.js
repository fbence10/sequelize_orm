const express = require("express")

const app = express()

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res) =>{
    res.status(200).send("tengermely tisztelet elo egyenes az adas")
})

module.exports = app