const settings = {
  name: "primitiveone",
  state: {
  frontity: {
      url: "https://primitivedigital.uk",
      title: "Primitive Digital",
      description: "WordPress Web Sites & Apps",
      name: "Want a Website?"
    }
  },
  packages: [
    {
      name: "primitive-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Design", "/web-design"],
            ["Development", "/web-development"],
            ["Data", "/data-insights"],
            ["Marketing", "/marketing"],
            ["A Nice Log", "/blog"]
          ],
          menufooter: [
            ["Contact", "/contact"],
            ["Startup Offers", "/darwin-project"],
            ["Adventures in Time", "/timelines"],
            ["The Cave of Wonders", "/cave"],
            ["Primitive Theme for Frontity", "https://www.npmjs.com/package/primitive-theme"],
            ["Privacy Policy", "privacy-policy"]
          ],
          featured: {
            "showOnList": true,
            "showOnPost": true,
            "showOnPage": true,
          },
          // tbc
          archive: {
            "showExcerpt": false
          }  
        }
      }
    },
    {
      name: "@frontity/google-analytics",
      state: {
        "googleAnalytics": {
          "trackingIds": ['UA-61815763-1']
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://api.primitivedigital.uk/wp-json", // required: Your WP REST API EndPoint (no trailing slash)
          
          homepage: "/home", // optional: set when using a page as the site homepage (wp hp settings ignored)
          postsPage: "/blog", // optional: set when using a page as the site homepage

          // optional: define CPTs
          postTypes: [
            {
              type: "works", // custom post type slug
              endpoint: "works", // WP REST API endpoint
              archive: "/works" // router link: do i want to use this?
            },
            {
              type: "temporal_events", // custom post type slug
              endpoint: "temporal_events", // WP REST API endpoint
              archive: "/evolution-of-digital-stuff" // router link: list view of these custom post types
            },
            {
              type: "things", // custom post type slug
              endpoint: "things", // WP REST API endpoint
              archive: "/things" // router link: list view of these custom post types
            }
          ],
          taxonomies: [
            {
              taxonomy: "timelines", // custom taxonomy slug
              endpoint: "timelines", // WP REST API endpoint
              postTypeEndpoint: "/temporal_events", // endpoint for (custom) post types to query
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",
    "frontity-contact-form-7"
  ]
};

export default settings;