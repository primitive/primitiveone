const settings = {
  name: "primitiveone",
  state: {
    frontity: {
      url: "https://primitivedigital.uk", // required: 
      title: "Want a Website?",
      description: "WordPress Web Sites and Apps"
    }
  },
  packages: [
    {
      name: "primitiveone",
      state: {
        theme: {
          menu: [
            [ "Home", "/" ],
            [ "Design", "/web-design" ],
            [ "Development", "/web-development" ],
            [ "Data", "/data-insights" ],
            [ "Marketing", "/marketing" ],
            [ "Blog", "/blog/" ]
          ],
          featured: {
            showOnList: true,
            showOnPost: true
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://wp.primitivedigital.uk/wp-json/", // required: Your WP REST API EndPoint
          homepage: "/home/", // optional: set when using a page as the site homepage
          postsPage: "/blog/", // optional: set when using a page as the site homepage
          postTypes: [
            {
              type: "temporal_events", // custom post type slug
              endpoint: "temporal_events", // REST API endpoint
              archive: "/temporal_events" // link where this custom posts are listed
            }
          ],
          taxonomies: [
            {
              taxonomy: "timelines", // custom taxonomy slug
              endpoint: "timeline", // REST API endpoint
              postTypeEndpoint: "/temporal_events", // endpoint from which posts from this taxonomy are fetched
            }
          ]
        },
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;