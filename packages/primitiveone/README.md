# Primitive One Frontity Theme
A Headless WordPress (REST API) Theme for Frontity

![screenshot](../../img/punky.png)

Created with a little Node.js and React magic. 

Built on the awesome new, itty bitty, Frontity framework: https://frontity.org/ 

With little help from our friends: Bootstrap 4, GSAP and ScrollMagic. 

Live demo site: https://primitivedigital.co.uk  

GitHub: https://github.com/primitiveshaun/primitiveone

NPM: https://www.npmjs.com/package/primitiveone

Domain and WordPress hosting from: https://primitivehosting.uk/headlesswp

N.B. This is only my second attempt at React based website so do be kind.  
It may be messy and it may be downright wrong in places.	

See [changelog](CHANGELOG.md) for release notes.


## Issues, Fix and Refine ###

1. Having issues importing the bootstrap CSS correctly


## To Do: Features >>>>>>
- Content: load WP pages and create cpt/acf
- Feat: custom post/cpt blocks ( ??? test with filters vs WP_Query)
- Feat: Better webfont loading
- Refine: Google analytics implementation / package
- Widget blocks (CPT, facebook, twitter, instagram, pinterest)
- Best practice: choosing the right component (Image can be imported from various modules)
- Best practice: applying 'styled' to components imported from other modules 
- How to set the location of page content when a static is set as the homepage / Content positioning / Roots and Fills


## To Do: Later >>>>>>

1. Merge with Boostrap branding kit.
2. Add: WP theme support and user configurables
3. Refine: Animation, use scale and overlap tweens
4. Add: Create/Extend animations to pass user configuration
5. AMP


## Performance Comparrison Testing (WIP)
Check back for links to compare the performance of various deployments.  

Now: https://now.primitivedigital.uk  
Google: TBC  
AWS: TBC  
Static: TBC  


## Created by Primitive Digital
### https://primitivedigital.uk

![screenshot](../../img/webby.png)

Setup
-----

The following pre-requisites should be in place for the theme to work:

1. WordPress install of version 5.0 or later
2. Optional but highly recommended: register a domain
3. If deploying to Now install WordPress to a sub directory e.g. - wp.example.com
4. Posts permalink set set to: Custom Structure e.g. - `/posts/%postname%/`
5. Set homepage to a static page

To be added in next release(s) (WIP)
6. ACF Plugin vs Register custom fields
7. CPT UI Plugin vs Register custom post types
8. ACF Category permalink to be set as: Custom base - `/products/`

Installing and beginning development
------------------------------------

*** Follow the Frontity setup outlined in their Docs ***

https://docs.frontity.org/getting-started/quick-start-guide


1. `git clone https://github.com/primitiveshaun/primitiveone`
2. `cd primitiveone`
3. `npm install && npx frontity dev (from the project's root directory)`

** Quick Ref: Commands **

npx frontity dev  

npx frontity build  


Deployment
------------------------------------

*** Follow the Frontity deployment outlined in their Docs ***

https://docs.frontity.org/installation-and-deploy

npx now  
npx now --prod  


------------------------------------

The code is opensource so play like you mean business.

Enjoy!


#### Need Support
-------

If you find any problems with this theme, please report an issue at:  
https://github.com/primitiveshaun/primitiveone/issues

#### Primitive One created by Primitive Digital
##### https://primitivedigital.uk

![screenshot](../../img/haveyouseenit.jpg)
