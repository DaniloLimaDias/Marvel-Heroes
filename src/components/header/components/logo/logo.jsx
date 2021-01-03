import React from "react";
import styled from "styled-components";

import imgLogo from "../../../../assets/img/marvel-logo.svg";


const Logo = styled.img`
  width: 130px;
  padding: 5px 0;
`

export default function logo() {
  return (
    <Logo src={imgLogo} alt="Logo da Marvel"/>
  );
}
