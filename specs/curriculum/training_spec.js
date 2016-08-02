// Set application default configuration.
const configure = require('../../config/application.js');
// Import needed packages.
const CurriculumPage = require('../../page/curriculum_main_page');
const TrainingComponent = require('../../components/training_component');

describe('Training Section', () => {
  beforeEach(() => {
    configure.configureDefault(false);
  });

  it('has to contain the training section class', () => {
    console.log('\nit: has to contain the training section class.');

    browser.get(browser.params.baseUrl).then(() => {
      TrainingComponent.checkSectionTraining();
    });
  });

  it('training carousel has elements', () => {
    console.log('\nit: training carousel has to be ' + TrainingComponent.carouselNumOfElements + ' elements.');

    browser.get(browser.params.baseUrl).then(() => {

      // Click over the Training link.
      CurriculumPage.clickTraining().then(() => {

        browser.sleep(3000).then(() => {
          // It's not necessary, but it's nice scrolling to to he section... ;)
          // Count the number of courses in the carousel.
          TrainingComponent.checkCarouselNumOfElements();
        });
      });
    });
  });
});
