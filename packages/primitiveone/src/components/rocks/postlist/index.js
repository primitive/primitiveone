import { loadable } from "frontity";
// Codesplit the postlist component
export default loadable(() => import("./list"));
