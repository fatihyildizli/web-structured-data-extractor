const express = require('express')
var router = express.Router()
const jsonLdService = require('../services/jsonldservice')
const metatagsService = require('../services/metatagsservice')
const microdataService = require('../services/microdataservice')
const rdfaService = require('../services/rdfaservice')
const opengraphService = require('../services/opengraphservice')

router.post('/schemaorg/all/summary', (req, res) => {
    try {
        const requestedHTML = req.body.html;
        const metatags = metatagsService.execute(requestedHTML, true)
        const jsonLd = jsonLdService.execute(requestedHTML, true)
        const microdata = microdataService.execute(requestedHTML, true)
        const rdfa = rdfaService.execute(requestedHTML, true)
        const opengraph = opengraphService.execute(requestedHTML, true)

        let result = [
            {
                countJsonLd: Object.keys(jsonLd).length,
                countMicroData: Object.keys(microdata).length,
                countRdfa: Object.keys(rdfa).length,
                countMetaTags: Object.keys(metatags).length,
                countOpengraph: Object.keys(opengraph).length
            },
            { meta: metatags },
            { jsonLd: jsonLd },
            { microdata: microdata },
            { rdfa: rdfa },
            { opengraph: opengraph }
        ]
        res.status(200).send(result);

    }
    catch (err) {
        res.status(400).send("Bad Request");
        console.log(err);
    }
})
router.post('/schemaorg/jsonld/summary', (req, res) => {
    try {
        res.status(200).send(jsonLdService.execute(req.body.html));
    }

    catch (err) {
        res.status(400).send("Bad Request.");
    }
});

router.post('/schemaorg/meta/summary', (req, res) => {
    try {
        res.status(200).send(metatagsService.execute(req.body.html));
    }

    catch (err) {
        res.status(400).send("Bad Request.");
    }
});
router.post('/schemaorg/microdata/summary', (req, res) => {
    try {
        res.status(200).send(microdataService.execute(req.body.html, true));
    }

    catch (err) {
        res.status(400).send("Bad Request.");
    }
});

router.post('/schemaorg/rdfa/summary', (req, res) => {
    try {
        res.status(200).send(rdfaService.execute(req.body.html, true));
    }

    catch (err) {
        res.status(400).send("Bad Request.");
    }
});

router.post('/schemaorg/opengraph/summary', (req, res) => {
    try {
        res.status(200).send(opengraphService.execute(req.body.html, true));
    }

    catch (err) {
        res.status(400).send("Bad Request.");
    }
});

module.exports = router;