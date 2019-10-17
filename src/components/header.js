import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import SiteLogo from "../images/site-logo.png"

const HeaderContainer = styled.header``

const LogoContainer = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
`

const Logo = styled.img`
  max-width: 92px;
  margin: 0;
  display: block;
`

const LogoLink = styled(props => <Link {...props} />)`
  display: inline-block;
  padding: 1rem;
  padding-top: 1.2rem;
`

const NavigatorContainer = styled.div`
  background-color: #fff;
  padding: 0.5rem 1rem;
`

const Navigator = styled.button`
  background-color: #fff;
  border: none;
  outline: 0;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`

const BackArrow = styled.span`
  margin-right: 0.5rem;
`

const ButtonText = styled.span`
  font-weight: 700;
`

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <LogoLink to="/">
        <Logo src={SiteLogo} />
      </LogoLink>
    </LogoContainer>
    <NavigatorContainer>
      <Navigator>
        <BackArrow className="material-icons">arrow_back</BackArrow>
        <ButtonText>Return to Results</ButtonText>
      </Navigator>
    </NavigatorContainer>
  </HeaderContainer>
)

export default Header
