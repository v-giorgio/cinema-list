import React, { useState, useEffect } from "react";
import {
  ErrorSpan,
  HomeContainer,
  Input,
  InputArea,
  InputLabel,
} from "./styles";
import Title from "../../components/Title";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";

import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";

interface FormData {
  id: any;
  title: string;
  director: string;
  language: string;
  genre: string;
  release_year: string;
  rating_avg: number;
  description: string;
  duration: number;
  poster_url: string;
  min_age: string;
}

function FilmList() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [movieInfo, setMovieInfo] = useState<FormData>();

  const [alert, setAlert] = useState<any>({
    state: false,
    status: "",
    message: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // console.log(id);
    const getMovie = async () => {
      await api
        .get(`/movies/${id}`)
        .then(async (res: any) => {
          setMovieInfo({
            id: id,
            title: res.title,
            director: res.director,
            language: res.language,
            genre: res.genre,
            release_year: res.release_year,
            rating_avg: res.rating_avg,
            description: res.description,
            duration: res.duration,
            poster_url: res.poster_url,
            min_age: res.min_age,
          });
        })
        .catch((err: any) => {
          console.log(err);
        });
    };

    getMovie();
  }, [id]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await api
      .put(`/movies/${id}`, data)
      .then((res: any) => {
        setAlert({
          state: true,
          status: "success",
          message: "Filme atualizado com sucesso.",
        });
        setTimeout(() => {
          navigate(`/list`);
        }, 1000);
      })
      .catch((err: any) => {
        // console.log(err);
        setAlert({
          state: true,
          status: "error",
          message: "Não foi possível atualizar o filme.",
        });
      });
  };

  return (
    <HomeContainer>
      {alert.state && (
        <Alert status={alert.status}>
          <AlertIcon />
          <AlertTitle mr={3}>{alert.message}</AlertTitle>
          <CloseButton
            onClick={() => setAlert({ state: false })}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}
      <Title title="Editar filme" />

      {/* Movie title */}
      <InputArea>
        <InputLabel>Nome do filme</InputLabel>
        <Controller
          name="title"
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          defaultValue={movieInfo?.title}
          render={({ field }) => (
            <Input {...field} placeholder="Nome do filme" type="text" />
          )}
        />
      </InputArea>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {errors?.title && <ErrorSpan>{errors?.title.message}</ErrorSpan>}
      </div>

      {/* Movie Release Year */}
      <InputArea>
        <InputLabel>Ano de lançamento</InputLabel>
        <Controller
          name="release_year"
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          defaultValue={movieInfo?.release_year}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Ano de lançamento"
              type="number"
              style={{ width: "20%" }}
            />
          )}
        />
      </InputArea>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {errors?.release_year && (
          <ErrorSpan>{errors?.release_year.message}</ErrorSpan>
        )}
      </div>

      {/* Movie Director */}
      <InputArea>
        <InputLabel>Direção</InputLabel>
        <Controller
          name="director"
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          defaultValue={movieInfo?.director}
          render={({ field }) => (
            <Input {...field} placeholder="Direção" type="text" />
          )}
        />
      </InputArea>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {errors?.director && <ErrorSpan>{errors?.director.message}</ErrorSpan>}
      </div>

      {/* Movie Language */}
      <InputArea>
        <InputLabel>Linguagem</InputLabel>
        <Controller
          name="language"
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          defaultValue={movieInfo?.language}
          render={({ field }) => (
            <Input {...field} placeholder="Inglês" type="text" />
          )}
        />
      </InputArea>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {errors?.language && <ErrorSpan>{errors?.language.message}</ErrorSpan>}
      </div>

      {/**
       * TO DO:
       * - Implementar inputs de Gênero, Classificação Indicativa, Média de avaliações,
       *  Descrição, URL do poster
       * - Preenchimento do formulário
       * - Envio dos dados para atualizar o filme
       */}

      <Button title="Editar" handleForm={onSubmit} />
    </HomeContainer>
  );
}

export default FilmList;
