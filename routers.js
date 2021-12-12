var router = require('express').Router()
const extractionService = require("./services/extractionservice")

function getAllFromURL(req, res) {
    try {
        axios
            .get(
                `${req.query.url}`
            )
            .then(response => {

                const metatags = extractionService.getMetaTags(response.data)
                const jsonLd = extractionService.getJsonldDataList(response.data)
                const microdata = extractionService.getMicroDataList(response.data, false)
                const rdfa = extractionService.getRdfaDataList(response.data, false)

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
};
function getJsonldDataListFromURL(req, res) {
    try {
        axios
            .get(
                `${req.query.url}`
            )
            .then(response => {
                res.status(200).send(extractionService.getJsonldDataList(response.data));
            })
            .catch(err => {
                res.status(400).send("Bad Request");
                console.log(err);
            });
    } catch (err) {
        res.status(404).send("404");
    }
};
function getMetaTagsFromURL(req, res) {
    try {
        axios
            .get(
                `${req.query.url}`
            )
            .then(response => {
                res.status(200).send(extractionService.getMetaTags(response.data));
            })
            .catch(err => {
                res.status(400).send("Bad Request");
                console.log(err);
            });
    } catch (err) {
        res.status(404).send("404");
    }
};
function getMicroDataListFromURL(req, res) {
    try {
        axios
            .get(
                `${req.query.url}`
            )
            .then(response => {
                res.status(200).send(extractionService.getMicroDataList(response.data, false));
            })
            .catch(err => {
                res.status(400).send("Bad Request");
                console.log(err);
            });
    } catch (err) {
        res.status(404).send("404");
    }
};
function getRdfaDataListFromURL(req, res) {
    try {
        axios
            .get(
                `${req.query.url}`
            )
            .then(response => {
                res.status(200).send(extractionService.getRdfaDataList(response.data, false));
            })
            .catch(err => {
                res.status(400).send("Bad Request");
                console.log(err);
            });
    } catch (err) {
        res.status(404).send("404");
    }
};
function getAllFromHTML(req, res) {
    try {
        const requestedHTML = req.body.html;
        const metatags = extractionService.getMetaTags(requestedHTML, true)
        const jsonLd = extractionService.getJsonldDataList(requestedHTML, true)
        const microdata = extractionService.getMicroDataList(requestedHTML, true)
        const rdfa = extractionService.getRdfaDataList(requestedHTML, true)

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
};
function getJsonldDataListFromHTML(req, res) {
    try {
        const requestedHTML = req.body.html;
        res.status(200).send(extractionService.getJsonldDataList(requestedHTML));
    }

    catch (err) {
        res.status(400).send("Bad Request.");
    }
};
function getMetaTagsFromHTML(req, res) {
    try {
        const requestedHTML = req.body.html;
        res.status(200).send(extractionService.getMetaTags(requestedHTML));
    }

    catch (err) {
        res.status(400).send("Bad Request.");
    }
};
function getMicroDataListFromHTML(req, res) {
    try {
        const requestedHTML = req.body.html;
        res.status(200).send(extractionService.getMicroDataList(requestedHTML, true));
    }

    catch (err) {
        res.status(400).send("Bad Request.");
    }
};
function getRdfaDataListFromHTML(req, res) {
    try {
        const requestedHTML = req.body.html;
        res.status(200).send(extractionService.getRdfaDataList(requestedHTML, true));
    }

    catch (err) {
        res.status(400).send("Bad Request.");
    }
};

router.post('/html/schemaorg/rdfa/summary', getRdfaDataListFromHTML)
router.post('/html/schemaorg/microdata/summary', getMicroDataListFromHTML)
router.post('/html/schemaorg/meta/summary', getMetaTagsFromHTML)
router.post('/html/schemaorg/jsonld/summary', getJsonldDataListFromHTML)
router.post('/html/schemaorg/all/summary', getAllFromHTML)
router.get('/url/schemaorg/rdfa/summary', getRdfaDataListFromURL)
router.get('/url/schemaorg/microdata/summary', getMicroDataListFromURL)
router.get('/url/schemaorg/meta/summary', getMetaTagsFromURL)
router.get('/url/schemaorg/jsonld/summary', getJsonldDataListFromURL)
router.get('/url/schemaorg/all/summary', getAllFromURL)
router.get('',)


module.exports = router