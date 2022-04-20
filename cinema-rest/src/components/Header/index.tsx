import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import {
  HeaderSection,
  HeaderList,
  HeaderItem,
  Styles,
  HeaderParagraph,
} from "./styles";

function Header() {
  return (
    <HeaderSection>
      <Logo />
      <HeaderList>
        <Link style={Styles.link} to="/">
          <HeaderItem>
            <HeaderParagraph>HOME</HeaderParagraph>
          </HeaderItem>
        </Link>
        <Link style={Styles.link} to="/list">
          <HeaderItem>
            <HeaderParagraph>LISTA</HeaderParagraph>
          </HeaderItem>
        </Link>
        <Link style={Styles.link} to="/contact">
          <HeaderItem>
            <HeaderParagraph>CONTATO</HeaderParagraph>
          </HeaderItem>
        </Link>
      </HeaderList>
    </HeaderSection>
  );
}

export default Header;
