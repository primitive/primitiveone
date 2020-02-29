import { loadable } from "frontity";

// Codesplit - TBC if best way?
export default loadable(() => import("./social-section"));

{ /* Issue 
Invariant Violation: loadable: cannot find social-section in stats
at invariant (webpack-internal:///./node_modules/@loadable/component/dist/loadable.esm.js:13:118)
at ChunkExtractor.getChunkGroup (webpack-internal:///./node_modules/@loadable/server/lib/ChunkExtractor.js:3:2089)
at one (webpack-internal:///./node_modules/@loadable/server/lib/ChunkExtractor.js:3:2483)
at chunk (webpack-internal:///./node_modules/@loadable/server/lib/ChunkExtractor.js:1:1624)
at arrayMap (webpack-internal:///./node_modules/lodash-es/_arrayMap.js:10:142)
at map (webpack-internal:///./node_modules/lodash-es/map.js:47:231)
at flatMap (webpack-internal:///./node_modules/lodash-es/flatMap.js:24:168)
at getAssets (webpack-internal:///./node_modules/@loadable/server/lib/ChunkExtractor.js:1:1609)
at ChunkExtractor.getChunkAssets (webpack-internal:///./node_modules/@loadable/server/lib/ChunkExtractor.js:3:2681)
at ChunkExtractor.getMainAssets (webpack-internal:///./node_modules/@loadable/server/lib/ChunkExtractor.js:8:95)
*/ }
