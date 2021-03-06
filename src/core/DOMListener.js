import * as utils from '../utils/utils';

/**
 * Класс, инициализирующий события на элементах
 * @module core/DOMListener
 */
export class DOMListener {
  /**
   *
   * @param {object} $root - Корневой тег элемента
   * @param {array} listeners - События, которые слушает данный элемент
   */
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DOMListener!`);
    }
    this.listeners = listeners;
  }

  /**
   * @property {function} initDOMListeners -
   * Связывает слушаемые компонентами события и функции
   * @return {void}
   */
  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const methodName = utils.getMethodName(listener);
      if (!this[methodName]) {
        throw new Error(`
        Method ${methodName} does not exist in ${this.name} Component!
        `);
      }
      this[methodName] = this[methodName].bind(this);
      this.$root.on(
          listener,
          this[methodName]
      );
    });
  }

  /**
   * @property {function} removeDOMListeners -
   * Удаляет связанные события компонентов и функции
   * @return {void}
   * */
  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const methodName = utils.getMethodName(listener);
      this.$root.off(
          listener,
          this[methodName]
      );
    });
  }
}
