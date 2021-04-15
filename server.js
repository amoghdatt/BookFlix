const fastify = require('fastify')
const mongoose = require('mongoose')
const { url } = require('./config/db.config')
const { ping } = require('./routes/ping')
const { getMovie, addMovie, allMovies} = require('./routes/movie')

const app = fastify({
    logger:true
})



app.register(ping)
app.register(addMovie)
app.register(getMovie)
app.register(allMovies)

const start = async ()=>{
    try{
        await mongoose.connect(url, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            autoIndex:true
        })
        await app.listen(5000)
    }catch(err){
        app.log.error(err)
        process.exit(1)
    }
}

start()