const htmlparser = require('htmlparser2')
const utils = require('../utils/utils')


exports.execute = function (html, isOnlyHtml) {
    html = isOnlyHtml ? html : utils.getCheerioObject(html)
    const handler = constructHandler()
    new htmlparser.Parser(handler).end(html)
    return handler.finalScope
}


exports.getPropValue = function (tagName, attribs, TYPE, PROP) {
    if (attribs[TYPE]) {
        return null
    } else if ((tagName === 'a' || tagName === 'link') && attribs.href) {
        return attribs.href.trim()
    } else if (attribs.content) {
        return attribs.content.trim()
    } else if (attribs[PROP] === 'image' && attribs.src) {
        return attribs.src.trim()
    } else {
        return null
    }
}

const getAttrNames = (specName) => {
        let TYPE = 'itemtype'
        let PROP = 'itemprop'

    return { TYPE, PROP }
}

const getType = (typeString) => {
    const match = (/(.*\/)(\w+)/g).exec(typeString)
    return {
        context: match && match[1] ? match[1] : undefined,
        type: match && match[2] ? match[2] : typeString
    }
}

const constructHandler =()=>{
    let scopes = []
    let tags = []
    let finalScope = {}
    let textForProp = null
    const { TYPE, PROP } = getAttrNames()

    const opentag = function (tagName, attribs) {
        let currentScope = scopes[scopes.length - 1]
        let tag = false

        if (attribs[TYPE]) {
            if (attribs[PROP] && currentScope) {
                let newScope = {}
                currentScope[attribs[PROP]] = currentScope[attribs[PROP]] || []
                currentScope[attribs[PROP]].push(newScope)
                currentScope = newScope
            } else {
                currentScope = {}
                const { type } = getType(attribs[TYPE])
                finalScope[type] = finalScope[type] || []
                finalScope[type].push(currentScope)
            }
        }

        if (currentScope) {
            if (attribs[TYPE]) {
                const { context, type } = getType(attribs[TYPE])
                const vocab = attribs.vocab
                currentScope['@context'] = context || vocab
                currentScope['@type'] = type
                tag = TYPE
                scopes.push(currentScope)
            } else if (attribs[PROP]) {
                if (currentScope[attribs[PROP]] && !Array.isArray(currentScope[attribs[PROP]])) {
                    currentScope[attribs[PROP]] = [currentScope[attribs[PROP]]]
                }

                var value = getPropValue(tagName, attribs, TYPE, PROP)
                if (!value) {
                    tag = PROP
                    if (Array.isArray(currentScope[attribs[PROP]])) {
                        currentScope[attribs[PROP]].push('')
                    } else {
                        currentScope[attribs[PROP]] = ''
                    }
                    textForProp = attribs[PROP]
                } else {
                    if (Array.isArray(currentScope[attribs[PROP]])) {
                        currentScope[attribs[PROP]].push(value)
                    } else {
                        currentScope[attribs[PROP]] = value
                    }
                }
            }
        }
        tags.push(tag)
    }
    const ontext = function (text) {
        if (textForProp) {
            if (Array.isArray(scopes[scopes.length - 1][textForProp])) {
                scopes[scopes.length - 1][textForProp][scopes[scopes.length - 1][textForProp].length - 1] += text.trim()
            } else {
                scopes[scopes.length - 1][textForProp] += text.trim()
            }
        }
    }
    const closetag = function (tagname) {
        const tag = tags.pop()
        if (tag === TYPE) {
            let scope = scopes.pop()
            if (!scope['@context']) {
                delete scope['@context']
            }
            Object.keys(scope).forEach((key) => {
                if (Array.isArray(scope[key]) && scope[key].length === 1) {
                    scope[key] = scope[key][0]
                }
            })
        } else if (tag === PROP) {
            textForProp = false
        }
    }

    return {
        opentag,
        ontext,
        closetag,
        finalScope
    }
}