const Joke = require("../models/jokes.model");

module.exports.showJokes = (req, res) => {
    Joke.find()
        .then (allJokes => res.json({jokes: allJokes}))
        .catch (err => res.json({messaje: "Algo salio mal", error:err}))
};

module.exports.showOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then (oneJoke => res.json({joke: oneJoke}))
    .catch (err => res.json({messaje: "Algo salio mal", error:err}))  
};

module.exports.showRandomJoke = (req, res) => {
    Joke.find()
    
    .then (randomJoke =>  {
        console.log(randomJoke.length)
        let aleatorio = Math.floor(Math.random() * randomJoke.length);
        console.log(aleatorio)
        res.json({joke: randomJoke[aleatorio] })
        
        })
    .catch (err => res.json({messaje: "Algo salio mal", error:err}))  
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "Algo salió mal", error: err}))
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updateJoke => res.json({joke: updateJoke}))
        .catch(err => res.json({message: "Algo salió mal", error: err}))
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Algo salió mal", error: err}))
};