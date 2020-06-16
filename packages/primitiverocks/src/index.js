import React from "react";

const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/primitiverocks/src/index.js</pre>
    </>
  );
};

export default {
  name: "primitiverocks",
  roots: {
    primitiverocks: Root
  },
  state: {
    primitiverocks: {}
  },
  actions: {
    primitiverocks: {}
  }
};
