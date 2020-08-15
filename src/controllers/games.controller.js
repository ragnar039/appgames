const {GamesModel} = require('../models');

class GamesController{

    async index(req, res){
        var games = await GamesModel.find();
        
        res.send(games);
    }

    async getGame(req, res){
        var {id} = req.params;
        try{
            var game = await GamesModel.findById(id);
            console.log(game);
                        
        }catch(err){
            return res.send({message:'El juego no existe'});
            
        }
        res.send(game);      
    }

    async addGame(req, res){
        var {body:game} = req;
        try {
            var gameCreated =  await GamesModel.create(game);    
        }catch(err){
            console.log(err.message);
            res.json({message:"No se ha podido crear"});
        }
        res.json(gameCreated);
    }

    async updateGame(req, res){
        var {body:game} = req;
        var {id} = req.params;
        try{
            await GamesModel.findByIdAndUpdate(id, game, {new: true});
            res.status(200).json({message:"Updated"});
        }catch(err){
            res.status(404).json({message:"No se ha podido actualizar"});
        }       
        
    }

    async deleteGame(req, res){
        var {id} = req.params;
        try{
            var gameDeleted = await GamesModel.findByIdAndDelete(id)    
            res.status(200).json({message:"Juego elimnado"});
        }catch(err){
            res.json({message:"No se ha eliminar"});
        }
        
    }

    async messageGame(req, res){
        res.send({message:"Hola"});
    }
};

module.exports = new GamesController();