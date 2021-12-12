const utils = require('../utils/utils')

exports.execute = function (html) {
    const $html = utils.getCheerioObject(html)
    let metatags = {}
    $html('meta').each((index, elem) => {
        const nameKey = Object.keys(elem.attribs).find((attr) => ['name', 'property'].indexOf(attr) !== -1)
        const name = elem.attribs[nameKey]
        const value = elem.attribs['content']

        if (typeof name !== 'undefined' && String(name).includes('og:')) {
            if (!metatags[name]) {
                metatags[name] = []
            }
            metatags[name].push(value)
        }
    }
    )
    return metatags
}
