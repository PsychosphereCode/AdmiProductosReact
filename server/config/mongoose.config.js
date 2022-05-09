const moongose = require("mongoose");


moongose.connect("mongodb://localhost/adminproductos", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("coneccion con DB"))
    .catch(err => console.log("No se pudo conectar con la DB"+err));