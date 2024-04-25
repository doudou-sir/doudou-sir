import DomHandler from './domhandler/index.js'
import Parser from './Parser.js'
function parseDocument(data, options) {
  var handler = new DomHandler(undefined, options)
  new Parser(handler, options).end(data)
  return handler.root.children
}
export default parseDocument
