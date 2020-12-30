import React from "react"
import Header from '../../components/header/header'
import CardAbout from '../../components/card-about/card-about'
import styled from "styled-components";

const CharactersContaienr = styled.main `
max-width:1200px;
margin:0 auto;
`
export default function AboutCharacters() {

  return(
    <>
      <Header/>
    <CharactersContaienr>
      <CardAbout/>
    </CharactersContaienr>
    </>
  ) 

}
