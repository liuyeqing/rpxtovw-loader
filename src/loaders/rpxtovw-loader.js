module.exports = function (source) {
  // 获取任何包含在":"和"rpx"之间的数字，把数字除以100，把rpx转成vw
  const newSource = source.replace(/(.+(?=rpx))/,(result) => {
    const resultSplit = result.split(':')
    return resultSplit[0] + ":" + resultSplit[1] / (this.query.unit / 100) + "vw"
  })
  return newSource.replace(/rpx/, '')
}
