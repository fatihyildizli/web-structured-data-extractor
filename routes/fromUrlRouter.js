var express = require('express')
var router = express.Router()
const axios = require('axios')
const jsonLdService = require('../services/jsonldservice')
const metatagsService = require('../services/metatagsservice')
const microdataService = require('../services/microdataservice')
const rdfaService = require('../services/rdfaservice')

router.get('/schemaorg/all/summary', (req, res) => {
    try {
        axios
            .get(
                `${req.query.url}`
            )
            .then(response => {

                const metatags = metatagsService.execute(response.data)
                const jsonLd = jsonLdService.execute(response.data)
                const microdata = microdataService.execute(response.data, false)
                const rdfa = rdfaService.execute(response.data, false)

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

router.get('/schemaorg/jsonld/summary', (req, res) => {
    try {
        axios
            .get(
                `${req.query.url}`
            )
            .then(response => {
                res.status(200).send(jsonLdService.execute(response.data));
            })
            .catch(err => {
                res.status(400).send("Bad Request");
                console.log(err);
            });
    } catch (err) {
        res.status(404).send("404");
    }
});

router.get('/schemaorg/meta/summary', (req, res) => {
    try {
        axios
            .get(
                `${req.query.url}`
            )
            .then(response => {
                res.status(200).send(metatagsService.execute(response.data));
            })
            .catch(err => {
                res.status(400).send("Bad Request");
                console.log(err);
            });
    } catch (err) {
        res.status(404).send("404");
    }
});
router.get('/schemaorg/microdata/summary', (req, res) => {
    try {
        axios
            .get(
                `${req.query.url}`
            )
            .then(response => {
                res.status(200).send(microdataService.execute(response.data, false));
            })
            .catch(err => {
                res.status(400).send("Bad Request");
                console.log(err);
            });
    } catch (err) {
        res.status(404).send("404");
    }
});

router.get('/schemaorg/rdfa/summary', (req, res) => {
    try {
        axios
            .get(
                `${req.query.url}`
            )
            .then(response => {
                res.status(200).send(rdfaService.execute(response.data, false));
            })
            .catch(err => {
                res.status(400).send("Bad Request");
                console.log(err);
            });
    } catch (err) {
        res.status(404).send("404");
    }
});

module.exports = router;