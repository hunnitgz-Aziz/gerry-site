import React from "react"
import styled from "styled-components"

import Image from "../images/patricia.png"

const OverviewContainer = styled.div`
  background-color: #fff;
  padding: 1.5rem 0;
`

const Wrapper = styled.div`
  overflow: auto;
`

const Title = styled.h3`
  margin: 0 auto;
  padding: 1.5rem 0;
`

const ProfileContainer = styled.div`
  margin-bottom: 1.5rem;
  @media (min-width: 1024px) {
    width: 50%;
    display: inline-block;
    float: left;
  }
`

const ProfileContent = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`

const Avatar = styled.img`
  margin: 0;
  padding-right: 1rem;
`

const AvatarInfo = styled.div``

const AvatarName = styled.h5`
  margin: 0;
`

const AvatarPosition = styled.p`
  margin: 0;
`

const CompanyOverview = styled.div`
  @media (min-width: 1024px) {
    width: 50%;
    display: inline-block;
    float: left;
  }
`

const CompanyTitle = styled.h4`
  margin-top: 0;
`

const CompanyDescription = styled.p``

const Overview = () => (
  <OverviewContainer>
    <Title>Overview</Title>
    <Wrapper>
      <ProfileContainer>
        <ProfileContent>
          <Avatar src={Image} />
          <AvatarInfo>
            <AvatarName>Patricia Finkelberg</AvatarName>
            <AvatarPosition>Executive Director</AvatarPosition>
          </AvatarInfo>
        </ProfileContent>
      </ProfileContainer>
      <CompanyOverview>
        <CompanyTitle>
          A Vibrant Lifestyle–Independent Living and Assisted Living.
        </CompanyTitle>
        <CompanyDescription>
          Brandywine Living at Huntington Terrace provides beautiful suites
          designed with comfort, privacy and safety in mind. The grounds are
          beautifully landscaped and residents take advantage of the magnificent
          scenery in the spring and fall. Huntington Terrace is an extraordinary
          senior living community offering two distinct options: assisted living
          and independent living; all on one beautiful 12-acre campus. Whether
          it is the resort-like setting of independent living, the elegant,
          distinguished atmosphere of assisted living, or our state-of-the-art
          Reflections memory care program, Huntington Terrace is designed to
          have something for everyone. Whether it’s our extraordinary assisted
          living or our care-free independent apartments, our residents have
          exciting, educational and, at times, adventurous activities that can
          rejuvenate the spirit and enhance the quality of their lives.
        </CompanyDescription>
      </CompanyOverview>
    </Wrapper>
  </OverviewContainer>
)

export default Overview
