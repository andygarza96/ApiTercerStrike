//Aquí va toda la configuración de express, se cargan todas las rutas, body parser

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Sirve contenido estatico para la carpeta public
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


module.exports = app;