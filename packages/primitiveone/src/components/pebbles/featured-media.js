import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedMedia = ({ state, id, className }) => {
  const media = state.source.attachment[id];

  // console.log("@featured-media: media", media );

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map(item => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <Container>
      <StyledImage
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
      />
    </Container>
  );
};

export default connect(FeaturedMedia);

const Container = styled.div`
  margin-top: 1rem;
  height: 400px;
`;

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border: solid 3px rgba(0,44,44,.3);
  border-radius: 150px 15px 150px 15px/15px 150px 15px 150px;
  box-shadow:  0 2px 2.2px rgba(0, 0, 0, 0.034),
              0 6px 5.3px rgba(0, 0, 0, 0.048),
              0 12px 10px rgba(0, 0, 0, 0.06),
              0 24px 15.9px rgba(0, 0, 0, 0.072),
              0 35.8px 23.4px rgba(0, 0, 0, 0.086),
              0 40px 30px rgba(0, 0, 0, 0.12);
`;
