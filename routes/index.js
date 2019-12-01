const {Router} = require('express');

const router = Router();


router.get('/',(req,res)=>{
    res.json({
        message:"ya estamos desde el archivo de rutas"
    })
})


module.exports = router;