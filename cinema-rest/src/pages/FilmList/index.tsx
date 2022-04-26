import React, { useState, useEffect } from "react";
import {
  BackButton,
  ErrorSpan,
  HomeContainer,
  Input,
  InputArea,
  SearchIcon,
} from "./styles";
import Title from "../../components/Title";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import ListaCards from "../../components/ListaCards";

interface FormData {
  title: string;
}

function FilmList() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();

  const [alert, setAlert] = useState<any>({
    state: false,
    status: "",
    message: "",
  });
  const [movieInfo, setMovieInfo] = useState<any>([]);
  const [ready, setReady] = useState<boolean>(false);
  const [filterReady, setFilterReady] = useState<boolean>(false);
  const [filteredMovie, setFilteredMovie] = useState<any>({});

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await api
      .post("/movies/title", { title: data.title })
      .then((res: any) => {
        if (res.data.release_year) {
          setFilteredMovie(res.data);
        } else {
          setAlert({
            state: true,
            status: "error",
            message: "Filme não cadastrado.",
          });
        }
      })
      .catch((err: any) => {
        // console.log(err);
        setAlert({
          state: true,
          status: "error",
          message: "Filme não cadastrado.",
        });
      });
  };

  const getAllMovies = async () => {
    await api
      .get("/movies")
      .then((res: any) => {
        // console.log(res.data);
        setMovieInfo(res.data);
      })
      .catch((err: any) => {
        // console.log(err);
        setAlert({
          state: true,
          status: "error",
          message: "Erro ao buscar filmes da lista.",
        });
      });
  };

  const handleFilter = () => {
    setFilterReady(false);
    setReady(true);
  };

  const deleteMovie = async (id: any) => {
    await api
      .delete(`/movies/${id}`)
      .then((res: any) => {
        setAlert({
          state: true,
          status: "success",
          message: "Filme deletado com sucesso.",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err: any) => {
        // console.log(err);
        setAlert({
          state: true,
          status: "error",
          message: "Erro ao encontrar filme.",
        });
      });
  };

  const editMovie = async (id: any) => {
    navigate(`/edit/${id}`);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    if (movieInfo[0]?.poster_url) {
      setReady(true);
      setFilterReady(false);
    }
  }, [movieInfo]);

  useEffect(() => {
    if (filteredMovie?.poster_url) {
      setFilterReady(true);
      setReady(false);
    }
  }, [filteredMovie]);

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
      <Title title="Lista de Filmes" />
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

      {ready &&
        movieInfo.map((movie: any) => {
          return (
            <ListaCards
              url={movie?.poster_url}
              alt={`Filme ${movie?.title}`}
              movieTitle={movie?.title}
              movieYear={movie?.release_year}
              movieDirector={movie?.director}
              movieLanguage={movie?.language}
              movieGenre={movie?.genre}
              movieDuration={movie?.duration}
              movieDescription={movie?.description}
              movieRating={movie?.rating_avg}
              movieAge={movie?.min_age}
              movieId={movie?.id}
              handleEdit={editMovie}
              handleDelete={deleteMovie}
            />
          );
        })}

      {filterReady && (
        <>
          <BackButton onClick={() => handleFilter()}>Voltar</BackButton>
          <ListaCards
            url={filteredMovie?.poster_url}
            alt={`Filme ${filteredMovie?.title}`}
            movieTitle={filteredMovie?.title}
            movieYear={filteredMovie?.release_year}
            movieDirector={filteredMovie?.director}
            movieLanguage={filteredMovie?.language}
            movieGenre={filteredMovie?.genre}
            movieDuration={filteredMovie?.duration}
            movieDescription={filteredMovie?.description}
            movieRating={filteredMovie?.rating_avg}
            movieAge={filteredMovie?.min_age}
            movieId={filteredMovie?.id}
            handleEdit={editMovie}
            handleDelete={deleteMovie}
          />
        </>
      )}
    </HomeContainer>
  );
}

export default FilmList;
