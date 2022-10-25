const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/chistes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MonogDB conectado"))
    .catch(err => console.log("Algo salió mal con mongo", err));