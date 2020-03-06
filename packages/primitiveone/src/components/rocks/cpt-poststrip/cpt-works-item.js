import React from "react";
import { connect, styled } from "frontity";

import Link from "../../pebbles/link";
import ACFMedia from "../../timeline/cpt-media";
import { Col, Card } from 'react-bootstrap';


const Works = ({ state, item }) => {

  const acfFields = item.acf;

  //console.log("@cpt-works-item: item", item );

  return (
    <Col>

      <StyledLink link={acfFields.link}>

        <StyledCard>

          <StyledImage className="card-img-top" id={item.id} />

          <Title>{acfFields.project_type}</Title>

          <Card.Body className="pt-3">

            <Project>{acfFields.project}</Project>

            <Meta>{acfFields.services}</Meta>

          </Card.Body>

        </StyledCard>

      </StyledLink>

    </Col>
  );
};

export default connect(Works);

const StyledCard = styled(Card)`
  margin-bottom: 1rem;
  border: none;
  border-radius: 0;
  text-align: center;
  box-shadow: 0 0 0 2px rgba(12, 17, 43, 0.1);
}`

const StyledLink = styled(Link)`
  color: rgba(12, 17, 43, 0.9);
  text-decoration: none;
`;

const StyledImage = styled(ACFMedia)`
  display: block;
  object-fit: cover;
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
  height: 3rem;
  font-family: 'Hepta Slab', Georgia, serif; }
`;

const Meta = styled.p`
  font-size: .9rem;
  font-family: courier;
  letter-spacing: 1px;
  color: rgba(12, 17, 43, 0.6);
`;


