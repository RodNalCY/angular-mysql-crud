"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var games_service_1 = require("./games.service");
describe('GamesService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(games_service_1.GamesService);
        expect(service).toBeTruthy();
    });
});
