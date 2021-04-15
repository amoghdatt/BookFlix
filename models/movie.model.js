const mongoose = require('mongoose')
const { movieSchema } = require('../schema/movie.schema')

let movieModel = mongoose.model("movie", movieSchema)

module.exports = {movieModel}
