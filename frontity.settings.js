const settings = {
  "name": "primitiveone",
  "state": {
    "frontity": {
      "url": "https://primitivedigital.uk",
      "title": "Want a Website?",
      "description": "We Make Fast and Efficient WordPress Web Sites and Apps"
    }
  },
  "packages": [
    {
      "name": "@frontity/primitiveone",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Design",
              "/"
            ],
            [
              "Development",
              "/"
            ],
            [
              "Data",
              "/"
            ],
            [
              "Marketing",
              "/"
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
          "api": "https://staging.primitivedigital.uk/wp-json/",
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
