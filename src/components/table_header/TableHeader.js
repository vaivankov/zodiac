import {ChartComponent} from "../../core/ChartComponent";

/**
 * Класс визуализации зодиака
 * * @module components/table_header/TableHeader
 */
export class TableHeader extends ChartComponent {
  /**
   *
   * @param {Object} $root Корневой тег элемента
   * @param {Object} options Параметры компонента
   */
  constructor($root, options) {
    super(
        $root,
        {
          name: 'Table Header',
          ...options,
        }
    );
  }
}