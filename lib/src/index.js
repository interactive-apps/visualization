import { Instance } from './utilities';
import { Selection, View } from './models';

/**
 * @description
 * Initializes visualization library
 * @global
 * @function init
 * @param {Object} configuration - Instance configuration
 */
export const init = config => {
  Instance.initializeInstance(config);
};

/**
 * @description
 * Gets instance for visualization if already initiated
 * @global
 * @function getInstance
 * @returns {Instance}
 */
export const getInstance = () => {
  return Instance.getInstance();
};

/**
 * @description
 * This is the main holder for the functionalities of visualization
 * @namespace
 */

const Vn = {
  /**
   * @description
   * Initializes visualization library
   * @function init
   * @param {Object} configuration - Instance configuration
   * @memberof Vn
   */
  init,

  /**
   * @description
   * Gets instance for visualization if already initiated
   * @function getInstance
   * @memberof Vn
   * @returns {Instance}
   */
  getInstance,

  /**
   * @description
   * Gets Selection class with methods to set visualization selections
   * @type {Selection}
   * @returns {Selection}
   */
  Selection,

  /**
   * @description
   * Gets View class with view properties of visualization
   * @type {View}
   * @returns {View}
   */
  View
};

export default Vn;
