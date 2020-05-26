import React from "react";
import { connect, styled } from "frontity";
import Link from "../pebbles/link";

//import ACFImage from "../cpt-media";
import Image from "@frontity/components/image";
import { Row, Col, Card } from 'react-bootstrap';


const TemporalEvent = ({ state, item, layer, headerBg, headerColor }) => {

  //console.log("@cpt-item: colors", state.theme.colors);

  return (
    <StyledBlock
      className="card"
      layer={layer}
      headerBg={headerBg}
    >

      <Card.Header>

        <EventDate>
          <b>{item.acf.year}</b>
        </EventDate>

        <Title
          headerColor={headerColor}
          dangerouslySetInnerHTML={{ __html: item.title.rendered }}
        />

      </Card.Header>

      <Row>

        <Col>
          {item.acf.image && (
            <Link link={item.acf.source}>
              <Card.Img src={item.acf.image} />
            </Link>
          )}
        </Col>

        <Col>
          <Card.Body>

            {item.excerpt && (
              <h3 dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
            )}

            {item.acf.info && (

              <Row className="form-group">
                <label>What:</label>
                <Col dangerouslySetInnerHTML={{ __html: item.acf.info }} />
              </Row>
            )}

            {item.acf.significance && (
              <div>
                <div>Why:</div>
                <div dangerouslySetInnerHTML={{ __html: item.acf.significance }} />
              </div>
            )}

            {item.acf.who && (
              <Row className="form-group">
                <Col>
                <label>Accredited to:</label>
                </Col>
                <Col>
                <Link link={item.acf.who_link}>
                  <p dangerouslySetInnerHTML={{ __html: item.acf.who }} />
                </Link>
                </Col>
              </Row>
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

/*
// sk-dev: test alternate styling
// https://emotion.sh/docs/styled
const StyledBlock = styled.article({
  margin: '1rem',
  minWidth: '180px'
  },
  props => ({ zIndex: props.layer })
);
*/

//const StyledBlock = props => styled.article`

const StyledBlock = styled.article`
  margin: 1rem;
  min-width: 180px;
  z-index: ${ props => props.layer};
  color: ${ props => props.headerBg};
  border: 2px solid white;
  border-radius: .6rem;
  box-shadow: 0 8px 8px -12px rgba(0, 0, 0, 0.3), 0 15px 18px -6px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  
  .card-header {
    background: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.738) 19%, rgba(0, 0, 0, 0.541) 34%, rgba(0, 0, 0, 0.382) 47%, rgba(0, 0, 0, 0.278) 56.5%, rgba(0, 0, 0, 0.194) 65%, rgba(0, 0, 0, 0.126) 73%, rgba(0, 0, 0, 0.075) 80.2%, rgba(0, 0, 0, 0.042) 86.1%, rgba(0, 0, 0, 0.021) 91%, rgba(0, 0, 0, 0.008) 95.2%, rgba(0, 0, 0, 0.002) 98.2%, transparent 100%),
    ${ props => props.headerBg};
  }

  .card-img {
    height: 100%;
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 0;
  }

`;

const EventDate = styled.div`
  margin: -.8rem auto 1.5rem;
  padding: 0 1rem;
  background: #d0f0dd;
  border-radius: 0 0 .3rem .3rem;
  color: white;
  font-size: 2rem;
  font-family: 'Slabo 27px';

  box-shadow: 0px 0px 0 #40ff22,
  0px 0px 4px #30ff1f,
  0px 0px 8px #20ff1b,
  0px 0px 16px #10ff18;

  b {
    padding: 1.5rem;
    text-shadow: 1px 1px 0 #ddd;
    background: #d0f0dd;
    border-radius: 50%;

    box-shadow: 0px 0px 0 #40ff22,
    0px 0px 4px #30ff1f,
    0px 0px 8px #20ff1b,
    0px 0px 16px #10ff18;
  }
`;

const Title = styled.h2`
  padding: 1.5rem;
  color: ${ props => props.headerColor};
  text-align: center;
  text-shadow: 1px 1px 0 black;
`;

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  max-width: 300px;
`;


