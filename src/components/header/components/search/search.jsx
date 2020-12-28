import React from "react";
import styled from "styled-components";

import imgSearch from "../../../../assets/icon/search.svg";

const Search = styled.div`
  display: flex;
  aling-items: center;
  justify-content: center;
  position: absolute;
  right:0;
  margin-right:20px;
  img {
    margin-right:5px;
    width: 25px;
  }
  input{
    height:35px;
    border-radius:10px;
    border:none;
    padding-left:10px;
    color:#fff;
    background:#3E4245;
    outline:none;
    &::Placeholder {
      color:#fff;
    }    
  }
`

export default function search() {
  return (
    <Search>
      <img src={imgSearch} alt="Lupa" />
      <input type="text" placeholder="O que você procura?" />
    </Search>
  );
}
