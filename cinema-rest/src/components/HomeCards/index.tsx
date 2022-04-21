import React from "react";

import { CardSection, CardText, CardImg, CardInf, AddButton } from "./styles";

import { ReactComponent as IconAdd } from "../../assets/img/add-icon.svg";

function HomeCards({ url, title, addItem }: any) {
  return (
    <CardSection>
      <CardImg image={url} />
      <CardInf>
        <CardText>{title}</CardText>
        <AddButton onClick={addItem}>
          <IconAdd />
        </AddButton>
      </CardInf>
    </CardSection>
  );
}

export default HomeCards;
