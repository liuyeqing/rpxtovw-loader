const csstree = require('css-tree');
module.exports = function (source) {
    // 获取任何包含在":"和"rpx"之间的数字，把数字除以100，把rpx转成vw
    const ast = csstree.parse(source);
    csstree.walk(ast, (node) => {
        if(node.type === 'Dimension' && node.unit === 'rpx'){
            node.unit = 'vw'
            node.value = node.value / (this.query.unit / 100)
        }
    });
    return csstree.generate(ast)
}