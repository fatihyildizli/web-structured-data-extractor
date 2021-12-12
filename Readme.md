# Web Structured Data Extractor

Extract semantically structured information from any raw HTML or URL, supportted formats \"Microdata, RDFa,JSON-LD, meta tags, [Opengraphs](https://ogp.me
) " and its counters.

Supported formats:-
- All Meta tags
- [Opengraphs](https://ogp.me
)
- [Schema.org](http://schema.org/) vocabs;
  - JSON-LD
  - Microdata
  - RDFa
  

More info: 
[Schema.org](http://schema.org/),
[opengraph](https://ogp.me
)


Usage: **https://fy-crawler.herokuapp.com**
![](demo.gif)


[![GitHub stars](https://img.shields.io/github/stars/fatihyildizli/web-structured-data-extractor.svg)](https://github.com/fatihyildizli/web-structured-data-extractor/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/fatihyildizli/web-structured-data-extractor.svg)](https://github.com/fatihyildizli/web-structured-data-extractor/network/members)
[![Total Downloads](https://img.shields.io/packagist/dt/fatihyildizli/web-structured-data-extractor.svg?style=flat-square)](https://packagist.org/packages/fatihyildizli/web-structured-data-extractor)
![License](https://img.shields.io/github/license/fatihyildizli/web-structured-data-extractor)
![Code size](https://img.shields.io/github/repo-size/fatihyildizli/web-structured-data-extractor)
![Top Language](https://img.shields.io/github/languages/top/fatihyildizli/web-structured-data-extractor)
![Languages](https://img.shields.io/github/languages/count/fatihyildizli/web-structured-data-extractor)
![Views](https://img.shields.io/github/search/fatihyildizli/web-structured-data-extractor/web-structured-data-extractor)


## [REST ENDPOINTS](#usage)

```scala

PAGEURL:
GET -  https://structured-data-web.herokuapp.com/url/schemaorg/all/summary?url={PAGEURL}
GET -  https://structured-data-web.herokuapp.com/url/schemaorg/jsonld/summary?url={PAGEURL}
GET -  https://structured-data-web.herokuapp.com/url/schemaorg/rdfa/summary?url={PAGEURL}
GET -  https://structured-data-web.herokuapp.com/url/schemaorg/microdata/summary?url={PAGEURL}
GET -  https://structured-data-web.herokuapp.com/url/schemaorg/meta/summary?url={PAGEURL}
GET -  https://structured-data-web.herokuapp.com/url/schemaorg/opengraph/summary?url={PAGEURL}
---
RAW HTML:
POST - https://structured-data-web.herokuapp.com/html/schemaorg/all/summary
POST - https://structured-data-web.herokuapp.com/html/schemaorg/jsonld/summary
POST - https://structured-data-web.herokuapp.com/html/schemaorg/rdfa/summary
POST - https://structured-data-web.herokuapp.com/html/schemaorg/microdata/summary
POST - https://structured-data-web.herokuapp.com/html/schemaorg/meta/summary
POST - https://structured-data-web.herokuapp.com/html/opengraph/meta/summary
```


## PAGE URL

Let's try the following text as the `https://www.nytimes.com` in our example. It uses Schema.org vocabularies to structured information and is encoded in  `all formats`.


#### [Input](#input)
```html
https://structured-data-web.herokuapp.com/url/schemaorg/all/summary?url=https://www.nytimes.com
```

#### [Output](#output)

 `Parsed` object will be -

```json
[
    {
        "countJsonLd": 2,
        "countMicroData": 0,
        "countRdfa": 0,
        "countMetaTags": 21,
        "countOpengraph":5
    },
    {
        "meta": {
            "undefined": [
                null
            ],
            "robots": [
                "noarchive,noodp,noydir"
            ],
            "description": [
                "Live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world. Subscribe for coverage of U.S. and international news, politics, business, technology, science, health, arts, sports and more."
            ],
            "og:url": [
                "https://www.nytimes.com"
            ],
            "og:type": [
                "website"
            ],
            "og:title": [
                "The New York Times - Breaking News, US News, World News and Videos"
            ],
            "og:description": [
                "Live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world. Subscribe for coverage of U.S. and international news, politics, business, technology, science, health, arts, sports and more."
            ],
            "og:image": [
                "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png"
            ],
            "application-name": [
                "The New York Times"
            ],
            "msapplication-starturl": [
                "https://www.nytimes.com"
            ],
            "msapplication-task": [
                "name=Search;action-uri=https://www.nytimes.com/search/?src=iepin;icon-uri=https://static01.nyt.com/images/icons/search.ico",
                "name=Most Popular;action-uri=https://www.nytimes.com/gst/mostpopular.html?src=iepin;icon-uri=https://static01.nyt.com/images/icons/mostpopular.ico",
                "name=Video;action-uri=https://video.nytimes.com/?src=iepin;icon-uri=https://static01.nyt.com/images/icons/video.ico",
                "name=Homepage;action-uri=https://www.nytimes.com?src=iepin&adxnnl=1;icon-uri=https://static01.nyt.com/images/icons/homepage.ico"
            ],
            "nyt_uri": [
                "nyt://programmingnode/1999c500-b740-5ba9-b2c1-57ff6b183315"
            ],
            "CG": [
                "Homepage"
            ],
            "SCG": [
                ""
            ],
            "PT": [
                "Homepage"
            ],
            "PST": [
                ""
            ],
            "keywords": [
                "news, live updates, latest news, breaking news, local news, current events, top stories, livestream, live video, world news, us news"
            ],
            "viewport": [
                "width=device-width, initial-scale=1"
            ],
            "fb:app_id": [
                "9869919170"
            ],
            "twitter:site": [
                "@nytimes"
            ],
            "slack-app-id": [
                "A0121HXPPTQ"
            ]
        }
    },
    {
        "jsonLd": {
            "WebPage": [
                {
                    "@context": "http://schema.org",
                    "@type": "WebPage",
                    "image": [
                        {
                            "@context": "http://schema.org",
                            "@type": "ImageObject",
                            "url": "https://static01.nyt.com/vi-assets/images/share/1200x675_nameplate.png",
                            "height": 675,
                            "width": 1200
                        },
                        {
                            "@context": "http://schema.org",
                            "@type": "ImageObject",
                            "url": "https://static01.nyt.com/vi-assets/images/share/1200x900_t.png",
                            "height": 900,
                            "width": 1200
                        },
                        {
                            "@context": "http://schema.org",
                            "@type": "ImageObject",
                            "url": "https://static01.nyt.com/vi-assets/images/share/1200x1200_t.png",
                            "height": 1200,
                            "width": 1200
                        }
                    ],
                    "name": "The New York Times",
                    "mainEntity": {
                        "@context": "http://schema.org",
                        "@type": "ItemList",
                        "itemListElement": [
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/business/biden-economy-growth-jobs.html",
                                "position": 1
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/live/2021/12/10/business/inflation-cpi-stock-market-news",
                                "position": 2
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/live/2021/12/10/business/inflation-cpi-stock-market-news/one-year-jump-in-energy-prices-is-a-big-factor-in-inflations-jump",
                                "position": 3
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/live/2021/12/10/business/inflation-cpi-stock-market-news/food-prices-and-rent-surged-in-november-helping-fuel-inflation",
                                "position": 4
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/briefing/us-economy-covid-malaise.html",
                                "position": 5
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/us/politics/texas-abortion-supreme-court.html",
                                "position": 6
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/world/europe/vaccine-mandates-civil-liberties.html",
                                "position": 7
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/health/philadelphia-vaccine-mandate.html",
                                "position": 8
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/us/texas-critical-race-theory-ban-books.html",
                                "position": 9
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/us/politics/taxing-the-rich.html",
                                "position": 10
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/nyregion/richard-matt-murder-buffalo.html",
                                "position": 11
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/interactive/2021/12/09/us/where-the-despairing-log-on.html",
                                "position": 12
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/business/elon-musk-philanthropy.html",
                                "position": 13
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/08/arts/art-algorithm-2021.html",
                                "position": 14
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/arts/television/where-is-samantha-and-just-like-that.html",
                                "position": 15
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/arts/television/emily-dickinson-archive-harvard.html",
                                "position": 16
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/omicron-delta-economy-inflation.html",
                                "position": 17
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/covid-omicron-psychology-fear.html",
                                "position": 18
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/cash-crypto-trust-money.html",
                                "position": 19
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/opinion/sufferer-stranger-pain.html",
                                "position": 20
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/democrats-progressives-moderates-elections.html",
                                "position": 21
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/independent-journalism-at-risk-nobel-prize.html",
                                "position": 22
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/opinion/economy-inflation-spending-jobs.html",
                                "position": 23
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/opinion/new-york-city-christmas.html",
                                "position": 24
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/covid-evolve-milder.html",
                                "position": 25
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/supreme-court-abortion-roe.html",
                                "position": 26
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/opinion/theater-al-hirschfeld-stephen-sondheim.html",
                                "position": 27
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/opinion/omicron-nursing-homes.html",
                                "position": 28
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/letters/covid-international-travel-airlines.html",
                                "position": 29
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/opinion/congress-facebook-teens.html",
                                "position": 30
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/opinion/joe-biden-political-time.html",
                                "position": 31
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/08/opinion/beatles-get-back-creativity-lessons.html",
                                "position": 32
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/technology/birds-arent-real-gen-z-misinformation.html",
                                "position": 33
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/nyregion/trump-subpoena-testimony-letitia-james.html",
                                "position": 34
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/interactive/2021/12/09/world/vaccine-inequity-supply.html",
                                "position": 35
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/us/michigan-school-shooting-lawsuits-oxford.html",
                                "position": 36
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/world/europe/ukraine-military-russia-invasion.html",
                                "position": 37
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/podcasts/the-daily/peng-shuai-china-sports.html",
                                "position": 38
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/08/opinion/the-argument-free-speech-on-college-campuses.html",
                                "position": 39
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/neediest-cases/standing-ready-in-the-aftermath-of-disaster.html",
                                "position": 40
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/us/michigan-school-shooting-prosecutor.html",
                                "position": 41
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/live/2021/12/10/nyregion/ghislaine-maxwell-trial",
                                "position": 42
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/arts/music/michael-nesmith-dead.html",
                                "position": 43
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/world/americas/mexico-truck-crash.html",
                                "position": 44
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/business/economy/human-rights-export-controls.html",
                                "position": 45
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/world/africa/ethiopia-executions-rebels.html",
                                "position": 46
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/us/politics/jan-6-capitol-riot-subpoenas.html",
                                "position": 47
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/world/europe/uk-julian-assange-extradition.html",
                                "position": 48
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/us/youtube-scuba-diver-missing-teens.html",
                                "position": 49
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/business/economy/better-ceo-zoom-firing.html",
                                "position": 50
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/us/politics/bob-dole-funeral-biden.html",
                                "position": 51
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/upshot/surprise-billing-act.html",
                                "position": 52
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/well/mind/healthy-habits.html",
                                "position": 53
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/well/mind/emotional-resilience.html",
                                "position": 54
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/01/09/well/mind/healthy-habits.html",
                                "position": 55
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/interactive/2021/12/07/well/live/holiday-anxiety-covid.html",
                                "position": 56
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/01/08/well/live/habits-health.html",
                                "position": 57
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/theater/company-review-sondheim.html",
                                "position": 58
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/06/fashion/jewelry-diamonds-hemmerle-le-vian.html",
                                "position": 59
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/arts/music/alicia-keys-keys-review.html",
                                "position": 60
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/07/magazine/tv-for-cats.html",
                                "position": 61
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/business/christmas-tree.html",
                                "position": 62
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://cooking.nytimes.com/recipes/1022675-fruity-meltaways",
                                "position": 63
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://cooking.nytimes.com/recipes/1022795-anytime-fish-and-shellfish-stew",
                                "position": 64
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://cooking.nytimes.com/recipes/1021730-tamales-de-frijol-oaxacan-black-bean-tamales",
                                "position": 65
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://cooking.nytimes.com/recipes/1017141-lemon-bars-with-olive-oil-and-sea-salt",
                                "position": 66
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://cooking.nytimes.com/recipes/1022801-smoked-gouda-and-broccoli-flatbreads",
                                "position": 67
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/wirecutter/gifts/gifts-we-want-to-give-2021/",
                                "position": 68
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/wirecutter/guides/how-to-clean-stainless-steel-pans/",
                                "position": 69
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/wirecutter/blog/wired-earbuds-are-so-hot-right-now/",
                                "position": 70
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/wirecutter/reviews/best-projectors/",
                                "position": 71
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/puzzles/spelling-bee",
                                "position": 72
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/crosswords",
                                "position": 73
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/puzzles/letter-boxed",
                                "position": 74
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/puzzles/tiles",
                                "position": 75
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/puzzles/vertex",
                                "position": 76
                            }
                        ],
                        "numberOfItems": 76
                    },
                    "publisher": {
                        "@id": "https://www.nytimes.com/#publisher"
                    }
                }
            ],
            "NewsMediaOrganization": [
                {
                    "@context": "http://schema.org",
                    "@type": "NewsMediaOrganization",
                    "name": "The New York Times",
                    "logo": {
                        "@context": "http://schema.org",
                        "@type": "ImageObject",
                        "url": "https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png",
                        "height": 40,
                        "width": 250
                    },
                    "url": "https://www.nytimes.com/",
                    "@id": "https://www.nytimes.com/#publisher",
                    "diversityPolicy": "https://www.nytco.com/diversity-and-inclusion-at-the-new-york-times/",
                    "ethicsPolicy": "https://www.nytco.com/who-we-are/culture/standards-and-ethics/",
                    "masthead": "https://www.nytimes.com/interactive/2020/09/08/admin/the-new-york-times-masthead.html",
                    "foundingDate": "1851-09-18",
                    "sameAs": [
                        "https://www.facebook.com/nytimes/",
                        "https://twitter.com/nytimes",
                        "https://www.instagram.com/nytimes/",
                        "https://www.youtube.com/user/TheNewYorkTimes",
                        "https://www.linkedin.com/company/the-new-york-times",
                        "https://www.wikidata.org/wiki/Q9684",
                        "https://en.wikipedia.org/wiki/The_New_York_Times"
                    ],
                    "alternateName": [
                        "NYT",
                        "new york times",
                        "nytimes",
                        "ny times"
                    ],
                    "subOrganization": [
                        {
                            "@type": "Organization",
                            "name": "NYT Cooking",
                            "url": "https://cooking.nytimes.com/",
                            "sameAs": [
                                "https://www.facebook.com/nytcooking/",
                                "https://www.facebook.com/groups/nytcooks/",
                                "https://www.instagram.com/nytcooking/",
                                "https://www.youtube.com/channel/UC1rIOwTqDuWkFj87HZYRFOg",
                                "https://twitter.com/nytfood"
                            ],
                            "logo": [
                                {
                                    "url": "https://static01.nyt.com/applications/cooking/37f1abc/assets/SiteLogoRed.svg",
                                    "height": 31,
                                    "width": 168,
                                    "@type": "ImageObject"
                                },
                                {
                                    "url": "https://static01.nyt.com/applications/cooking/37f1abc/assets/SiteLogoBlack.svg",
                                    "height": 24,
                                    "width": 131,
                                    "@type": "ImageObject"
                                }
                            ]
                        },
                        {
                            "@type": "Organization",
                            "name": "Wirecutter",
                            "url": "https://www.nytimes.com/wirecutter/",
                            "sameAs": [
                                "https://www.facebook.com/thewirecutter/",
                                "https://www.instagram.com/wirecutter/",
                                "https://twitter.com/wirecutter/",
                                "https://www.linkedin.com/company/the-wirecutter/",
                                "https://www.youtube.com/wirecutter"
                            ],
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://cdn.thewirecutter.com/wp-content/uploads/2020/05/nytimes-wirecutter-logo.png",
                                "width": 266,
                                "height": 34
                            }
                        }
                    ]
                }
            ]
        }
    },
    {
        "microdata": {}
    },
    {
        "rdfa": {}
    }
]
```



## RAW HTML


Let's try the following text as the `rawHTML` in our example. It uses Schema.org vocabularies to structured information and is encoded in  `all formats`.

`HTML` format must be `json escaped ` form.

https://www.freeformatter.com/json-escape.html#ad-output 

#### [Input](#input)
```html
https://structured-data-web.herokuapp.com/html/schemaorg/all/summary
POST 

Request Body:
{
    "html": "JSON_ESCAPED_RAW_HTML"
}

```


```html
{
    "html":"\r\n<!DOCTYPE html>\r\n<html lang=\"en-US\"  xmlns:og=\"http:\/\/opengraphprotocol.org\/schema\/\">\r\n  <head>\r\n    <meta charset=\"utf-8\" \/>\r\n    <title data-rh=\"true\">The New York Times - Breaking News, US News, World News and Videos<\/title>\r\n    <meta data-rh=\"true\" name=\"robots\" content=\"noarchive,noodp,noydir\"\/><meta data-rh=\"true\" name=\"description\" content=\"Live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world. Subscribe for coverage of U.S. and international news, politics, business, technology, science, health, arts, sports and more.\"\/><meta data-rh=\"true\" property=\"og:url\" content=\"https:\/\/www.nytimes.com\"\/><meta data-rh=\"true\" property=\"og:type\" content=\"website\"\/><meta data-rh=\"true\" property=\"og:title\" content=\"The New York Times - Breaking News, US News, World News and Videos\"\/><meta data-rh=\"true\" property=\"og:description\" content=\"Live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world. Subscribe for coverage of U.S. and international news, politics, business, technology, science, health, arts, sports and more.\"\/><meta data-rh=\"true\" property=\"og:image\" content=\"https:\/\/static01.nyt.com\/newsgraphics\/images\/icons\/defaultPromoCrop.png\"\/> <link data-rh=\"true\" rel=\"canonical\" href=\"https:\/\/www.nytimes.com\"\/><link data-rh=\"true\" rel=\"alternate\" href=\"https:\/\/www.nytimes.com\" hrefLang=\"x-default\"\/><link data-rh=\"true\" rel=\"alternate\" href=\"https:\/\/www.nytimes.com\" hrefLang=\"en-US\"\/><link data-rh=\"true\" rel=\"alternate\" href=\"https:\/\/www.nytimes.com\/international\/\" hrefLang=\"en\"\/><link data-rh=\"true\" rel=\"alternate\" href=\"https:\/\/www.nytimes.com\/international\/\" hrefLang=\"en-GB\"\/><link data-rh=\"true\" rel=\"alternate\" href=\"https:\/\/www.nytimes.com\/international\/\" hrefLang=\"en-AU\"\/><link data-rh=\"true\" rel=\"alternate\" href=\"https:\/\/www.nytimes.com\/ca\/\" hrefLang=\"en-CA\"\/><link data-rh=\"true\" rel=\"alternate\" href=\"https:\/\/www.nytimes.com\/es\/\" hrefLang=\"es\"\/><link data-rh=\"true\" rel=\"alternate\" href=\"https:\/\/cn.nytimes.com\/\" hrefLang=\"zh-Hans\"\/><link data-rh=\"true\" rel=\"alternate\" href=\"https:\/\/cn.nytimes.com\/zh-hant\/\" hrefLang=\"zh-Hant\"\/><link data-rh=\"true\" rel=\"alternate\" type=\"application\/rss+xml\" title=\"RSS\" href=\"https:\/\/rss.nytimes.com\/services\/xml\/rss\/nyt\/HomePage.xml\"\/> <script data-rh=\"true\" type=\"application\/ld+json\">{\"@context\":\"http:\/\/schema.org\",\"@type\":\"WebPage\",\"image\":[{\"@context\":\"http:\/\/schema.org\",\"@type\":\"ImageObject\",\"url\":\"https:\/\/static01.nyt.com\/vi-assets\/images\/share\/1200x675_nameplate.png\",\"height\":675,\"width\":1200},{\"@context\":\"http:\/\/schema.org\",\"@type\":\"ImageObject\",\"url\":\"https:\/\/static01.nyt.com\/vi-assets\/images\/share\/1200x900_t.png\",\"height\":900,\"width\":1200},{\"@context\":\"http:\/\/schema.org\",\"@type\":\"ImageObject\",\"url\":\"https:\/\/static01.nyt.com\/vi-assets\/images\/share\/1200x1200_t.png\",\"height\":1200,\"width\":1200}],\"name\":\"The New York Times\",\"mainEntity\":{\"@context\":\"http:\/\/schema.org\",\"@type\":\"ItemList\",\"itemListElement\":[{\"@context\":\"http:\/\/schema.org\",\"@type\":\"ListItem\",\"url\":\"https:\/\/www.nytimes.com\/2021\/12\/10\/business\/biden-economy-growth-jobs.html\",\"position\":1},{\"@context\":\"http:\/\/schema.org\",\"@type\":\"ListItem\",\"url\":\"https:\/\/www.nytimes.com\/live\/2021\/12\/10\/business\/inflation-cpi-stock-market-news\",\"position\":2},{\"@context\":\"http:\/\/schema.org\",\"@type\":\"ListItem\",\"url\":\"https:\/\/www.nytimes.com\/live\/2021\/12\/10\/business\/inflation-cpi-stock-market-news\/one-year-jump-in-energy-prices-is-a-big-factor-in-inflations-jump\",\"position\":3},{\"@context\":\"http:\/\/schema.org\",\"@type\":\"ListItem\",\"url\":\"https:\/\/www.nytimes.com\/live\/2021\/12\/10\/business\/inflation-cpi-stock-market-news\/food-prices-and-rent-surged-in-november-helping-fuel-inflation\",\"position\":4},{\"@context\":\"http:\/\/schema.org\",\"@type\":\"ListItem\",\"url\":\"https:\/\/www.nytimes.com\/2021\/12\/10\/briefing\/us-economy-covid-malaise.html\",\"position\":5},B3&gtm_auth=tfAzqo1rYDLgYhmTnSjPqw&gtm_preview=env-130&gtm_cookies_win=x\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"><\/iframe>\r\n<\/
    .
    
    
    .
    
    
    .
    
    noscript>\r\n    \r\n    \r\n    <!-- RELEASE a41e994707b9b085db2ccbc1cbb6288196888111 -->\r\n  <\/body>\r\n<\/html>"
}
```


#### [Output](#output)

 `Parsed` object will be -

```json
[
    {
        "countJsonLd": 2,
        "countMicroData": 0,
        "countRdfa": 0,
        "countMetaTags": 21,
        "countOpengraph":5
    },
    {
        "meta": {
            "undefined": [
                null
            ],
            "robots": [
                "noarchive,noodp,noydir"
            ],
            "description": [
                "Live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world. Subscribe for coverage of U.S. and international news, politics, business, technology, science, health, arts, sports and more."
            ],
            "og:url": [
                "https://www.nytimes.com"
            ],
            "og:type": [
                "website"
            ],
            "og:title": [
                "The New York Times - Breaking News, US News, World News and Videos"
            ],
            "og:description": [
                "Live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world. Subscribe for coverage of U.S. and international news, politics, business, technology, science, health, arts, sports and more."
            ],
            "og:image": [
                "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png"
            ],
            "application-name": [
                "The New York Times"
            ],
            "msapplication-starturl": [
                "https://www.nytimes.com"
            ],
            "msapplication-task": [
                "name=Search;action-uri=https://www.nytimes.com/search/?src=iepin;icon-uri=https://static01.nyt.com/images/icons/search.ico",
                "name=Most Popular;action-uri=https://www.nytimes.com/gst/mostpopular.html?src=iepin;icon-uri=https://static01.nyt.com/images/icons/mostpopular.ico",
                "name=Video;action-uri=https://video.nytimes.com/?src=iepin;icon-uri=https://static01.nyt.com/images/icons/video.ico",
                "name=Homepage;action-uri=https://www.nytimes.com?src=iepin&adxnnl=1;icon-uri=https://static01.nyt.com/images/icons/homepage.ico"
            ],
            "nyt_uri": [
                "nyt://programmingnode/1999c500-b740-5ba9-b2c1-57ff6b183315"
            ],
            "CG": [
                "Homepage"
            ],
            "SCG": [
                ""
            ],
            "PT": [
                "Homepage"
            ],
            "PST": [
                ""
            ],
            "keywords": [
                "news, live updates, latest news, breaking news, local news, current events, top stories, livestream, live video, world news, us news"
            ],
            "viewport": [
                "width=device-width, initial-scale=1"
            ],
            "fb:app_id": [
                "9869919170"
            ],
            "twitter:site": [
                "@nytimes"
            ],
            "slack-app-id": [
                "A0121HXPPTQ"
            ]
        }
    },
    {
        "jsonLd": {
            "WebPage": [
                {
                    "@context": "http://schema.org",
                    "@type": "WebPage",
                    "image": [
                        {
                            "@context": "http://schema.org",
                            "@type": "ImageObject",
                            "url": "https://static01.nyt.com/vi-assets/images/share/1200x675_nameplate.png",
                            "height": 675,
                            "width": 1200
                        },
                        {
                            "@context": "http://schema.org",
                            "@type": "ImageObject",
                            "url": "https://static01.nyt.com/vi-assets/images/share/1200x900_t.png",
                            "height": 900,
                            "width": 1200
                        },
                        {
                            "@context": "http://schema.org",
                            "@type": "ImageObject",
                            "url": "https://static01.nyt.com/vi-assets/images/share/1200x1200_t.png",
                            "height": 1200,
                            "width": 1200
                        }
                    ],
                    "name": "The New York Times",
                    "mainEntity": {
                        "@context": "http://schema.org",
                        "@type": "ItemList",
                        "itemListElement": [
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/business/biden-economy-growth-jobs.html",
                                "position": 1
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/live/2021/12/10/business/inflation-cpi-stock-market-news",
                                "position": 2
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/live/2021/12/10/business/inflation-cpi-stock-market-news/one-year-jump-in-energy-prices-is-a-big-factor-in-inflations-jump",
                                "position": 3
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/live/2021/12/10/business/inflation-cpi-stock-market-news/food-prices-and-rent-surged-in-november-helping-fuel-inflation",
                                "position": 4
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/briefing/us-economy-covid-malaise.html",
                                "position": 5
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/us/politics/texas-abortion-supreme-court.html",
                                "position": 6
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/world/europe/vaccine-mandates-civil-liberties.html",
                                "position": 7
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/health/philadelphia-vaccine-mandate.html",
                                "position": 8
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/us/texas-critical-race-theory-ban-books.html",
                                "position": 9
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/us/politics/taxing-the-rich.html",
                                "position": 10
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/nyregion/richard-matt-murder-buffalo.html",
                                "position": 11
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/us/michigan-school-shooting-prosecutor.html",
                                "position": 12
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/business/elon-musk-philanthropy.html",
                                "position": 13
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/08/arts/art-algorithm-2021.html",
                                "position": 14
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/arts/television/where-is-samantha-and-just-like-that.html",
                                "position": 15
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/arts/television/emily-dickinson-archive-harvard.html",
                                "position": 16
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/omicron-delta-economy-inflation.html",
                                "position": 17
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/covid-omicron-psychology-fear.html",
                                "position": 18
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/cash-crypto-trust-money.html",
                                "position": 19
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/opinion/sufferer-stranger-pain.html",
                                "position": 20
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/democrats-progressives-moderates-elections.html",
                                "position": 21
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/independent-journalism-at-risk-nobel-prize.html",
                                "position": 22
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/opinion/economy-inflation-spending-jobs.html",
                                "position": 23
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/opinion/new-york-city-christmas.html",
                                "position": 24
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/covid-evolve-milder.html",
                                "position": 25
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/supreme-court-abortion-roe.html",
                                "position": 26
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/opinion/theater-al-hirschfeld-stephen-sondheim.html",
                                "position": 27
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/opinion/omicron-nursing-homes.html",
                                "position": 28
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/opinion/letters/covid-international-travel-airlines.html",
                                "position": 29
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/opinion/congress-facebook-teens.html",
                                "position": 30
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/opinion/joe-biden-political-time.html",
                                "position": 31
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/08/opinion/beatles-get-back-creativity-lessons.html",
                                "position": 32
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/technology/birds-arent-real-gen-z-misinformation.html",
                                "position": 33
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/nyregion/trump-subpoena-testimony-letitia-james.html",
                                "position": 34
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/interactive/2021/12/09/world/vaccine-inequity-supply.html",
                                "position": 35
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/us/michigan-school-shooting-lawsuits-oxford.html",
                                "position": 36
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/world/europe/ukraine-military-russia-invasion.html",
                                "position": 37
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/podcasts/the-daily/peng-shuai-china-sports.html",
                                "position": 38
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/08/opinion/the-argument-free-speech-on-college-campuses.html",
                                "position": 39
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/neediest-cases/standing-ready-in-the-aftermath-of-disaster.html",
                                "position": 40
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/live/2021/12/10/nyregion/ghislaine-maxwell-trial",
                                "position": 41
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/interactive/2021/12/09/us/where-the-despairing-log-on.html",
                                "position": 42
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/world/americas/mexico-truck-crash.html",
                                "position": 43
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/arts/music/michael-nesmith-dead.html",
                                "position": 44
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/business/economy/human-rights-export-controls.html",
                                "position": 45
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/world/africa/ethiopia-executions-rebels.html",
                                "position": 46
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/us/politics/jan-6-capitol-riot-subpoenas.html",
                                "position": 47
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/world/europe/uk-julian-assange-extradition.html",
                                "position": 48
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/us/youtube-scuba-diver-missing-teens.html",
                                "position": 49
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/business/economy/better-ceo-zoom-firing.html",
                                "position": 50
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/us/politics/bob-dole-funeral-biden.html",
                                "position": 51
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/upshot/surprise-billing-act.html",
                                "position": 52
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/well/mind/healthy-habits.html",
                                "position": 53
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/well/mind/emotional-resilience.html",
                                "position": 54
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/01/09/well/mind/healthy-habits.html",
                                "position": 55
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/interactive/2021/12/07/well/live/holiday-anxiety-covid.html",
                                "position": 56
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/01/08/well/live/habits-health.html",
                                "position": 57
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/09/theater/company-review-sondheim.html",
                                "position": 58
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/06/fashion/jewelry-diamonds-hemmerle-le-vian.html",
                                "position": 59
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/arts/music/alicia-keys-keys-review.html",
                                "position": 60
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/07/magazine/tv-for-cats.html",
                                "position": 61
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/2021/12/10/business/christmas-tree.html",
                                "position": 62
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://cooking.nytimes.com/recipes/1022675-fruity-meltaways",
                                "position": 63
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://cooking.nytimes.com/recipes/1022795-anytime-fish-and-shellfish-stew",
                                "position": 64
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://cooking.nytimes.com/recipes/1021730-tamales-de-frijol-oaxacan-black-bean-tamales",
                                "position": 65
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://cooking.nytimes.com/recipes/1017141-lemon-bars-with-olive-oil-and-sea-salt",
                                "position": 66
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://cooking.nytimes.com/recipes/1022801-smoked-gouda-and-broccoli-flatbreads",
                                "position": 67
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/wirecutter/gifts/gifts-we-want-to-give-2021/",
                                "position": 68
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/wirecutter/guides/how-to-clean-stainless-steel-pans/",
                                "position": 69
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/wirecutter/blog/wired-earbuds-are-so-hot-right-now/",
                                "position": 70
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/wirecutter/reviews/best-projectors/",
                                "position": 71
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/puzzles/spelling-bee",
                                "position": 72
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/crosswords",
                                "position": 73
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/subscription/games",
                                "position": 74
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/puzzles/letter-boxed",
                                "position": 75
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/puzzles/tiles",
                                "position": 76
                            },
                            {
                                "@context": "http://schema.org",
                                "@type": "ListItem",
                                "url": "https://www.nytimes.com/puzzles/vertex",
                                "position": 77
                            }
                        ],
                        "numberOfItems": 77
                    },
                    "publisher": {
                        "@id": "https://www.nytimes.com/#publisher"
                    }
                }
            ],
            "NewsMediaOrganization": [
                {
                    "@context": "http://schema.org",
                    "@type": "NewsMediaOrganization",
                    "name": "The New York Times",
                    "logo": {
                        "@context": "http://schema.org",
                        "@type": "ImageObject",
                        "url": "https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png",
                        "height": 40,
                        "width": 250
                    },
                    "url": "https://www.nytimes.com/",
                    "@id": "https://www.nytimes.com/#publisher",
                    "diversityPolicy": "https://www.nytco.com/diversity-and-inclusion-at-the-new-york-times/",
                    "ethicsPolicy": "https://www.nytco.com/who-we-are/culture/standards-and-ethics/",
                    "masthead": "https://www.nytimes.com/interactive/2020/09/08/admin/the-new-york-times-masthead.html",
                    "foundingDate": "1851-09-18",
                    "sameAs": [
                        "https://www.facebook.com/nytimes/",
                        "https://twitter.com/nytimes",
                        "https://www.instagram.com/nytimes/",
                        "https://www.youtube.com/user/TheNewYorkTimes",
                        "https://www.linkedin.com/company/the-new-york-times",
                        "https://www.wikidata.org/wiki/Q9684",
                        "https://en.wikipedia.org/wiki/The_New_York_Times"
                    ],
                    "alternateName": [
                        "NYT",
                        "new york times",
                        "nytimes",
                        "ny times"
                    ],
                    "subOrganization": [
                        {
                            "@type": "Organization",
                            "name": "NYT Cooking",
                            "url": "https://cooking.nytimes.com/",
                            "sameAs": [
                                "https://www.facebook.com/nytcooking/",
                                "https://www.facebook.com/groups/nytcooks/",
                                "https://www.instagram.com/nytcooking/",
                                "https://www.youtube.com/channel/UC1rIOwTqDuWkFj87HZYRFOg",
                                "https://twitter.com/nytfood"
                            ],
                            "logo": [
                                {
                                    "url": "https://static01.nyt.com/applications/cooking/37f1abc/assets/SiteLogoRed.svg",
                                    "height": 31,
                                    "width": 168,
                                    "@type": "ImageObject"
                                },
                                {
                                    "url": "https://static01.nyt.com/applications/cooking/37f1abc/assets/SiteLogoBlack.svg",
                                    "height": 24,
                                    "width": 131,
                                    "@type": "ImageObject"
                                }
                            ]
                        },
                        {
                            "@type": "Organization",
                            "name": "Wirecutter",
                            "url": "https://www.nytimes.com/wirecutter/",
                            "sameAs": [
                                "https://www.facebook.com/thewirecutter/",
                                "https://www.instagram.com/wirecutter/",
                                "https://twitter.com/wirecutter/",
                                "https://www.linkedin.com/company/the-wirecutter/",
                                "https://www.youtube.com/wirecutter"
                            ],
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://cdn.thewirecutter.com/wp-content/uploads/2020/05/nytimes-wirecutter-logo.png",
                                "width": 266,
                                "height": 34
                            }
                        }
                    ]
                }
            ]
        }
    },
    {
        "microdata": {}
    },
    {
        "rdfa": {}
    }
]
```

## License

MIT
