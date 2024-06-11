const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
       "title":String,
        "desc":String,
        "date":String,
        "duration":String,
        "venue":String,
        "trainername":String
    }
)

let coursemodel = mongoose.model("Courses",schema);
module.exports = {coursemodel}