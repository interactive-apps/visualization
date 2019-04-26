/**
 * @description View support visualizing different views
 */
export default class View {
  /**
   * Create view
   * @param {Selection} selectionLayers - Selection layers
   */
  constructor(selectionLayers) {}

  chart() {}
  table() {}
  map() {}
  dictionary() {}

  /**
   * Set Visualization type
   * @param {string} type - Type of visualization eg. CHART, TABLE, MAP, DICTIONARY
   * @returns {View}
   */
  setType(type) {
    return this;
  }

  /**
   * Set ui preferences for visualization
   * @param {Object} uiPreferences - Properties to control visualization
   * @returns {View}
   */
  setUiPreferences(uiPreferences) {
    return this;
  }

  /**
   * Draw visualization
   */
  draw() {
    console.log('Logic to draw visualization');
  }
}
