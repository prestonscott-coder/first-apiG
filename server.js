const express = require('express')
const app = express()
const PORT = 1210
let pokemon = {
    'bulbasuar':{
        'type': 'Grass',
        'weakness': 'Fire'
    },
    'charmander':{
        'type': 'Fire',
        'weakness': 'Water'
    },
    'squirtle':{
        'type': 'Water',
        'weakness': 'Grass'
    },
    'none':{
        'type': 'none',
        'weakness': 'none'
    }
}

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:pokemonName',(req,res) => {
   const pokemonName = req.params.pokemonName.toLowerCase()
    if(pokemon[pokemonName]){
        res.json(pokemon[pokemonName])
    }else{
        res.json(pokemon['none'])  
    }
    //res.json(pokemon) 
})
app.listen(proccess.env.PORT||PORT,() =>{
    console.log(`Server is running on port ${PORT}`)
})