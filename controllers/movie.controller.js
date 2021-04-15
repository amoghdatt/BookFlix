const mongoose = require('mongoose')
const {movieModel} = require('../models/movie.model')

async function addNewMovie(newMovieDetails){
    let newMovie = new movieModel(newMovieDetails)
    let status = await newMovie.save()
    return status
}

async function getMovieByName(id){
    let movie = await movieModel.find({_id:id}).exec()
    return movie
}

async function getAllMovies(){
    return await movieModel.find({}).exec()
}

module.exports = {addNewMovie, getMovieByName, getAllMovies}