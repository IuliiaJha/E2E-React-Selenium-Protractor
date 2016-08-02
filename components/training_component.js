const Common = require('../test/common');

const TrainingComponent = function() {
  // Classes.
  this.cssCarouselText = '.carouselText';
  this.cssSectionTraining = browser.params.cssSectionTraining;

  // Constants.
  this.carouselNumOfElements = 11;

  /*
   * It has to be 10 elements.
   */
  this.checkCarouselNumOfElements = () => {
    Common.checkElementsNumber(this.cssCarouselText, this.carouselNumOfElements);
  };

  /*
   * Check that the training class exists.
   */
  this.checkSectionTraining = () => {
    Common.checkElementsNumber(this.cssSectionTraining, 1);
  };
};

module.exports.cssCarouselText = this.cssCarouselText;

module.exports = new TrainingComponent();
