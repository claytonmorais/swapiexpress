const axios = require('axios');
const constants = require('./constants');

exports.listAllFilms = async (funcReturn) => {
    try {
        console.log('serviço para listar filmes...');
        const { data, status } = await axios.get(constants.STAR_WARS_URL);        
        console.log(`HTTP STATUS: [${status}]`);
        if (status === 200) {
            let returnService = data;
            for (item in returnService.results) {
                returnService.results[item].version = 0;
            }

            funcReturn(returnService);
        }

    } catch (err) {
        console.error('Ocorreu um erro no serviço de listagem dos filmes. Descrição do erro: ', err);
    }
}