import { Plus } from "phosphor-react";
import { Header } from "../../components/Header";
import { NoteMovie } from "../../components/NoteMovie";
import { Container, ContainerTitle, Cards } from "./styles";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";

export function Home() {
  const [movieNotes, setMovieNotes] = useState([]);
  useEffect(() => {
    async function featMovieNotes() {
      const response = await api.get(`/movie?title&tag`);
      setMovieNotes(response.data);
    }

    featMovieNotes();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <ContainerTitle>
          <h1>Meus filmes</h1>
          <Link to="/new" type="button">
            <Plus size={16} weight="fill" /> Adicionar filme
          </Link>
        </ContainerTitle>

        <Cards>
          {movieNotes.map((movie) => {
            return (
              <Link key={String(movie.id)} to="/preview">
                <NoteMovie
                title={movie.title}
                description={movie.description}
                tags={movie.tags}
                rating={movie.rating}
                />
              </Link>
            );
          })}
        </Cards>
      </main>
    </Container>
  );
}
