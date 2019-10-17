import React from "react"
import styled from "styled-components"
import FooterLogo from "../images/site-logo-white.png"

const FooterContainer = styled.footer`
  height: 12rem;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

const Logo = styled.img`
  margin: 0;
  max-width: 92px;
`

const Copyright = styled.p`
  color: #fff;
  margin: 0;
`

const Footer = () => (
  <FooterContainer className="primary-bg">
    <Wrapper>
      <Logo src={FooterLogo} />
      <Copyright>© {new Date().getFullYear()}</Copyright>
    </Wrapper>
  </FooterContainer>
)

export default Footer
