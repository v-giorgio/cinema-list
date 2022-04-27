import React, { useState, useEffect } from "react";
import {
  ErrorSpan,
  HomeContainer,
  Input,
  InputArea,
  InputLabel,
  InputTextArea,
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
    reset,
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
          console.log(res.data);
          setMovieInfo({
            id: id,
            title: res.data.title,
            director: res.data.director,
            language: res.data.language,
            genre: res.data.genre,
            release_year: res.data.release_year,
            rating_avg: res.data.rating_avg,
            description: res.data.description,
            duration: res.data.duration,
            poster_url: res.data.poster_url,
            min_age: res.data.min_age,
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
        }, 2000);
      })
      .catch((err: any) => {
        setAlert({
          state: true,
          status: "error",
          message: "Não foi possível atualizar o filme.",
        });
      });
  };

  useEffect(() => {
    reset({
      id: id,
      title: movieInfo?.title,
      director: movieInfo?.director,
      language: movieInfo?.language,
      genre: movieInfo?.genre,
      release_year: movieInfo?.release_year,
      rating_avg: movieInfo?.rating_avg,
      description: movieInfo?.description,
      duration: movieInfo?.duration,
      poster_url: movieInfo?.poster_url,
      min_age: movieInfo?.min_age,
    });
  }, [movieInfo]);

  return (
    <HomeContainer>
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
          render={({ field }) => (
            <Input
              defaultValue={movieInfo?.title}
              {...field}
              placeholder="Nome do filme"
              type="text"
            />
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
              placeholder="2005"
              type="number"
              style={{ width: "10%", textAlign: "center" }}
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

      {/* Movie Genre */}
      <InputArea>
        <InputLabel>Gênero</InputLabel>
        <Controller
          name="genre"
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          defaultValue={movieInfo?.genre}
          render={({ field }) => (
            <Input {...field} placeholder="Drama" type="text" />
          )}
        />
      </InputArea>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {errors?.genre && <ErrorSpan>{errors?.genre.message}</ErrorSpan>}
      </div>

      {/* Movie Min age */}
      <InputArea>
        <InputLabel>Classificação indicativa</InputLabel>
        <Controller
          name="min_age"
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          defaultValue={movieInfo?.min_age}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="L"
              type="text"
              style={{ width: "10%", textAlign: "center" }}
            />
          )}
        />
      </InputArea>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {errors?.min_age && <ErrorSpan>{errors?.min_age.message}</ErrorSpan>}
      </div>

      {/* Movie Rating average */}
      <InputArea>
        <InputLabel>Média de avaliações</InputLabel>
        <Controller
          name="rating_avg"
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          defaultValue={movieInfo?.rating_avg}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="8.6"
              type="text"
              style={{ width: "10%", textAlign: "center" }}
            />
          )}
        />
      </InputArea>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {errors?.rating_avg && (
          <ErrorSpan>{errors?.rating_avg.message}</ErrorSpan>
        )}
      </div>

      {/* Movie Description */}
      <InputArea>
        <InputLabel>Descrição</InputLabel>
        <Controller
          name="description"
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          defaultValue={movieInfo?.description}
          render={({ field }) => (
            <InputTextArea
              {...field}
              placeholder="The movie is about ..."
              cols={40}
              rows={20}
            />
          )}
        />
      </InputArea>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {errors?.description && (
          <ErrorSpan>{errors?.description.message}</ErrorSpan>
        )}
      </div>

      {/* Movie Poster URL */}
      <InputArea>
        <InputLabel>Link do Poster</InputLabel>
        <Controller
          name="poster_url"
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          defaultValue={movieInfo?.poster_url}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="https://image.com/image.jpg"
              type="text"
            />
          )}
        />
      </InputArea>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {errors?.poster_url && (
          <ErrorSpan>{errors?.poster_url.message}</ErrorSpan>
        )}
      </div>

      {alert.state && (
        <Alert style={{ marginTop: 10 }} status={alert.status}>
          <AlertIcon />
          <AlertTitle mr={3}>{alert.message}</AlertTitle>
          <CloseButton
            onClick={() => setAlert({ state: false })}
            position="absolute"
            right="8px"
            bottom="8px"
          />
        </Alert>
      )}
      <Button title="Editar" handleForm={handleSubmit(onSubmit)} />
    </HomeContainer>
  );
}

export default FilmList;
