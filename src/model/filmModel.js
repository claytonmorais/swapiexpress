const _select = require('underscore');

exports.listAll = function(id){
   return global.returnService;
} 

exports.findById = function(id){
    return _select.findWhere(global.returnService.results,{'episode_id' : parseInt(id)});
}

exports.updateDescription = function(id,description){
    if(exports.findById(id) && description){
        console.log(`ID: ${id}, DESC: ${description}`);
        let itemElement = global.returnService.results.find( item =>{
            return item.episode_id == id;
        });
        itemElement.opening_crawl = description;
        itemElement.version = itemElement.version+1;
        return true;
    }

    return false;

   
}