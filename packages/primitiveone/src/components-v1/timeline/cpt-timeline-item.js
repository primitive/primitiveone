import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
//import ACFImage from "../cpt-media";
import Image from "@frontity/components/image";
import Card from 'react-bootstrap/Card';


const TemporalEvent = ({ state, item }) => {
  //const author = state.source.author[item.author];
  //const date = new Date(item.acf.date);

  console.log("ITEM", item);

  //const 

  return (
    <StyledBlock className="card">

      <Card.Header>

        <Fecha>
          <b>{item.acf.year}</b>
        </Fecha>

        <Link link={item.acf.source}>
          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>

      </Card.Header>

      <div>

        <Card.Img variant="top" src={item.acf.image} />

        <Card.Body>

          {/* <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} /> */}

          {item.acf.what && (
            <Card.Text dangerouslySetInnerHTML={{ __html: item.acf.what }} />
          )}

          {item.acf.why && (
            <div dangerouslySetInnerHTML={{ __html: item.acf.why }} />
          )}

          <Link link={item.acf.who_link}>
            <div dangerouslySetInnerHTML={{ __html: item.acf.who }} />
          </Link>

          {item.acf.tit_bits && (
            <div dangerouslySetInnerHTML={{ __html: item.acf.tit_bits }} />
          )}

          {item.acf.further_info && (
            <div dangerouslySetInnerHTML={{ __html: item.acf.further_info }} />
          )}

        </Card.Body>

      </div>

      

    </StyledBlock>
  );
};

export default connect(TemporalEvent);

const StyledBlock = styled.article`
  margin: 1rem;

  .card-img-top {
    height: 100%;
    width: 100%;
    object-fit: cover;
    max-width: 40%;
  }
`;

const Fecha = styled.div`
  margin: -12px auto 12px;
  padding: 3px 9px;
  background: rgba(12, 17, 43, 0.9);
  color: white;
  font-size: 0.9rem;
`;

const Title = styled.h2`
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  max-width: 300px;
`;


