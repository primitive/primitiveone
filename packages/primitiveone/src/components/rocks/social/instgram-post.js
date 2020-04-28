import { css } from 'frontity';
import InstagramEmbed from 'react-instagram-embed';

const InstagramPost = ({ id, maxwidth }) => {

    // console.log(`@instagram-post: id: ${id}`);
    
    return (
      <InstagramEmbed
        url={"https://instagr.am/p/"+ id + "/"}
        maxWidth={maxwidth}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
        css={css`
          margin: 1rem auto;
          max-width: ${maxwidth}px;
        `}
      />
    )
};

export default InstagramPost;