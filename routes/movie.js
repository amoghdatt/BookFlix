const {addNewMovie, getMovieByName, getAllMovies} = require('../controllers/movie.controller')

const addMovie = async function(app){
    app.post('/movie', async(request, response)=>{
    try{
        let newMovie = await addNewMovie(request.body)
        response.send(newMovie)
    }catch(err){
        console.log(err)
    }
        
    })
}

const getMovie = async function(app){
    app.get('/movie/:id', async (request, response)=>{
        try{
            let movie = await getMovieByName(request.params.id)
            response.send(movie[0])
        }catch(err){
            console.log(err)
        }
    })
}

const allMovies = async function(app){
    app.get('/movie',async (request, response)=>{
        let movies = await getAllMovies()
        response.send(movies)
    })
}

module.exports = {addMovie, getMovie, allMovies}