const express= require('express');
const morgan= require('morgan');
 
const app = express();

//configuraciones
app.set('port',process.env.PORT||3000);
app.set("json spaces",2);


//rutas
app.use('/api',require('../routes/index'));
app.use('/api',require('../routes/peliculas'));
    
//middelwears
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));//con esto entendemos datos que vienen desde inputs de mis formularios 
app.use(express.json());//esto soprtara todos los archivos json que mi cliente mande


//empesando el servidor
app.listen(3000,()=>{
    console.log(`server on port ${app.get('port')}`);
})