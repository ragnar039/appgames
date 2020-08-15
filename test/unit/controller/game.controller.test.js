const {GamesController} = require('../../../src/controllers');
const {GamesModel} = require('../../../src/models');
const mockingoose = require('mockingoose').default;
let {mockRequest, mockResponse} = require('../../mocks/game/game.controller.mock');

describe("User Controller Test", ()=>{

    beforeEach(()=>{
        mockingoose.resetAll();
        jest.clearAllMocks();
    });

    test("Should return 404 error",async ()=>{
        let req = mockRequest();
        req.params.id = null;        
        
        const res = mockResponse();
        

        await GamesController.messageGame(req, res);
        

        expect(res.send).toHaveBeenCalledWith({message:"Hola"});
    });






});