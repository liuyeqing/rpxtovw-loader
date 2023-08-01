const expect = require('chai').expect
const loader = require('../src/loaders/rpxtovw-loader.js')

const options = {
  query: {
    unit: 750
  }
}

describe('Loader', function () {
  it('should transform rpx value into vw', function () {
    const output = loader.call(options, 'body {width: 750rpx}') //输入'body {width: 750rpx}'，得到输出值output
    expect(output).is.a('string') //输出的值的类型、预期是字符串
    expect(output).to.equal('body {width:100vw}') //预期的输出值是'body {width:100vw}'
  })
})