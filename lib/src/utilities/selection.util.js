import { setSelectionItems } from '../helpers';
/**
 * @description
 * Utilities to support Selection operations
 */
export class SelectionUtil {
  /**
   * Sets selection
   * @param {string} dimension - Selection dimension eg pe, ou, dx and <dim>
   * @param {string} dimensionValue - Selection dimension value
   * @returns {Selection} selectionIntance - Selection instance
   */
  static setSelection(dimension, dimensionValue) {
    return {
      dimension,
      items: setSelectionItems(dimension, dimensionValue)
    };
  }
}
