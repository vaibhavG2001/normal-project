const express=require("express")
const ConnectDB = require("./mongooseConnect")
const register  = require("./routes_logic")
const app=express()
const cors=require("cors")

app.use(express.json())
app.use(cors())


app.post("/register",register)
ConnectDB()


app.listen(5000,()=>{})