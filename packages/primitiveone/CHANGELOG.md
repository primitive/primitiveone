# Change Log

All notable changes to this project and some odd comments may be documented here.

Very, very loosly following [Conventional Commits](https://conventionalcommits.org) guidelines.


 🔥️ HOT 🥔 POTATO,  🔥️ HOT 🥔 POTATO,  🔥️ HOT 🥔 POTATO.

## Notes

// https://wp.primitivedigital.uk/wp-json/wp/v2/temporal_events
// https://wp.primitivedigital.uk/wp-json/wp/v2/timelines
// https://wp.primitivedigital.uk/wp-json/wp/v2/work

// OR
// https://wp.primitivedigital.uk/wp-json/acf/v3/temporal_events
// https://wp.primitivedigital.uk/wp-json/acf/v3/timelines


## WIP

- T: fade in lazy loaded images
- T: Fade in lazy loaded images?
- T: Google Analitics: Review and implement package when released
- T: Research conditional loading of various UI cores + theme ()
- T: Create shoelace theme vars
- T: Set base CSS to use none/twentytwenty/bootstrap



- Q: benefits of useEffect vs self-invoking
- Q: why favour function components over class components
- Q: why favour .js over .jsx
- Q: why favour styled vars after exports
- Q: imports / conditional / slots?

- 


## History

1.1.1 > Update (April 29, 2020):
- Theming and config
- Minimise Bootrap use / create shoelace implimentation 
- Apply custom styling/theme to CF7 components

1.1.0 > Major Update (April 01, 2020):
- Fixed full URI redirects 
- Server clean up
- Deploy new CDN and Edge Caching

- Update project structure to work with templating/config (views/blocks/elements)
- - Reduce CSS classes and global styles
- - New views / mountains
- - New content block components / rocks
- - New animated content block / scenes
- - New cpt/taxonomy components 
- - New Social components
- - 
- - Refine use of Bootstrap/CSS Frameworks and global/component CSS-IN-JS (emotion)


- Intergrate New Frontity Features:
- - Custom Post Types and Taxonomies
- - - Added some custom post types / taxonomies content to wp
- - - Added CPT views and content blocks
- - - Done via plugins ACF+CPT UI (I've not modified functions.php at all yet)

- - Switch/router plus hi-jacked some code updates from the twentytwenty theme

- - Added cf7 package


1.0.11 > Update (January 15, 2020): 
- Plan: CPT/Taxonomies, 
- Housekeeping!!!: tidy up frontity.settings.js
- Update: Frontity and all dependencies updated.

1.0.10 > Update (December 15, 2019): 
- Confirmed "Query strings break routing / 404s" as resolved: https://github.com/frontity/frontity/issues/229
- Refine: replace :nth-child with :nth-of-type in datamap css
- Update: Frontity and all dependencies updated.

Update (October 27, 2019):  
- Resolved: React-bootstrap Tabs aria issue: https://github.com/react-bootstrap/react-bootstrap/pull/4331
- Test: Images URLs modified for auto responsive sizing in mock-widget block
- Installed redirect plugin to prevent access to WP (rest server) frontend
- Config files updated
- Previous now deployment failed, adding mars-theme config/files back resolved this


Update (October 09, 2019):  
- Footer updated
- Clean install performed
- Published as npm package: https://www.npmjs.com/package/primitiveone
- Test, preload/preconnect: https://developers.google.com/web/fundamentals/performance/resource-prioritization?utm_source=lighthouse&utm_medium=devtools#preconnect


Update (October 06, 2019):  
- Frontity core and package updated
- Clean wp install done to new subdomain
- Settings, read.me and project structure updated, unused modules removed
- Began CSS code splitting

1st Release/RC (October 01, 2019):  
- Performance enhancements and docs update  
- Moved static images to cloudinary and set format to auto

1st Working Draft Release (September 16, 2019):  
- Deployed to Zeit Now with Google analytics  

 🐒 - 