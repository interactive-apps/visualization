import { Instance } from './utilities/instance.util';
import { Selection } from './model/selection.model';
import { View } from './model/view.model';

/**
 * This is the main holder for the functionalities of visualization
 * @type {{Instance: Instance,  init: (function(*=))}}
 */

const Vn = {
  Instance,
  Selection,
  View,
  init: config => {
    Instance.initializeInstance(config);
  }
};

if (typeof window !== 'undefined') {
  window.Vn = Vn;
}

export { Vn };
