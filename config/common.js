const env = require('./env');

// Read environment configurtion parameters
// from the env package and NODE_ENV.

exports.config = () => {
  const NODE_ENV = process.env.NODE_ENV || 'development';

  return env[NODE_ENV];
};
