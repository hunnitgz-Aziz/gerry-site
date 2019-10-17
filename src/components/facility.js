import React from "react"
import styled from "styled-components"

const FacilityContainer = styled.div`
  padding: 1rem 0 2.5rem;
`

const Wrapper = styled.div`
  overflow: auto;
`

const HomeOverview = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    width: 50%;
    display: inline-block;
    float: left;
  }
`

const HomeName = styled.h4`
  margin-top: 0;
`

const HomeAddress = styled.p``

const HomeDetails = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    width: 50%;
    display: inline-block;
    float: left;
  }
`

const Button = styled.button`
  border: none;
  font-weight: 700;
  width: 200px;
  border-radius: 1.8125rem;
  padding: 0.875rem 1.1875rem 1rem;
  outline: 0;
  color: #fff;
  font-size: 14px;
  margin-right: 0.8rem;
  cursor: pointer;
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`

const ProgressBlock = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`

const Svg = styled.svg`
  transform: rotate(180deg);
`

const Circle = styled.circle``

const StatNumber = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 36px;
`

const Caption = styled.p`
  margin-left: 1rem;
`

const MonthlyBill = styled.p``

const Facility = () => (
  <FacilityContainer>
    <Wrapper>
      <HomeOverview>
        <HomeName>Brandywine Living @ Huntington Terrace</HomeName>
        <HomeAddress>70 Pinelawn Road, Melville, NY 11747</HomeAddress>
        <Button className="secondary-bg">Book A Tour</Button>
        <Button className="primary-bg">Add To Favorites</Button>
      </HomeOverview>
      <HomeDetails>
        <Rating>
          <ProgressBlock>
            <Svg width="120" height="120" viewBox="0 0 120 120">
              <Circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="12"
              ></Circle>
              <Circle
                className="progress"
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#002b44"
              ></Circle>
            </Svg>
            <StatNumber className="primary-text">85</StatNumber>
          </ProgressBlock>
          <Caption>(#1 for you)</Caption>
        </Rating>
        <MonthlyBill>$6,000-$7,000 per month</MonthlyBill>
      </HomeDetails>
    </Wrapper>
  </FacilityContainer>
)

export default Facility
