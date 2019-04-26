let _instance;
/**
 * Visualization singleton instance to contain configurations for use in other processes
 */

export class Instance {
  /**
   * Initiates the visualization singleton instance
   * @param configuration
   */
  static initializeInstance(configuration) {
    if (!_instance) {
      this.config = configuration;
      _instance = this;
    }
  }

  /**
   * Get instance
   * @returns {Instance}
   */
  get instance() {
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
