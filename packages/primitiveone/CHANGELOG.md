# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

// 🔥️ HOT


## History

- Q: benefits of useEffect vs self-invoking
- Q: why favour function components over class components
- Q: why favour .js over .jsx
- Q: why favour typescript
- Q: why favour styled vars after exports


- Google Analitics: Review and implement package when released
- Switch/router: Review and implement component when released


1.0.14
- Feat: split the theme project structure to work with templating engine (views/blocks/elements)
- Refine: Code and review best practice
- - Remove CSS classes whereever possible.
- - Use of Bootstrap/CSS Frameworks and global/component CSS-IN-JS (emotion)
- - Research conditional loading of various UI cores + theme

// https://stackoverflow.com/questions/51748396/composition-of-react-emotion-and-external-css-eg-bootstrap-classes
// https://www.sitepoint.com/integrating-bootstrap-with-react/
// https://codesandbox.io/s/xoxw25nn84
// https://emotion.sh/docs/introduction
// https://emotion.sh/docs/theming
// https://github.com/styled-system/styled-system
// https://github.com/bwarner/emotion-bootstrap
// https://github.com/bwarner/emotion-react-bootstrap
// https://github.com/segunadebayo/chakra-ui
// https://blog.alexdevero.com/introduction-styled-components/

// https://github.com/gregberge/loadable-components
// https://css-tricks.com/using-react-loadable-for-code-splitting-by-components-and-routes/
// https://levelup.gitconnected.com/decreasing-webpack-bundle-size-with-conditional-imports-f8bb94db8195
// https://stackoverflow.com/questions/35914712/es6-conditional-dynamic-import-statements

- Keyframe Animation: https://docs.frontity.org/learning-frontity/styles#keyframes
// https://emotion.sh/docs/keyframes



1.0.12 > 
- Intergrate New Frontity Features: Custom Post Types and Taxonomies
- Feat: added some custom post types / taxonomies content to wp via plugins ACF+CPT UI 

// https://wp.primitivedigital.uk/wp-json/wp/v2/temporal_events
// https://wp.primitivedigital.uk/wp-json/wp/v2/timelines
// https://wp.primitivedigital.uk/wp-json/wp/v2/work

// OR
// https://wp.primitivedigital.uk/wp-json/acf/v3/temporal_events
// https://wp.primitivedigital.uk/wp-json/acf/v3/timelines


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