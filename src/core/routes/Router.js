import {$$} from '../../utils/Dom';

/**
 * Класс смены страниц
 * @module core/routes/Router
 */
export class Router {
  constructor(selector, routes) {
    if (!selector) {
      throw new Error('Selector is not provided in Router');
    }

    this.$placeholder = $$(selector);
    this.routes = routes;

    this.changePageHandler = this.changePageHandler.bind(this);

    this.init();
  }

  /**
   * @property {function} init -
   * Инициализирует router
   * @return {void}
   */
  init() {
    window.addEventListener(
        'hashchange',
        this.changePageHandler
    );
    this.changePageHandler();
  }

  /**
   * @property {function} changePageHandler -
   * Устанавливает содержимое страницы
   * @return {void}
   */
  changePageHandler() {
    const Page = this.routes.chart;
    const page = new Page();
    this.$placeholder.append(page.getRoot());

    page.afterRender();
  }

  /**
   * @property {function} destroy -
   * Удаляет подписки на события
   * @return {void}
   */
  destroy() {
    window.removeEventListener(
        'hashchange',
        this.changePageHandler
    );
  }
}
