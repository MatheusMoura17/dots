import Debugger from '../tools/debugger';
import * as THREE from 'three';

/**
 * Base da game-engine
 */
class Game {

  gameElem = undefined;
  scene = undefined;
  camera = undefined;
  renderer = undefined;
  width = undefined;
  height = undefined;

  constructor(gameElem, width, height) {
    this.gameElem = gameElem;
    this.width = width;
    this.height = height;
  }

  /**
   * Inicia a game engine
   */
  init = () => {
    Debugger.log('Iniciando game engine...');

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer();

    console.log(this.renderer);

    this.renderer.setSize(this.width, this.height);

    this.gameElem.appendChild(this.renderer.domElement);
  }
  
}
export default Game;
