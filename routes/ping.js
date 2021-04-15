const ping =  async function(app){
    app.get('/ping', async (request, response)=>{
        response.send({message:'pong'})
    })
}

module.exports = {ping}