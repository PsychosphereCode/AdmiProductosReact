const { modelNames} = require("mongoose");  //no es necesaria
const Producto = require("../models/producto.model") // importando modelo producto

module.exports.create_product = (req, res) =>{
    Producto.create(req.body)
        .then(producto => res.json(producto))
        .catch(err => res.json({message:"Hubo un error al crear tu producto"+err }));
}

module.exports.get_all = (req, res) =>{
    Producto.find()
        .then(productos => res.json(productos))
        .catch(err => res.json({message:"Hubo un error" +err}));
}

module.exports.get_product = (req, res) =>{
    Producto.findOne({_id: req.params.id})
        .then(producto => res.json(producto))
        .catch(err => res.json({message:"Hubo uno error" +err}));
}

module.exports.delete_product = (req, res) =>{
    Producto.deleteOne({_id: req.params.id})
        .then (producto => res.json(producto))
        .catch(err => res.json({message:"Hubo un error al eliminar tu producto" +err}))
}

module.exports.update_product = (req, res) =>{
    Producto.findByIdAndUpdate({_id: req.params.id}, req.body,{new:true, runValidators:true } )
        .then(producto => res.json(producto))
        .catch(err => res.json({message:"Hubo un error al actualizar tu producto"+err}));
}