
const express=require("express")
const { register } = require("module")
const app=express()


app.post("/register",register)