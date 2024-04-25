import { ElementType } from '../domelementtype/index.js'
import { Document, Element, Text, Comment, CDATA, ProcessingInstruction } from './node.js'
var defaultOpts = {
  withStartIndices: false,
  withEndIndices: false,
  xmlMode: false
}
var DomHandler = /** @class */ (function () {
  /**
   * @param callback Called once parsing has completed.
   * @param options Settings for the handler.
   * @param elementCB Callback whenever a tag is closed.
   */
  function DomHandler(callback, options, elementCB) {
    /** The elements of the DOM */
    this.dom = []
    /** The root element for the DOM */
    this.root = new Document(this.dom)
    /** Indicated whether parsing has been completed. */
    this.done = false
    /** Stack of open tags. */
    this.tagStack = [this.root]
    /** A data node that is still being written to. */
    this.lastNode = null
    /** Reference to the parser instance. Used for location information. */
    this.parser = null
    // Make it possible to skip arguments, for backwards-compatibility
    if (typeof options === 'function') {
      elementCB = options
      options = defaultOpts
    }
    if (typeof callback === 'object') {
      options = callback
      callback = undefined
    }
    this.callback = callback !== null && callback !== void 0 ? callback : null
    this.options = options !== null && options !== void 0 ? options : defaultOpts
    this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null
  }
  DomHandler.prototype.onparserinit = function (parser) {
    this.parser = parser
  }
  // Resets the handler back to starting state
  DomHandler.prototype.onreset = function () {
    this.dom = []
    this.root = new Document(this.dom)
    this.done = false
    this.tagStack = [this.root]
    this.lastNode = null
    this.parser = null
  }
  // Signals the handler that parsing is done
  DomHandler.prototype.onend = function () {
    if (this.done) return
    this.done = true
    this.parser = null
    this.handleCallback(null)
  }
  DomHandler.prototype.onerror = function (error) {
    this.handleCallback(error)
  }
  DomHandler.prototype.onclosetag = function () {
    this.lastNode = null
    var elem = this.tagStack.pop()
    if (this.options.withEndIndices) {
      elem.endIndex = this.parser.endIndex
    }
    if (this.elementCB) this.elementCB(elem)
  }
  DomHandler.prototype.onopentag = function (name, attribs) {
    var type = this.options.xmlMode ? ElementType.Tag : undefined
    var element = new Element(name, attribs, undefined, type)
    this.addNode(element)
    this.tagStack.push(element)
  }
  DomHandler.prototype.ontext = function (data) {
    var lastNode = this.lastNode
    if (lastNode && lastNode.type === ElementType.Text) {
      lastNode.data += data
      if (this.options.withEndIndices) {
        lastNode.endIndex = this.parser.endIndex
      }
    } else {
      var node = new Text(data)
      this.addNode(node)
      this.lastNode = node
    }
  }
  DomHandler.prototype.oncomment = function (data) {
    if (this.lastNode && this.lastNode.type === ElementType.Comment) {
      this.lastNode.data += data
      return
    }
    var node = new Comment(data)
    this.addNode(node)
    this.lastNode = node
  }
  DomHandler.prototype.oncommentend = function () {
    this.lastNode = null
  }
  DomHandler.prototype.oncdatastart = function () {
    var text = new Text('')
    var node = new CDATA([text])
    this.addNode(node)
    text.parent = node
    this.lastNode = text
  }
  DomHandler.prototype.oncdataend = function () {
    this.lastNode = null
  }
  DomHandler.prototype.onprocessinginstruction = function (name, data) {
    var node = new ProcessingInstruction(name, data)
    this.addNode(node)
  }
  DomHandler.prototype.handleCallback = function (error) {
    if (typeof this.callback === 'function') {
      this.callback(error, this.dom)
    } else if (error) {
      throw error
    }
  }
  DomHandler.prototype.addNode = function (node) {
    var parent = this.tagStack[this.tagStack.length - 1]
    var previousSibling = parent.children[parent.children.length - 1]
    if (this.options.withStartIndices) {
      node.startIndex = this.parser.startIndex
    }
    if (this.options.withEndIndices) {
      node.endIndex = this.parser.endIndex
    }
    parent.children.push(node)
    if (previousSibling) {
      node.prev = previousSibling
      previousSibling.next = node
    }
    node.parent = parent
    this.lastNode = null
  }
  return DomHandler
})()
export default DomHandler
