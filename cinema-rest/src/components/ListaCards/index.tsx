import React from "react";

import { CardSection, CardTitulo, AddButton, Star, Text, Editicon, Deleteicon,  CardData, CardText, CardDiv } from "./styles";


function ListaCards({ url, title, addItem }: any) {
  return (
    <CardSection>
            <img src={require("../../assets/img/filme.png")} alt="Filme exemplo" />
        <CardDiv>
          <CardTitulo>
            Nome do Filme
          </CardTitulo>
          <CardData>
            2009
          </CardData>
          <CardText>
            <strong>Diretor:</strong>  Lorem ipsum
          </CardText>  
          <CardText>
            <strong>Linguagem:</strong> Lorem ipsum
          </CardText> 
          <CardText>
            <strong>Classificação indicativa:</strong> 18
          </CardText> 
          <CardText>
            <strong>Descrição:</strong> Lorem m Lorem ipsum Lorem Lorem m Lorem ipsum Lorem Lorem m Lorem ipsum LoremLorem m Lorem ipsum LoremLorem m Lorem ipsum Lorem Lorem m Lorem ipsum Lorem Lorem m Lorem ipsum LoremLorem m Lorem ipsum LoremLorem m Lorem ipsum Lorem Lorem m Lorem ipsum Lorem Lorem m Lorem ipsum LoremLorem m Lorem ipsum Lorem
          </CardText>             
          
        </CardDiv>
          
          <Star>
            <img src={require("../../assets/img/star-icon.png")} alt="icon star" />
          </Star>

          <Text>
            4.8
          </Text>

          <Editicon>
            <img src={require("../../assets/img/delete-icon.png")} alt="edit star" />
          </Editicon>

          <Deleteicon>
            <img src={require("../../assets/img/edit-icon.png")} alt="edit star" />
          </Deleteicon>
          

      {/* <CardImg image={url} /> */}
        <AddButton onClick={addItem}>
          {/* <IconAdd /> */}
        </AddButton>
    </CardSection>
  );
}

export default ListaCards;
