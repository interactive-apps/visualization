import { Fn } from 'Fn';
let _instance;
/**
 * Visualization singleton instance to contain configurations for use in other processes
 */

export class Instance {
  /**
   * Initiates the visualization singleton instance
   * @param configuration
   * @static
   */
  static initializeInstance(configuration) {
    if (!_instance) {
      // initialize function analytics for analytics processes
      Fn.init(configuration);

      const functionAnalyticsRunner = new Fn.Runner();

      if (functionAnalyticsRunner.instance) {
        this.config = configuration;
        _instance = this;
      }
    }
  }

  /**
   * Get instance
   * @returns {Instance}
   * @static
   */
  static getInstance() {
    return _instance;
  }

  /**
   * Get instance configuration
   * @returns {}
   */
  get config() {
    return _instance ? _instance.config : null;
  }
}
