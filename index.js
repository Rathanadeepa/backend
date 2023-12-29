const express=require("express");
const mongoose= require("mongoose");
const data_schema=require ("./schema.js");
const app=express();
 
const cors=require("cors");
mongoose.connect("mongodb://127.0.0.1:27017/pra_db")
.then(()=>{
    console.log("db is connected");
})
.catch(()=>{
    console.log("db is not connected");
});
app.use(express.json());
app.use(cors());

app.get("/get",async(req,res)=>{
    const data_get=await data_schema.find();
    res.json(data_get);
});
app.post("/create",async(req,res)=>{
    const data=data_schema({
        name:req.body.name,
        email:req.body.email
    })
    const data_save=await data.save();
    res.json(data_save);
});
app.put("/update/:id", async (req, res) => {
    const updatedata = await data_schema.findByIdAndUpdate(req.params.id,
    { $set: req.body },
    { new: true } );
    res.json({ msg: "you'r update successfuly", data: updatedata });
    });
  
    app.delete("/delete/:id", async (req, res) => {
      const deleteData = await data_schema.findByIdAndDelete(req.params.id);
      res.json({ msg: "delete you'r account" });
      });


app.listen(6004,()=>{
    console.log("server is running port:6004")
});