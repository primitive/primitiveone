const settings = {
  name: "primitiveone",
  state: {
    frontity: {
      url: "https://primitivedigital.uk",
      title: "Want a Website?",
      description: "WordPress Web Sites and Apps",
      name: "Primitive Digital"
    }
  },
  packages: [
    {
      name: "@primitvedigital/primitiveone",
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
          featured: {
            showOnList: true,
            showOnPost: true,
            showOnPage: true
          }
        }
      }
    },
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingIds: ['UA-61815763-1']
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://primitive.press/wp-json", // required: Your WP REST API EndPoint (no trailing slash)
          homepage: "/home/", // optional: set when using a page as the site homepage
          postsPage: "/blog/", // optional: set when using a page as the site homepage
          postTypes: [
            {
              type: "works", // custom post type slug
              endpoint: "works", // REST API endpoint
              archive: "/works" // DO I NEED THIS???
            },
            {
              type: "temporal_events", // custom post type slug
              endpoint: "temporal_events", // REST API endpoint
              archive: "/evolution-of-digital-stuff" // link where this custom posts are listed
            },
            {
              type: "things", // custom post type slug
              endpoint: "things", // REST API endpoint
              archive: "/things" // link where this custom posts are listed
            }
          ],
          taxonomies: [
            {
              taxonomy: "timelines", // custom taxonomy slug
              endpoint: "timelines", // REST API endpoint
              postTypeEndpoint: "/temporal_events", // endpoint from which posts from this taxonomy are fetched
            }
          ]
        },
      }
    },
    "frontity-contact-form-7",
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags"
  ]
};

export default settings;