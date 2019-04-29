import setSelectionItems from './set-selection-items.helper';
/**
 * Sets selection
 * @param {string} dimension - Selection dimension eg pe, ou, dx and <dim>
 * @param {string} dimensionValue - Selection dimension value
 * @returns {Selection} selectionIntance - Selection instance
 */
const setSelection = (dimension, dimensionValue) => {
  return {
    dimension,
    items: setSelectionItems(dimension, dimensionValue)
  };
};

export default setSelection;
