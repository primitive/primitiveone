(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{181:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),o=n(3),u=n(55),i=n(167),l=n(428),c=n.n(l);function s(){var e=v(["\n  line-height: 1.6em;\n  color: rgba(12, 17, 43, 0.8);\n"]);return s=function(){return e},e}function f(){var e=v(["\n  color: rgba(12, 17, 43, 0.9);\n  font-size: 0.9em;\n"]);return f=function(){return e},e}function d(){var e=v(["\n  padding: 15px 0;\n"]);return d=function(){return e},e}function p(){var e=v(["\n  color: rgba(12, 17, 43, 0.9);\n  font-size: 0.9em;\n"]);return p=function(){return e},e}function b(){var e=v(["\n  font-size: 2rem;\n  color: rgba(12, 17, 43);\n  margin: 0;\n  padding-top: 24px;\n  padding-bottom: 8px;\n  box-sizing: border-box;\n"]);return b=function(){return e},e}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var j=Object(o.connect)((function(e){var t=e.state,n=e.item,a=t.source.author[n.author],o=new Date(n.date);return Object(r.jsx)("article",null,Object(r.jsx)(u.a,{link:n.link},Object(r.jsx)(y,{dangerouslySetInnerHTML:{__html:n.title.rendered}})),Object(r.jsx)("div",null,Object(r.jsx)(O,{link:a.link},Object(r.jsx)(x,null,"By ",Object(r.jsx)("b",null,a.name))),Object(r.jsx)(m,null," ","on ",Object(r.jsx)("b",null,o.toDateString()))),t.theme.featured.showOnList&&Object(r.jsx)(i.a,{id:n.featured_media}),Object(r.jsx)(h,{dangerouslySetInnerHTML:{__html:n.excerpt.rendered}}),Object(r.jsx)(c.a,{variant:"flat",size:"xxl"},"flat button"))})),y=o.styled.h1(b()),x=o.styled.span(p()),O=Object(o.styled)(u.a)(d()),m=o.styled.span(f()),h=o.styled.div(s());function g(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: inline-block;\n  margin-top: 16px;\n"]);return g=function(){return e},e}var _=Object(o.connect)((function(e){var t=e.state,n=e.actions,o=e.libraries,i=t.source.get(t.router.link).totalPages,l=o.source.parse(t.router.link),c=l.path,s=l.page,f=l.query,d=s<i,p=s>1,b=o.source.stringify({path:c,page:s+1,query:f}),v=o.source.stringify({path:c,page:s-1,query:f});return Object(a.useEffect)((function(){d&&n.source.fetch(b)}),[]),Object(r.jsx)("div",null,d&&Object(r.jsx)(u.a,{link:b},Object(r.jsx)(w,null,"← Older posts")),p&&d&&" - ",p&&Object(r.jsx)(u.a,{link:v},Object(r.jsx)(w,null,"Newer posts →")))})),w=o.styled.em(g());function k(){var e=D(["\n  font-weight: 300;\n  text-transform: capitalize;\n  color: rgba(12, 17, 43, 0.9);\n"]);return k=function(){return e},e}function P(){var e=D(["\nbackground-color: transparent;\n"]);return P=function(){return e},e}function D(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}t.default=Object(o.connect)((function(e){var t=e.state,n=t.source.get(t.router.link);return console.log("list",n),Object(r.jsx)(z,{className:"container"},n.isTaxonomy&&Object(r.jsx)(A,null,n.taxonomy,": ",t.source[n.taxonomy][n.id].name),n.isAuthor&&Object(r.jsx)(A,null,"Author: ",t.source.author[n.id].name),n.items.map((function(e){var n=e.type,a=e.id,o=t.source[n][a];return Object(r.jsx)(j,{key:o.id,item:o})})),Object(r.jsx)(_,null))}));var z=o.styled.main(P()),A=o.styled.h3(k())},426:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},427:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},428:function(e,t,n){"use strict";var r=n(28);t.__esModule=!0,t.default=void 0;var a=r(n(426)),o=r(n(427)),u=r(n(9)),i=r(n(1)),l=n(429),c=r(n(431)),s=i.default.forwardRef((function(e,t){var n=e.bsPrefix,r=e.variant,s=e.size,f=e.active,d=e.className,p=e.block,b=e.type,v=e.as,j=(0,o.default)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=(0,l.useBootstrapPrefix)(n,"btn"),x=(0,u.default)(d,y,f&&"active",y+"-"+r,p&&y+"-block",s&&y+"-"+s);if(j.href)return i.default.createElement(c.default,(0,a.default)({},j,{as:v,ref:t,className:(0,u.default)(x,j.disabled&&"disabled")}));t&&(j.ref=t),v||(j.type=b);var O=v||"button";return i.default.createElement(O,(0,a.default)({},j,{className:x}))}));s.displayName="Button",s.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var f=s;t.default=f,e.exports=t.default},429:function(e,t,n){"use strict";var r=n(430),a=n(28);t.__esModule=!0,t.useBootstrapPrefix=f,t.createBootstrapComponent=function(e,t){"string"==typeof t&&(t={prefix:t});var n=e.prototype&&e.prototype.isReactComponent,r=t,a=r.prefix,l=r.forwardRefAs,c=void 0===l?n?"ref":"innerRef":l;return(0,u.default)((function(t,n){var r=(0,o.default)({},t);r[c]=n;var u=f(r.bsPrefix,a);return i.default.createElement(e,(0,o.default)({},r,{bsPrefix:u}))}),{displayName:"Bootstrap("+(e.displayName||e.name)+")"})},t.default=t.ThemeConsumer=void 0;var o=a(n(426)),u=a(n(164)),i=r(n(1)),l=i.default.createContext({}),c=l.Consumer,s=l.Provider;function f(e,t){var n=(0,i.useContext)(l);return e||n[t]||t}t.ThemeConsumer=c;var d=function(e){var t=e.prefixes,n=e.children,r=(0,i.useMemo)((function(){return(0,o.default)({},t)}),[t]);return i.default.createElement(s,{value:r},n)};t.default=d},430:function(e,t){function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;var t=n();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}}return r.default=e,t&&t.set(e,r),r}},431:function(e,t,n){"use strict";var r=n(28);t.__esModule=!0,t.default=void 0;var a=r(n(426)),o=r(n(427)),u=r(n(1)),i=r(n(432));function l(e){return!e||"#"===e.trim()}var c=u.default.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,c=e.disabled,s=e.onKeyDown,f=(0,o.default)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,n=f.onClick;(c||l(t))&&e.preventDefault(),c?e.stopPropagation():n&&n(e)};return l(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),c&&(f.tabIndex=-1,f["aria-disabled"]=!0),u.default.createElement(r,(0,a.default)({ref:t},f,{onClick:d,onKeyDown:(0,i.default)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),s)}))}));c.displayName="SafeAnchor";var s=c;t.default=s,e.exports=t.default},432:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};t.default=r,e.exports=t.default}}]);