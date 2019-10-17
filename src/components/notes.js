import React from "react"
import styled from "styled-components"
import Image from "../images/rosemary.png"
import { Link } from "gatsby"

const NotesContainer = styled.div`
  border-top: 1px solid #f2f2f2;
  padding-top: 1rem;
`

const Title = styled.h3`
  margin-top: 0;
`

const Wrapper = styled.div`
  border-radius: 10px;
  padding: 1.5rem;
  position: relative;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.3);

  @media (min-width: 1024px) {
    display: flex;
  }
`

const AvatarBlock = styled.div``

const Avatar = styled.img`
  display: block;
  max-width: 96px;
  margin: 0 auto;
`

const DateBlock = styled.p`
  font-size: 12px;
  color: #fff;
  font-style: italic;
  text-align: center;
`

const QuoteBlock = styled.div`
  padding: 0 1.5rem;
`

const Quote = styled.div`
  font-size: 28px;
  font-style: italic;
  color: #fff;
  margin-bottom: 1rem;
`

const InlineLink = styled.a`
  color: #fff;
  font-weight: 700;
  text-decoration: underline;
`

const ReplyButton = styled(props => <Link {...props} />)`
  text-decoration: none;
  display: flex;
  align-content: center;
  align-items: center;
`

const Arrow = styled.span`
  margin-left: 0.2rem;
  transition: all ease-in-out 0.2s;
`

let today = new Date()

const ExpandButton = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  transform: rotate(-180deg);
`

const Notes = () => (
  <NotesContainer>
    <Title>Notes from Rosemary</Title>
    <Wrapper className="primary-bg">
      <ExpandButton className="material-icons secondary-text">
        open_in_new
      </ExpandButton>
      <AvatarBlock>
        <Avatar src={Image} />
        <DateBlock>
          {today.getMonth() +
            1 +
            "." +
            today.getDate() +
            "." +
            today.getFullYear()}
        </DateBlock>
      </AvatarBlock>
      <QuoteBlock>
        <Quote>
          “Gloria, I think Brandywine is the ideal facility for your mom. Their
          memory care is top notch and it’s a reasonable commute (30 mins or
          less) for both you and your brother. I’ve prepared a shortlist of
          points/questions for you to assess when you’re ready to schedule your
          tour. You can view it <InlineLink href="/">here.</InlineLink>
        </Quote>
        <Quote>
          Feel free to leave me feedback here or via our text conversation."
        </Quote>
        <ReplyButton className="secondary-text" to="/">
          Reply
          <Arrow className="material-icons secondary-text">arrow_forward</Arrow>
        </ReplyButton>
      </QuoteBlock>
    </Wrapper>
  </NotesContainer>
)

export default Notes
