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

  constructor(gameElem) {
    this.gameElem = gameElem;
  }

  /**
   * Inicia a game engine
   */
  init = () => {
    Debugger.log('Iniciando game engine...');

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.gameElem.appendChild(this.renderer.domElement);
  }
  
}
export default Game;
