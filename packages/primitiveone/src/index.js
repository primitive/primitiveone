import Theme from "./components";
import image from "@frontity/html2react/processors/image";
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const before = ({ libraries }) => {
  // We use html2react to process the <img> tags inside the content HTML.
  libraries.html2react.processors.push(image);
};

const primitiveOne = {
  name: "primitiveone",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      menu: [],
      featured: {
        showOnList: false,
        showOnPost: false
      }
    }
  },
  actions: {
    theme: {
      beforeSSR: before,
      beforeCSR: before
    }
  }
};

export default primitiveOne;
