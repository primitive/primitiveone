# @primitivedigital/primitiveone

***The Log of Change***

 🔥️ HOT 🥔 POTATO,  🔥️ HOT 🥔 POTATO,  🔥️ HOT 🥔 POTATO.

To whom it may concern. Some odd comments may be documented here.

Commit messages are loosly following [Conventional Commits](https://conventionalcommits.org).

1.1.0: restructured for development of theme-able system. WIP

1.0.0: customised theme based on early release of frontity mars theme. published to npm.


## Dev Notes

* dependency errors, depreciation errors
* frontity.settings is dominant over package/index
* review licencing

*Noted Issues / already resolved:*
* arrays in settings have duplicated values
* vercel(zeit) deployment failure .gitignore, .nowignore - build folder issue with github setup.
* Some CSS-IN-JS gets messed up on prod build. this could have been an extra '}'?

- [ ] WIP: sort/filters: modify the wp theme funtions.php or use a plugin?
- [ ] base and custom cpt/taxonomy components (recent, random, related)
- [ ] Random content errors

- [ ] BS emotion warnings
- [ ] WebFonts: Tested as per docs. Implementation works but some google fonts don't convert well
- [ ] TBC. Some Google Fonts gets messed up converting to .woff/.woff2
- [ ] TBC. Some Fonts gets messed up on prod build?

- [ ] [SEO: Add Site maps](https://community.frontity.org/t/xml-sitemaps-landing-in-wordpress-core/1153)
- [ ] [SEO: Frontity Blog](https://frontity.org/blog/seo-for-headless-wordpress-themes/)
- [ ] [WP Theme Bridge](https://community.frontity.org/t/theme-bridge/1432/12)


## WIP / TODO

- [ ] FIX or FEAT: author list view / profile
- [ ] FIX: menu collapse / routing

- [ ] Optimise for Mobile: Don't serve some animations on mobile, handle click/hover
- [ ] Fade in lazy loaded images?
- [ ] Research conditional loading of UI cores + theme
- [ ] Create *shoelace* theme vars (color, breakpoints)
- [ ] Set base CSS to use none/twentytwenty/bootstrap (grid, classes, --modifiers-size/transparency/darken/lighten)
- [ ] Split primitiverocks package
- [ ] Split primitivescenes package
- [ ] Split theme / dev staging
- [ ] Setup wp theme repo
- [ ] Research modify functions.php (addFilters), add options.php or expose settings cpt
- [ ] Research create a UI/cf7 theme builder vs cli
- [ ] Research add comments / cf7 / fe content submission

- Q: useEffect vs self-invoking
- Q: imports / conditional / slots?  


## History

**1.1.3 > Update (May 22, 2020):**
- [x] Update gsap to v3
- [x] Add dev mode only logging


**1.1.2 > Update (May 19, 2020):**
- [x] Update Frontity / packages
- [x] Added Google Analytics package (May 10th): [@frontity/google-analytics](https://www.npmjs.com/package/@frontity/google-analytics)


**1.1.1 > Update (April 29, 2020):**
- [x] Develop base theming and config
- [x] Minimise Bootrap use / create shoelace implementation
- [x] Apply custom styling/theme to CF7 components

**1.1.0 > MAJOR Update (April 01, 2020):**
- [x] Fixed full URI redirects
- [x] Server clean up
- [x] Deployed new CDN and Edge Cache system

#### - [x] Update project structure;
- [x] New templating/config (views/blocks/elements)
- [x] Reduced CSS classes and global styles
- [x] Split post / page styles
- [x] New views / mountains
- [x] New content block components / rocks
- [x] New animated content block / scenes
- [x] New cpt/taxonomy components 
- [x] New social components
- [x] instagram: post(s)
- [x] facebook: like, page
- [x] Refine use of Bootstrap/CSS Frameworks and global/component CSS-IN-JS (emotion)


#### - [x] Intergrate New Frontity Features;
- [x] Custom Post Types and Taxonomies
- [x] Added some custom post types / taxonomies content to wp
- [x] Added CPT views and content blocks
- [x] Done via plugins ACF+CPT UI (I've not modified functions.php at all yet)
- [x] Switch/router plus hi-jacked some code updates from the twentytwenty theme
- [x] Added cf7 package and /contact page


**1.0.11 > Update (January 15, 2020):**
- Plan: CPT/Taxonomies, 
- Housekeeping!!!: tidy up frontity.settings.js
- Update: Frontity and all dependencies updated.

**1.0.10 > Update (December 15, 2019):** 
- Confirmed ["Query strings break routing / 404s" as resolved](https://github.com/frontity/frontity/issues/229)
- Refine: replace :nth-child with :nth-of-type in datamap css
- Update: Frontity and all dependencies updated.

**Update (October 27, 2019):** 
- Resolved: [React-bootstrap Tabs aria issue](https://github.com/react-bootstrap/react-bootstrap/pull/4331)
- Test: Images URLs modified for auto responsive sizing in mock-widget block
- Installed redirect plugin to prevent access to WP (rest server) frontend
- Config files updated
- Previous now deployment failed, adding mars-theme config/files back resolved this

**Update (October 09, 2019):**
- Footer updated
- Clean install performed
- Published [@primitivedigital/primitiveone as npm package](https://www.npmjs.com/package/primitiveone)
- Test, [preload/preconnect](https://developers.google.com/web/fundamentals/performance/resource-prioritization?utm_source=lighthouse&utm_medium=devtools#preconnect)

**Update (October 06, 2019):**
- Frontity core and package updated
- Clean wp install done to new subdomain
- Settings, readme and project structure updated, unused modules removed
- Began CSS code splitting

**1st Release/RC (October 01, 2019):**
- Performance enhancements and docs update  
- Moved static images to cloudinary and set format to auto

**1st Working Draft Release (September 16, 2019):**
- Deployed to Zeit Now with basic Google analytics snippet  
  
#### Ω - *the end*

 > 🐒 - 🐒 - 🐒 - 🐒 - 🐒 - 🐒 - 🐒 - 🐒       
<pre>                      
._ _  _. _| _  |_    ._ _  _ ._ | o _  _  
| | |(_|(_|(/_ |_)\/ | | |(_)| ||<|(/__>  
                  /                      
</pre>
> [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
