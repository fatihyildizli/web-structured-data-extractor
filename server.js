const express = require('express')
const axios = require("axios")
const morgan = require("morgan")
const path = require("path")
const fs = require("fs")
const helmet = require("helmet")
const cheerio = require('cheerio')
const htmlparser = require('htmlparser2')
const app = express()
const port = process.env.PORT || 5001;

const JSONLD_PATTERN = 'script[type="application/ld+json"]'

var accessLogStream = fs.createWriteStream(
  path.join(__dirname, "server.log"),
  {
    flags: "a"
  }
);
app.use(morgan("combined", { stream: accessLogStream }));
app.use(helmet());
app.use(express.urlencoded({ extended: true, limit: '100mb' })); // for The HTTP 413 Payload Too Large handling (Raw HTML).
app.use(express.json({ limit: '100mb' }))

/*-- Controllers --*/
app.get('/url/schemaorg/all/summary', (req, res) => {
  try {
    axios
      .get(
        `${req.query.url}`
      )
      .then(response => {

        const metatags = getMetaTags(response.data)
        const jsonLd = getJsonldDataList(response.data)
        const microdata = getMicroDataList(response.data, false)
        const rdfa = getRdfaDataList(response.data, false)

        let result = [
          {
            countJsonLd: Object.keys(jsonLd).length,
            countMicroData: Object.keys(microdata).length,
            countRdfa: Object.keys(rdfa).length,
            countMetaTags: Object.keys(metatags).length
          },
          { meta: metatags },
          { jsonLd: jsonLd },
          { microdata: microdata },
          { rdfa: rdfa }
        ]
        res.status(200).send(result);
      })
      .catch(err => {
        res.status(400).send("Bad Request");
        console.log(err);
      });
  } catch (err) {
    res.status(404).send("404");
  }
});

app.get('/url/schemaorg/jsonld/summary', (req, res) => {
  try {
    axios
      .get(
        `${req.query.url}`
      )
      .then(response => {
        res.status(200).send(getJsonldDataList(response.data));
      })
      .catch(err => {
        res.status(400).send("Bad Request");
        console.log(err);
      });
  } catch (err) {
    res.status(404).send("404");
  }
});

app.get('/url/schemaorg/meta/summary', (req, res) => {
  try {
    axios
      .get(
        `${req.query.url}`
      )
      .then(response => {
        res.status(200).send(getMetaTags(response.data));
      })
      .catch(err => {
        res.status(400).send("Bad Request");
        console.log(err);
      });
  } catch (err) {
    res.status(404).send("404");
  }
});
app.get('/url/schemaorg/microdata/summary', (req, res) => {
  try {
    axios
      .get(
        `${req.query.url}`
      )
      .then(response => {
        res.status(200).send(getMicroDataList(response.data, false));
      })
      .catch(err => {
        res.status(400).send("Bad Request");
        console.log(err);
      });
  } catch (err) {
    res.status(404).send("404");
  }
});

app.get('/url/schemaorg/rdfa/summary', (req, res) => {
  try {
    axios
      .get(
        `${req.query.url}`
      )
      .then(response => {
        res.status(200).send(getRdfaDataList(response.data, false));
      })
      .catch(err => {
        res.status(400).send("Bad Request");
        console.log(err);
      });
  } catch (err) {
    res.status(404).send("404");
  }
});

app.post('/html/schemaorg/all/summary', (req, res) => {
  try {
    const requestedHTML = req.body.html;
    const metatags = getMetaTags(requestedHTML, true)
    const jsonLd = getJsonldDataList(requestedHTML, true)
    const microdata = getMicroDataList(requestedHTML, true)
    const rdfa = getRdfaDataList(requestedHTML, true)

    let result = [
      {
        countJsonLd: Object.keys(jsonLd).length,
        countMicroData: Object.keys(microdata).length,
        countRdfa: Object.keys(rdfa).length,
        countMetaTags: Object.keys(metatags).length
      },
      { meta: metatags },
      { jsonLd: jsonLd },
      { microdata: microdata },
      { rdfa: rdfa }
    ]
    res.status(200).send(result);

  }
  catch (err) {
    res.status(400).send("Bad Request");
    console.log(err);
  }
})
app.post('/html/schemaorg/jsonld/summary', (req, res) => {
  try {
    const requestedHTML = req.body.html;
    res.status(200).send(getJsonldDataList(requestedHTML));
  }

  catch (err) {
    res.status(400).send("Bad Request.");
  }
});

app.post('/html/schemaorg/meta/summary', (req, res) => {
  try {
    const requestedHTML = req.body.html;
    res.status(200).send(getMetaTags(requestedHTML));
  }

  catch (err) {
    res.status(400).send("Bad Request.");
  }
});
app.post('/html/schemaorg/microdata/summary', (req, res) => {
  try {
    const requestedHTML = req.body.html;
    res.status(200).send(getMicroDataList(requestedHTML, true));
  }

  catch (err) {
    res.status(400).send("Bad Request.");
  }
});

app.post('/html/schemaorg/rdfa/summary', (req, res) => {
  try {
    const requestedHTML = req.body.html;
    res.status(200).send(getRdfaDataList(requestedHTML, true));
  }

  catch (err) {
    res.status(400).send("Bad Request.");
  }
});

/*--Functions --*/

function getCheerioObject(html) {
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
function getJsonldDataList(html) {


  const $html = getCheerioObject(html)
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
function getMetaTags(html) {
  const $html = getCheerioObject(html)

  let metatags = {}
  $html('meta').each((index, elem) => {
    const nameKey = Object.keys(elem.attribs).find((attr) => ['name', 'property', 'itemprop', 'http-equiv'].indexOf(attr) !== -1)
    const name = elem.attribs[nameKey]
    const value = elem.attribs['content']
    if (!metatags[name]) {
      metatags[name] = []
    }
    metatags[name].push(value)
  })
  return metatags
}

function getMicroDataList(html, isOnlyHtml) {
  html = isOnlyHtml ? html : getCheerioObject(html)
  const handler = createHandler('micro')
  new htmlparser.Parser(handler).end(html)
  return handler.topLevelScope
}

function getRdfaDataList(html, isOnlyHtml) {
  html = isOnlyHtml ? html : getCheerioObject(html)
  const handler = createHandler('rdfa')
  new htmlparser.Parser(handler).end(html)
  return handler.topLevelScope
}

function getPropValue(tagName, attribs, TYPE, PROP) {
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
  let TYPE, PROP
  if (specName.toLowerCase().startsWith('micro')) {
    TYPE = 'itemtype'
    PROP = 'itemprop'
  } else if (specName.toLowerCase().startsWith('rdfa')) {
    TYPE = 'typeof'
    PROP = 'property'
  } else {
    throw new Error('Unsupported spec')
  }
  return { TYPE, PROP }
}

const getType = (typeString) => {
  const match = (/(.*\/)(\w+)/g).exec(typeString)
  return {
    context: match && match[1] ? match[1] : undefined,
    type: match && match[2] ? match[2] : typeString
  }
}

const createHandler = function (specName) {
  let scopes = []
  let tags = []
  let topLevelScope = {}
  let textForProp = null
  const { TYPE, PROP } = getAttrNames(specName)

  const onopentag = function (tagName, attribs) {
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
        topLevelScope[type] = topLevelScope[type] || []
        topLevelScope[type].push(currentScope)
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
  const onclosetag = function (tagname) {
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
    onopentag,
    ontext,
    onclosetag,
    topLevelScope
  }
}

app.listen(port, () => {
  console.log(`listen port ${port}`);
})
