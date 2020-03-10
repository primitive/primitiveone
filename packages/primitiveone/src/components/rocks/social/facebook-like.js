import React from "react";
import { styled } from "frontity";
import Iframe from "@frontity/components/iframe";
// see fb plugin iframe method: https://developers.facebook.com/docs/plugins/like-button

const FacebookLike = ({ props }) => {

  console.log(`@facebook-like: id: ${props}`);

  return (
    <StyledIframe
      src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fprimitivedigital&width=150&layout=button_count&action=like&size=large&share=true&height=46&appId=2317056035225898"
      width="150"
      height="46"
      style="border:none;overflow:hidden"
      scrolling="no"
      frameborder="0"
      allowTransparency="true"
      allow="encrypted-media"
    >
    </StyledIframe>
  );

};

export default FacebookLike;

const StyledIframe = styled(Iframe)`
  margin: 1rem auto;
  border: none;
  text-align: center;
`;