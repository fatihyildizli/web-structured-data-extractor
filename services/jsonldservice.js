const utils = require('../utils/utils')
const JSONLD_PATTERN = 'script[type="application/ld+json"]'

exports.execute = function (html) {
    const $html = utils.getCheerioObject(html)
    let jsonldData = {}

    $html(JSONLD_PATTERN).each((index, item) => {
        try {
            let parsedJSON = JSON.parse($html(item).text())
            if (!Array.isArray(parsedJSON)) {
                parsedJSON = [parsedJSON]
            }
            parsedJSON.forEach(obj => {
                const type = obj['@type']
                jsonldData[type] = jsonldData[type] || []
                jsonldData[type].push(obj)
            })
        } catch (e) {
            console.log(`Error in jsonld parse - ${e}`)
        }
    })

    return jsonldData

}