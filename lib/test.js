const { getAST, getDependencies, transform } = require('./parser')
const path = require('path')

const content = path.join(__dirname, '../src/index.js')
const ast = getAST(content)
const dependencies = getDependencies(ast)
console.log(transform(ast))