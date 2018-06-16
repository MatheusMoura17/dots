class Debugger {

  /** Ativa ou desativa o debugger */
  static active = false;

  /**
   * Exibe uma mensagem informativa
   * @param text - Texto a ser printado
   */
  static log = (text) => {
    Debugger.active && console.log(text); // eslint-disable-line no-console
  }

  /**
   * Exibe uma mensagem de erro
   * @param text - Texto a ser printado
   */
  static error = (text) => {
    Debugger.active && console.error(text); // eslint-disable-line no-console
  }

  /**
   * Exibe uma mensagem de warn
   * @param text - Texto a ser printado
   */
  static warn = (text) => {
    Debugger.active && console.warn(text); // eslint-disable-line no-console
  }
}
export default Debugger;