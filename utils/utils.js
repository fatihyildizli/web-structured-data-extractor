const cheerio = require('cheerio')
exports.getCheerioObject = function (html) {
    let $html
    if (typeof html === 'string') {
        $html = cheerio.load(html, { xmlMode: true })
    } else if (cheerio(html).cheerio) {
        $html = html
    } else {
        throw new Error('Invalid argument: pass valid html string or cheerio object')
    }
    return $html
}