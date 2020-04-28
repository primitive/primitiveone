import React from "react";
import { connect, styled } from "frontity";
import Link from "../pebbles/link";

//import ACFImage from "../cpt-media";
import Image from "@frontity/components/image";
import { Row, Col, Card } from 'react-bootstrap';


const TemporalEvent = ({ state, item }) => {

  //console.log("@cpt-item: item", item);
  
  return (
    <StyledBlock className="card">

      <Card.Header>

        <EventDate>
          <b>{item.acf.year}</b>
        </EventDate>

        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />

      </Card.Header>

      <Row>

        <Col>
          {item.acf.image && (
            <Link link={item.acf.source}>
              <Card.Img variant="top" src={item.acf.image} />
            </Link>
          )}
        </Col>

        <Col>
          <Card.Body>

            {item.excerpt && (
              <div>
                <div>Excerpt:</div>
                <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
              </div>
            )}

            {item.acf.info && (
              <div>
                <div>What:</div>
                <div dangerouslySetInnerHTML={{ __html: item.acf.info }} />
              </div>
            )}

            {item.acf.significance && (
              <div>
                <div>Why:</div>
                <div dangerouslySetInnerHTML={{ __html: item.acf.significance }} />
              </div>
            )}

            {item.acf.who && (
              <div>
                <div>Kudos to:</div>
                <Link link={item.acf.who_link}>
                  <div dangerouslySetInnerHTML={{ __html: item.acf.who }} />
                </Link>
              </div>
            )}


            {item.acf.tit_bits && (
              <div>
                <div>Fun facts:</div>
                <div dangerouslySetInnerHTML={{ __html: item.acf.tit_bits }} />
              </div>
            )}

            {item.acf.further_info && (
              <Link link={item.acf.further_info}>
                A
                </Link>
            )}

          </Card.Body>
        </Col>
      </Row>

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
  }

`;

const EventDate = styled.div`
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


