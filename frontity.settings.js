const settings = {
  "name": "primitiveone",
  "state": {
    "frontity": {
      "url": "https://primitivedigital.uk",
      "title": "Want a Website?",
      "description": "WordPress Web Site Design &amp; Development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Design",
              "/category/nature/"
            ],
            [
              "Development",
              "/category/travel/"
            ],
            [
              "Data",
              "/tag/japan/"
            ],
            [
              "Marketing",
              "/about-us/"
            ],
            [
              "Blog",
              "/blog/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://primitivedigital.uk/wp-json/",
          "homepage": "/home",
          "postsPage": "/blog"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
