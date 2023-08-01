const expect = require('chai').expect
const loader = require('../src/loaders/rpxtovw-loader.js')

const options = {
  query: {
    unit: 750
  }
}

describe('Loader', function () {
  it('should transform rpx value into vw', function () {
    const output = loader.call(options, 'body {width: 750rpx}')
    console.log('output', output);
    expect(output).is.a('string')
    expect(output).to.equal('body {width:100vw}')
  })
})