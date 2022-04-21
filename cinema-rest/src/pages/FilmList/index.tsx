import React, { useState, useEffect } from "react";
import {
  ErrorSpan,
  HomeContainer,
  Input,
  InputArea,
  SearchIcon,
} from "./styles";
import Title from "../../components/Title";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import api from "../../services/api";

interface FormData {
  title: string;
}

function FilmList() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [movieInfo, setMovieInfo] = useState<any>([]);
  const [filteredMovie, setFilteredMovie] = useState<any>({});

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await api
      .post("/movies/title", { title: data.title })
      .then((res: any) => {
        setFilteredMovie(res.data);
      })
      .catch((err: any) => {
        console.log(err);
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
        console.log(err);
      });
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  /*   useEffect(() => {
    console.log(movieInfo);
  }, [movieInfo]); */

  return (
    <HomeContainer>
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
    </HomeContainer>
  );
}

export default FilmList;
