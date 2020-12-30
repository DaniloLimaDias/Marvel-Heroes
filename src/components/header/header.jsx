import React from "react";
import styled from "styled-components";

import Search from "./components/search/search"
import Logo from "./components/logo/logo"


const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000C24;
  margin-bottom: 30px;
`

export default function header() {
  return (
    <Header>
        <Logo/>
        <Search/>
    </Header>
  );
}
