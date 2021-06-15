const express = require('express');
const filmModel = require('../model/filmModel');
const constants = require('../model/constants');

const router = express.Router();

router.get('/films/', function (req, res, next){
 
    /*
       #swagger.description = 'Efetua a listagens dos Filmes.'
       #swagger.responses[200] = {
         description: 'Sucesso.',
         schema: { $ref: '#/definitions/ReturnService' }
       } 

       #swagger.responses[404] = {
         description: 'Nenhum Resultado encontrado.'        
       }    
    */   
    res.status(200).send(filmModel.listAll());
});


router.get('/films/:id', function (req, res, next){
     /* #swagger.parameters['id'] = { description: 'Idenfificador do filme' }  */
    let resp = filmModel.findById(parseInt(req.params.id));

    /*       
       #swagger.description = 'Detalha o Filme pelo identificador.'
       #swagger.responses[200] = {
         description: 'Sucesso.',
         schema: { $ref: '#/definitions/Film' }
       } 

       #swagger.responses[404] = {
         description: 'Nenhum Resultado encontrado.'        
       }    
    */    
    res.status(resp? 200 : 404).send(resp ? resp : constants.NOT_FOUND_MESSAGE);
});


router.put('/films/:id', function (req, res, next){
     /* 
        #swagger.description = 'Modifica a descrição, atualizando a versão.'
        #swagger.parameters['id'] = { description: 'Idenfificador do filme' }  
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'Sucesso.',
            schema: { $ref: '#/definitions/InputParameter' }
        }
     */
    let resp = filmModel.updateDescription(parseInt(req.params.id),req.body.description);

     /*
       #swagger.responses[200] = {
         description: 'Sucesso.',
       } 

       #swagger.responses[404] = {
         description: 'Nenhum Resultado encontrado.'        
       }    
    */    
    res.status(resp? 200 : 404).send(resp ? constants.SUCESS_MESSAGE : constants.NOT_FOUND_MESSAGE);
});



module.exports = router;