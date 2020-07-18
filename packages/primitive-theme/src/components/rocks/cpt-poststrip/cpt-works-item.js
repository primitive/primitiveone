import React from "react";
import { connect, styled } from "frontity";

import Link from "../../pebbles/link";
import ACFMedia from "../../timeline/cpt-media";
import { Col, Card } from 'react-bootstrap';


const Works = ({ item }) => {

  const acfFields = item.acf;
  //console.log("@cpt-works-item: item", item );

  return (
    <Col sm={12} md={4}>

      <StyledCard>

        <StyledLink link={acfFields.link}>
          <StyledImage className="card-img-top" id={item.id} />
        </StyledLink>

        <Title>{acfFields.project_type}</Title>

        <Card.Body className="pt-3">

          <Project>{acfFields.project}</Project>

          <Meta>{acfFields.services}</Meta>

        </Card.Body>

      </StyledCard>

    </Col>
  );
};

export default Works;

const StyledCard = styled(Card)`
  margin-bottom: 2rem;
  border: none;
  text-align: center;
  box-shadow: rgb(239, 239, 239) 3px 3px 9px 6px;

  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImage = styled(ACFMedia)`
  display: block;
  object-fit: cover;
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px);
  overflow: hidden;
`;

const Title = styled.h4`
  margin: 1rem .5rem 0;
  padding: 1rem .5rem 0;
  border-top: 2px solid #019573;
  font-size: 1rem;
  font-weight: bold;
  font-family: courier;
  text-align: center;
  color: #015642;
`;

const Project = styled.h5`
  min-height: 3rem;
  font-family: 'Hepta Slab', Georgia, serif;
`;

const Meta = styled.p`
  font-size: .9rem;
  font-family: courier;
  letter-spacing: 1px;
  color: rgba(12, 17, 43, 0.6);
`;
