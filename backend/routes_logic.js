const schema = require("./schema")
const bcrypt=require("bcryptjs")

 let register = async (req, res) => {
    const { name, email, password } = req.body

    if (name && email && password) {
        let hash_password=await bcrypt.hash(password,10)
        let createDb=await schema.create({name,email,hash_password})
        console.log("Created!")
        res.status(200).send("Created successfully!")
    }

    else{
        res.status(400).send("Enter All Inputs First!")
    }
}

module.exports=register