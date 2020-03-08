import client from "@frontity/core/src/client";
import primitvedigital__primitiveone_default from "@primitvedigital/primitiveone/src/index";
import frontity__wp_source_default from "@frontity/wp-source/src/index";
import frontity__tiny_router_default from "@frontity/tiny-router/src/index";
import frontity__html2react_default from "@frontity/html2react/src/index";

const packages = {
  primitvedigital__primitiveone_default,
  frontity__wp_source_default,
  frontity__tiny_router_default,
  frontity__html2react_default,
};

export default client({ packages });

if (module["hot"]) {
  module["hot"].accept(
    [
      "@frontity/core/src/client",
      "@primitvedigital/primitiveone/src/index",
      "@frontity/wp-source/src/index",
      "@frontity/tiny-router/src/index",
      "@frontity/html2react/src/index",
    ],
    () => {
      const client = require("@frontity/core/src/client").default;
      const primitvedigital__primitiveone_default = require("@primitvedigital/primitiveone/src/index").default;
      const frontity__wp_source_default = require("@frontity/wp-source/src/index").default;
      const frontity__tiny_router_default = require("@frontity/tiny-router/src/index").default;
      const frontity__html2react_default = require("@frontity/html2react/src/index").default;
      const packages = {
        primitvedigital__primitiveone_default,
        frontity__wp_source_default,
        frontity__tiny_router_default,
        frontity__html2react_default,
      };
      client({ packages });
    }
  );
}