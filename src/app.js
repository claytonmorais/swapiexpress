
const express = require('express');

const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('../swagger_output.json');

const app = express();

const router = express.Router();

//Rotas
const filmsRoute = require('./routes/filmsRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/swagger-ui.html', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/api/', filmsRoute);

//Carregando lista de filmes na memoria
const filmService = require('./model/filmsService');
filmService.listAllFilms( function(body){
   global.returnService = body;

});

module.exports = app;