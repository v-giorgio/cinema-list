import React from "react";

import {
  CardSection,
  CardTitulo,
  Text,
  Editicon,
  Deleteicon,
  CardData,
  CardText,
  CardDiv,
  CardTag,
  Rating,
  Image,
} from "./styles";

function ListaCards({
  url,
  alt,
  movieTitle,
  movieYear,
  movieDirector,
  movieLanguage,
  movieGenre,
  movieAge,
  movieDescription,
  movieRating,
  movieDuration,
  movieId,
  handleEdit,
  handleDelete,
}: any) {
  return (
    <CardSection>
      <Image src={url} alt={alt} />
      <CardDiv>
        <CardTitulo>{movieTitle}</CardTitulo>
        <CardData>{movieYear}</CardData>
        <CardData>{movieDuration} min</CardData>
        <CardText>
          <CardTag>Diretor:</CardTag> {movieDirector}
        </CardText>
        <CardText>
          <CardTag>Linguagem:</CardTag> {movieLanguage}
        </CardText>
        <CardText>
          <CardTag>Gênero:</CardTag> {movieGenre}
        </CardText>
        <CardText>
          <CardTag>Classificação indicativa:</CardTag> {movieAge}
        </CardText>
        <CardText>
          <CardTag>Descrição:</CardTag> {movieDescription}
        </CardText>
      </CardDiv>

      <Rating>
        <Text>{movieRating}</Text>
        <img src={require("../../assets/img/star-icon.png")} alt="icon star" />
      </Rating>

      <Editicon onClick={handleEdit}>
        <img
          src={require("../../assets/img/delete-icon.png")}
          alt="edit movie"
        />
      </Editicon>

      <Deleteicon onClick={handleDelete}>
        <img
          src={require("../../assets/img/edit-icon.png")}
          alt="delete movie"
        />
      </Deleteicon>
    </CardSection>
  );
}

export default ListaCards;
