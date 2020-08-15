const router = require('express').Router();

const {GamesController} = require('../controllers');


router.get('/games/',GamesController.index);
router.get('/games/:id', GamesController.getGame);
router.post('/games/',GamesController.addGame);
router.put('/games/:id', GamesController.updateGame);
router.delete('/games/:id', GamesController.deleteGame);
router.get('/game/message', GamesController.messageGame);

module.exports = router;