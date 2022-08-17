import { Plus } from "phosphor-react";
import { Header } from "../../components/Header";
import { NoteMovie } from "../../components/NoteMovie";
import { Container, ContainerTitle, Cards } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <ContainerTitle>
          <h1>Meus filmes</h1>
          <button>
            <Plus size={16} weight="fill" /> Adicionar filme
          </button>
        </ContainerTitle>

        <Cards>
          <NoteMovie /> 
          <NoteMovie />
          <NoteMovie />
          <NoteMovie />
          <NoteMovie />
        </Cards>
      </main>
    </Container>
  );
}
