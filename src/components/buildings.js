import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Card from "./card"

const BuildingContainer = styled.div`
  border-top: 1px solid #f2f2f2;
  padding-top: 1rem;
`

const Wrapper = styled.div`
  padding: 1.5rem 0;
`

const Title = styled.h3`
  margin-top: 0;
`

const ViewMoreButton = styled.button`
  background-color: transparent;
  outline: 0;
  border: none;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
`

const Add = styled.span``

const Row = styled.div``

function BuildingInfo() {
  const [cards, setCards] = useState([
    {
      title: "Facts",
      info_a: "244 Units",
      info_b: "66 Stories",
      info_c: "4 Floors",
    },
    {
      title: "District",
      info_a: "Community District 101",
      info_b: "City Council District 1",
      info_c: "Police Precinct",
    },
    {
      title: "Floorplans",
      info_a: "77 Floorplans Available",
      info_b: "-",
      info_c: "-",
    },
  ])

  const addBuilding = () => {
    setCards([
      ...cards,
      {
        title: `New Fact ${cards.length}`,
        info_a: Math.floor(Math.random() * 200) + 1 + " Units",
        info_b: Math.floor(Math.random() * 20) + 1 + " Stories",
        info_c: Math.floor(Math.random() * 10) + 1 + " Floors",
      },
    ])
  }

  return (
    <BuildingContainer>
      <Title>Building Facts</Title>
      <Wrapper>
        <Row>
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              info_a={card.info_a}
              info_b={card.info_b}
              info_c={card.info_c}
            />
          ))}
        </Row>
      </Wrapper>
      <ViewMoreButton onClick={addBuilding}>
        View More<Add className="material-icons">add</Add>
      </ViewMoreButton>
    </BuildingContainer>
  )
}

export default BuildingInfo
