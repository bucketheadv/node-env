const [
  DEVELOPMENT,
  TEST,
  PRODUCTION
] = [
  'development',
  'test',
  'production'
]

module.exports = {
  DEVELOPMENT: DEVELOPMENT,
  TEST: TEST,
  PRODUCTION: PRODUCTION,

  getNodeEnv: function() {
    return process.env.NODE_ENV || DEVELOPMENT
  },

  isDevelopment: function() {
    return this.getNodeEnv() === DEVELOPMENT
  },

  isTest: function() {
    return this.getNodeEnv() === TEST
  },

  isProduction: function() {
    return this.getNodeEnv() === PRODUCTION
  }
}
