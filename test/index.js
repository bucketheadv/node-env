process.env.NODE_ENV = 'test'

const expect = require('chai').expect
const nodeEnv = require('../')

describe('index', () => {
  beforeEach(() => {
    delete process.env.NODE_ENV
    nodeEnv.setDefaultEnv('development')
  })
  it('should be dev', () => {
    let dev = 'dev'
    nodeEnv.setDefaultEnv(dev)
    expect(nodeEnv.getNodeEnv()).to.eq(dev)
  })

  it('should be development', () => {
    expect(nodeEnv.isDevelopment()).to.be.true
  })

  it('should be production', () => {
    process.env.NODE_ENV = 'production'
    expect(nodeEnv.isProduction()).to.be.true
  })
})