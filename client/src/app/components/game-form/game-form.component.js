"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GameFormComponent = /** @class */ (function () {
    function GameFormComponent(gamesService) {
        this.gamesService = gamesService;
        this.classes = 'row';
        this.game = {
            id: 0,
            title: '',
            description: '',
            image: '',
            created_at: new Date()
        };
    }
    GameFormComponent.prototype.ngOnInit = function () {
    };
    GameFormComponent.prototype.saveNewGame = function () {
        this.gamesService.saveGame(this.game).subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.error(err); });
    };
    __decorate([
        core_1.HostBinding('class')
    ], GameFormComponent.prototype, "classes", void 0);
    GameFormComponent = __decorate([
        core_1.Component({
            selector: 'app-game-form',
            templateUrl: './game-form.component.html',
            styleUrls: ['./game-form.component.css']
        })
    ], GameFormComponent);
    return GameFormComponent;
}());
exports.GameFormComponent = GameFormComponent;
