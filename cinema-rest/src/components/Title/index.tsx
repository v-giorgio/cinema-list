import React from "react";
import { TitleContainer, TitleText } from "./styles";

function Title({ title }: any) {
  return (
    <TitleContainer>
      <TitleText>{title}</TitleText>
    </TitleContainer>
  );
}

export default Title;
