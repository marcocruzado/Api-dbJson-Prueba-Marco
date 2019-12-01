const { Router } = require('express');
const peliculas = require('../src/ejemplos.json');
const _ = require('underscore');

const router = Router();


//esta es mi ruta get
router.get('/peliculas', (req, res) => {
    res.json({
        peliculas
    })
    console.log(peliculas);

})


//mi ruta post
router.post('/peliculas', (req, res) => {

    const { titulo, director, año, ranking } = req.body;
    //validaciones para comprobar si estan todos
    if (titulo && director && año && ranking) {
        const id = peliculas.length + 1;
        const newpeliculas = { ...req.body, id }
        peliculas.push(newpeliculas);
        res.json(peliculas);
    } else {
        res.json("nop se puede gurardar")
    }


    res.send({
        message: "recibido"
    })

})

//para actualizar un dato

router.put('/peliculas/:id',(req,res)=>{
    const {id}=req.params;
    const { titulo, director, año, ranking } = req.body;

    if(titulo && director && año && ranking){
        _.each(peliculas,(pelicula,i)=>{
            if(pelicula.id == id){
                pelicula.titulo=titulo,
                pelicula.director=director,
                pelicula.año=año,
                pelicula.ranking= ranking
            }
        });
        res.json(peliculas);
    }else{
        res.status(500).send({message:"los datos introducidos son incompletos"});
    }

})


//la ruta eliminar
router.delete('/peliculas/:id',(req,res)=>{
    const {id}=req.params;
_.each(peliculas,(pelicula,i)=>{
    if(pelicula.i==id){
        peliculas.splice(i,1)
    }
})

res.send(peliculas);

})

module.exports = router;