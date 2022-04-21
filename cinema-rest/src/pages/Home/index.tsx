import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  HomeContainer,
  Input,
  InputArea,
  ErrorSpan,
  SearchIcon,
} from "./styles";
import HomeCards from "../../components/HomeCards";

import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";

import api from "../../services/api";

interface FormData {
  title: string;
}

interface MovieData {
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

function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [movieInfo, setMovieInfo] = useState<MovieData>();
  const [checked, setChecked] = useState<boolean>(false);
  const [alert, setAlert] = useState<any>({
    state: false,
    status: "",
    message: "",
  });

  /* called upon the form submit - api requests */
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=c6f76f28&t=${data.title}`
      );
      const movie = await response.json();

      setMovieInfo({
        title: movie.Title,
        director: movie.Director,
        language: movie.Language,
        genre: movie.Genre,
        release_year: movie.Year,
        rating_avg: movie.imdbRating,
        description: movie.Plot,
        duration: parseInt(movie.Runtime.split(" ")),
        poster_url: movie.Poster,
        min_age: movie.Rated,
      });

      setTimeout(() => {
        setChecked(true);
      }, 1000);
    } catch (error) {
      // console.log(error);
      setAlert({
        state: true,
        status: "error",
        message: "Filme não encontrado.",
      });
    }
  };

  const handleAddItem = async () => {
    setChecked(false);
    await api
      .post("/movies", movieInfo)
      .then((res: any) => {
        // console.log(res.data);
        setAlert({
          state: true,
          status: "success",
          message: "Filme cadastrado com sucesso!",
        });
      })
      .catch((err: any) => {
        setAlert({
          state: true,
          status: "error",
          message: err.response.data.message,
        });
      });
  };

  useEffect(() => {
    console.log(movieInfo);
  }, [movieInfo]);

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
      <Title title="Adicione seu filme favorito na lista" />
      <InputArea>
        <Controller
          name="title"
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          render={({ field }) => (
            <Input {...field} placeholder="Nome do filme" type="text" />
          )}
        />
        <SearchIcon
          onClick={handleSubmit(onSubmit)}
          src={require("../../assets/img/search-icon.png")}
          alt="Search button"
        />
      </InputArea>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {errors?.title && <ErrorSpan>{errors?.title.message}</ErrorSpan>}
      </div>
      {checked && (
        <HomeCards
          url={movieInfo?.poster_url}
          title={movieInfo?.title}
          addItem={handleAddItem}
        />
      )}
    </HomeContainer>
  );
}

export default Home;
