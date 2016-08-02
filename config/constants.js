/**
 * Name: constants.js
 * Description: Constants programs.
 * Created by: Pablo Magro
 * Date: 20/07/16
 */

const config = require('./common').config();

// module.exports = {
module.exports = Object.freeze({
  // Applicaton base URL.
  baseUrl: config.BASE_URL,
  // Common classes
  cssSectionSummary: '.section-summary',
  cssSectionExperience: '.section-experience',
  cssSectionEducation: '.section-education',
  cssSectionTraining: '.section-training',
  cssSectionCertification: '.section-certification',
  cssSectionContactMe: '.section-contactme',
  cssSectionTechnology: '.section-technology'
});
