/**
 * Sets selection items
 * @param {string} dimension - Selection dimension eg pe, ou, dx and <dim>
 * @param {string} dimensionValue - Selection dimension value
 * @returns {Array} dimensionItems - Selection dimension items
 */
const setSelectionItems = (dimension, dimensionValue) => {
  return (dimensionValue || '').split(';').map(valueId => {
    return { id: valueId };
  });
};

export default setSelectionItems;
