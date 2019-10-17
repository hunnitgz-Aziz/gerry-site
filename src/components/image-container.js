import React, { useState } from "react"
import styled from "styled-components"
import House from "../images/house.jpg"

const ImageContainer = styled.div`
  border-top: 1px solid #f2f2f2;
  padding: 1rem 0;
`

const Wrapper = styled.div`
  position: relative;
`

const LargeImage = styled.img`
  margin-bottom: 0;
`

const ViewTile = styled.span`
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #fff;
  height: 48px;
  width: 48px;
  border-radius: 200px;
  line-height: 48px;
  text-align: center;
`

const Title = styled.h3`
  margin-top: 0;
`

const TileView = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px 10px;
`

const SmallImage = styled.img`
  margin-bottom: 0;
`

function ImageViewer() {
  const [state, setState] = useState(true)

  function toggle() {
    state ? setState(false) : setState(true)
  }

  return (
    <ImageContainer>
      <Title>Images</Title>
      <Wrapper>
        <ViewTile onClick={toggle} className="material-icons">
          {state ? `view_module` : `filter_hdr`}
        </ViewTile>
        {state ? (
          <LargeImage src={House} />
        ) : (
          <TileView>
            <SmallImage src={House} />
            <SmallImage src={House} />
            <SmallImage src={House} />
            <SmallImage src={House} />
            <SmallImage src={House} />
            <SmallImage src={House} />
          </TileView>
        )}
      </Wrapper>
    </ImageContainer>
  )
}

export default ImageViewer
