import React from "react"
import styled from "styled-components"
import BannerImage from "../images/lobby.jpg"

const BannerContainer = styled.div`
  outline: 0;
  width: auto;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding: 0 !important;
`

const Wrapper = styled.div`
  height: 50vh;
  margin-bottom: 2rem;
`

const Image = styled.img`
  margin-bottom: 0;
  height: 50vh;
  object-fit: cover;
`

const Banner = () => (
  <BannerContainer>
    <Wrapper>
      <Image src={BannerImage}></Image>
    </Wrapper>
  </BannerContainer>
)

export default Banner
