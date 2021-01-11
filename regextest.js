const Regex = require('regex')

const alvo = '123.456.789-00'
const exp = new Regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
const resultado = exp.exec(alvo)
console.log(resultado)
