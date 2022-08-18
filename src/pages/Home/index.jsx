
import { Plus } from "phosphor-react";
import { Header } from "../../components/Header";
import { NoteMovie } from "../../components/NoteMovie";
import { Container, ContainerTitle, Cards } from "./styles";
import { Link } from "react-router-dom"

export function Home() {
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
          <NoteMovie />
          <NoteMovie />
          <NoteMovie />
        </Cards>
      </main>
    </Container>
  );
}
