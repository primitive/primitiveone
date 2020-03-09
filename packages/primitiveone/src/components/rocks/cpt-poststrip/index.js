import { loadable } from "frontity";
// Codesplit the post-strip component
// sk-dev: not sure this is needed?
export default loadable(() => import("./post-strip"));