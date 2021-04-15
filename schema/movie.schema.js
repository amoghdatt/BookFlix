const mongoose = require('mongoose')

let movieSchema = mongoose.Schema({
    "name":String,
    "director":String,
    "releaseDate":Date,
    "duration":Number,
    "stars":Number,
    "image":String,
    "language":String
})

movieSchema.method("toJson", ()=>{
    const {__v, _id, ...object} = this.object();
    object.id = _id;
    return object;
})

module.exports = {movieSchema}