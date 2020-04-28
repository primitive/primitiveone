import React from "react";
import { styled } from "frontity";
import Iframe from "@frontity/components/iframe";
// see fb plugin iframe method: https://developers.facebook.com/docs/plugins/like-button

const FacebookLike = ({ props }) => {

  // console.log("@facebook-like: props ", props);

  return (
    <StyledIframe
      src={props.src}
      width={props.width}
      height={props.height}
      style={props.style}
      scrolling={props.scrolling}
      frameborder={props.frameborder}
      allowTransparency={props.allowTransparency}
      allow={props.allow}
    >
    </StyledIframe>
  );

};

export default FacebookLike;

const StyledIframe = styled(Iframe)`
  margin: 1.5rem auto;
  border: none;
  text-align: center;
`;