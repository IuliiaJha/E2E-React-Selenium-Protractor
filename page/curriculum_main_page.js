/**
 * Name: curriculum_main_page.js
 *
 * Description: Page controller for the main curriculum page. It holds:
 *
 * 1) Constants for links and classes.
 * 2) Functions for testing.
 *
 * Created by: Pablo Magro
 * Date: 20/07/2017
 *
 * Protractor API reference: http://www.protractortest.org/#/api
 */

const CurriculumPage = function() {
  // Links.
  this.linkTraining = 'Training';
  this.linkContactMe = 'Contact me';

  // Section classes.
  this.cssSectionSummary = browser.params.cssSectionSummary;
  this.cssSectionExperience = browser.params.cssSectionExperience;
  this.cssSectionEducation = browser.params.cssSectionEducation;
  this.cssSectionTraining = browser.params.cssSectionTraining;
  this.cssSectionCertification = browser.params.cssSectionCertification;
  this.cssSectionContactMe = browser.params.cssSectionContactMe;
  this.cssSectionTechnology = browser.params.cssSectionTechnology;

  /*
   * Check all classes for all sections are rended into the main page.
   */
  this.checkAllSections = () => {
    expect(element(protractor.By.css(this.cssSectionSummary)).isPresent()).toBe(true);
    expect(element(protractor.By.css(this.cssSectionExperience)).isPresent()).toBe(true);
    expect(element(protractor.By.css(this.cssSectionEducation)).isPresent()).toBe(true);
    expect(element(protractor.By.css(this.cssSectionTraining)).isPresent()).toBe(true);
    expect(element(protractor.By.css(this.cssSectionCertification)).isPresent()).toBe(true);
    expect(element(protractor.By.css(this.cssSectionContactMe)).isPresent()).toBe(true);
    expect(element(protractor.By.css(this.cssSectionTechnology)).isPresent()).toBe(true);
  };

  /**
   * Click "Contact me" link.
   */
  this.clickContactMe = () => {
    return element(by.linkText(this.linkContactMe)).click();
  };

  /**
   * Click "Training" link.
   */
  this.clickTraining = () => {
    return element(by.linkText(this.linkTraining)).click();
  };
};

module.exports = new CurriculumPage();
