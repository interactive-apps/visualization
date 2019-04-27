import { SelectionUtil } from '../utilities/selection.util';
/**
 * Selection
 */
export class Selection {
  /**
   * Sets organisation unit id(s)
   * @param {string} ou - Organisation unit id(s)
   * @returns {Selection} - Object with selection properties
   */
  setOrgUnit(ou) {
    this['ou'] = SelectionUtil.setSelection('ou', ou);
    return this;
  }

  /**
   * Sets period id(s)
   * @param {string} pe - Period id
   * @returns {Selection} - Object with selection properties
   */
  setPeriod(pe) {
    this['pe'] = SelectionUtil.setSelection('pe', pe);
    return this;
  }

  /**
   * Sets data id
   * @param {string} dx - Data id
   * @returns {Selection} - Object with selection properties
   */
  setData(dx) {
    this['dx'] = SelectionUtil.setSelection('dx', dx);
    return this;
  }

  /**
   * Sets dynamic dimension and its value
   * @param {string} dim - Dynamic dimension identifiers
   * @param {string} value - Dynamic dimension options identifiers
   * @returns {Selection} - Object with selection properties
   */
  setDimension(dim, value) {
    this[dim] = SelectionUtil.setSelection(dim, value);
    return this;
  }

  /**
   * Sets layout for dimension
   * @param {string} dim - Dimension identifier eg ou, pe, dx, <dim identifier>
   * @param {string} layout - Layout to which the dimension is set
   * @returns {Selection} - Object with selection properties
   */
  setLayout(dim, layout) {
    return this;
  }

  /**
   * Sets selections configurations
   * @param {Object} configuration - Configuration Properties associated with set selections
   */
  setConfiguration(configuration) {
    return this;
  }

  /**
   * Sets selections layers when multiple selection layers are needed
   * @returns {Selection} - Object with selection properties
   */
  setLayer() {}

  /**
   * Get selections
   * @returns {Selection} Selection - Get Data selection
   */
  get() {
    return this;
  }

  get selections() {
    return this;
  }
}
