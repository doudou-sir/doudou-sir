import config from '../../config'
import hljs, { registerLanguage } from './highlight'
// config.highlight.forEach(item => {
//     hljs.registerLanguage(item, require(`./languages/${item}`).default);
// });
registerLanguage('c-like', require('./languages/c-like').default)
registerLanguage('c', require('./languages/c').default)
registerLanguage('bash', require('./languages/bash').default)
registerLanguage('css', require('./languages/css').default)
registerLanguage('dart', require('./languages/dart').default)
registerLanguage('go', require('./languages/go').default)
registerLanguage('java', require('./languages/java').default)
registerLanguage('javascript', require('./languages/javascript').default)
registerLanguage('json', require('./languages/json').default)
registerLanguage('less', require('./languages/less').default)
registerLanguage('scss', require('./languages/scss').default)
registerLanguage('shell', require('./languages/shell').default)
registerLanguage('xml', require('./languages/xml').default)
registerLanguage('htmlbars', require('./languages/htmlbars').default)
registerLanguage('nginx', require('./languages/nginx').default)
registerLanguage('php', require('./languages/php').default)
registerLanguage('python', require('./languages/python').default)
registerLanguage('python-repl', require('./languages/python-repl').default)
registerLanguage('typescript', require('./languages/typescript').default)

export default hljs
