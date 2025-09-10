const mongoose = require("mongoose")


const ConnectDB = async () => {
    try {
        let db = await mongoose.connect("mongodb://127.0.0.1:27017/vDrug")
        console.log("Connected....")

    }

    catch (err) {
        console.log("Not connected!")
        process.exit(1)
    }

}

module.exports=ConnectDB
