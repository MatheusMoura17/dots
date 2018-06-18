import Game from './engine/game';
import Debugger from './tools/debugger';

//-- Utilitarios
Debugger.active = true;

//-- Referências
let gameElem = document.querySelector('#game');

//-- Inicialização
let game = new Game(gameElem, 250, 250);
game.init();