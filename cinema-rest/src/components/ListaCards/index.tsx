import React from "react";

import { CardSection, CardTitulo, AddButton, CardData, CardText, CardDiv } from "./styles";


function ListaCards({ url, title, addItem }: any) {
  return (
    <CardSection>
        <div>
            <img src={require("../../assets/img/filme.png")} alt="Filme exemplo" />
        </div>
        <CardDiv>
          <CardTitulo>
            Nome do Filme
              <img src={require("../../assets/img/star-icon.png")} alt="icon star" />
          </CardTitulo>
          <CardData>
            2009
          </CardData>
          <CardText>
            Diretor:  Lorem ipsum
          </CardText>  
          <CardText>
            Linguagem: Lorem ipsum
          </CardText> 
          <CardText>
            Classificação indicativa: R
          </CardText> 
          <CardText>
            Descrição: Lorem ipsum Lorem ipsumLorem
          </CardText>             
        </CardDiv>

      {/* <CardImg image={url} /> */}
        <AddButton onClick={addItem}>
          {/* <IconAdd /> */}
        </AddButton>
    </CardSection>
  );
}

export default ListaCards;
