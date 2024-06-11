const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {coursemodel} = require("./models/course")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://Nevin:nevintensonk@cluster0.0rfrr.mongodb.net/coursedb?retryWrites=true&w=majority&appName=Cluster0')

app.post("/add",(req,res)=>{
    const input = req.body
    const course = new coursemodel(input)
    course.save()
    console.log(course)
    res.json({status:"success"})
})

app.get("/view",(req,res)=>{
    coursemodel.find().then(
        (data)=>{
            res.json(data)

        }

    ).catch(
        (error)=>{
            res.json(error)
        }
    )

})
app.listen(8004,()=>{
    console.log("server started")
})
