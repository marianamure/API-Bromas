const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/", JokesController.showJokes);
    app.get("/api/jokes/random", JokesController.showRandomJoke);
    app.post("/api/jokes/new", JokesController.createJoke);
    app.get("/api/jokes/:id", JokesController.showOneJoke);
    app.put("/api/jokes/:id", JokesController.updateJoke);
    app.delete("/api/jokes/:id", JokesController.deleteJoke);
};
