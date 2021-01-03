import React from "react";
import styled from "styled-components";

import imgSearch from "../../../../assets/icon/search.svg";

const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 5px;
    width: 25px;
  }
  input {
    width: 200px;
    height: 35px;
    border-radius: 10px;
    border: none;
    padding-left: 10px;
    color: #fff;
    background: #3e4245;
    outline: none;
    &::placeholder {
      color: #fff;
    }
  }
`;

export default function search(props) {
  const { onChange, value } = props;

  return (
    <Search>
      <div>
        <img src={imgSearch} alt="Lupa" />
      </div>
      <input
        type="text"
        placeholder="O que você procura?"
        onChange={onChange}
        value={value}
      />
    </Search>
  );
}
