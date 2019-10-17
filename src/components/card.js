import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    display: inline-block;
    margin: 0 0.2rem 1rem;
    width: 32.3333%;
  }
`

const Title = styled.p``

const InfoA = styled.p``

const InfoB = styled.p``

const InfoC = styled.p``

const Card = props => (
  <Container>
    <Title>{props.title}</Title>
    <InfoA>{props.info_a}</InfoA>
    <InfoB>{props.info_b}</InfoB>
    <InfoC>{props.info_c}</InfoC>
  </Container>
)

export default Card
