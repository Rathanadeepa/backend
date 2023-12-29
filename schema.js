const mongoose=require("mongoose")
const data_schema=mongoose.Schema({
    name:{
         type:String,
         require:true,
    },
    email:{
        type:String,
        require:true,
    },
    location:{
        type:String,
        require:true,
    },
})
module.exports=mongoose.model("pra_db",data_schema)