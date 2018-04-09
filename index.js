'use strict'
//Se carga el archivo app.js


const mongoose = require('mongoose');
var app = require('./app');

var port = process.env.port || 3000;
app.set('view engine', 'pug');


//holas

mongoose.connect('mongodb://localhost:27017/tercer_strike', (err,res) => {
    if(err){
        throw err;
    }else{
        console.log("Conexion a MONGODB exitosa");
        app.listen(port, function () {
            console.log(`API REST FAVORITOS FUNCIONANDO en ${port}`);
        });
    }
});
