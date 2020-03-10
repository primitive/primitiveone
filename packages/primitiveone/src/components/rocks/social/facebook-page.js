import React from "react";
import { styled } from "frontity";
import Iframe from "@frontity/components/iframe";
// see fb plugin iframe method: https://developers.facebook.com/docs/plugins/page-plugin/

const FacebookPage = ({ props }) => {

  // console.log("@facebook-page: props ", props);

  return (
    <StyledIframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprimitivedigital%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2317056035225898"
      width="340"
      height="500"
      style="border:none;overflow:hidden"
      scrolling="no"
      frameborder="0"
      allowTransparency="true"
      allow="encrypted-media"
    >
    </StyledIframe>
  );

};

export default FacebookPage;

const StyledIframe = styled(Iframe)`
  margin: 1rem auto;
  border: none;
  text-align: center;
`;