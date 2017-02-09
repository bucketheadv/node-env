process.env.NODE_ENV = 'test'

const expect = require('chai').expect
const nodeEnv = require('../')

describe('index', () => {
  it('should be development', () => {
    process.env.NODE_ENV = nodeEnv.DEVELOPMENT
    expect(nodeEnv.getNodeEnv()).to.eq(nodeEnv.DEVELOPMENT)
  })

  it('should be test', () => {
    process.env.NODE_ENV = nodeEnv.TEST
    expect(nodeEnv.getNodeEnv()).to.eq(nodeEnv.TEST)
  })

  it('should be production', () => {
    process.env.NODE_ENV = nodeEnv.PRODUCTION
    expect(nodeEnv.getNodeEnv()).to.eq(nodeEnv.PRODUCTION)
  })

  it('should be true with development', () => {
    process.env.NODE_ENV = nodeEnv.DEVELOPMENT
    expect(nodeEnv.isDevelopment()).to.eq(true)
  })

  it('should be true with test', () => {
    process.env.NODE_ENV = nodeEnv.TEST
    expect(nodeEnv.isTest()).to.eq(true)
  })

  it('should be true with production', () => {
    process.env.NODE_ENV = nodeEnv.PRODUCTION
    expect(nodeEnv.isProduction()).to.eq(true)
  })
})