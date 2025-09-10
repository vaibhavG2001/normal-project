    const mongoose=require("mongoose")

    let maindata=mongoose.Schema({
        name:{type:String,required:true},
        email:{type:String,required:true},
        hash_password:{type:String,required:true}
    })

    const schema=mongoose.model("users",maindata)
    module.exports=schema