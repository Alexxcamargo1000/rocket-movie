import { Container, Profile, InputWrapper } from "./styles";
import {Input} from "../Input"

export function Header() {
  return (
    <Container>
      <header>
        <a className="logo" href="">
          RocketMovies
        </a>
        <InputWrapper>
          <Input type="text" id="search" placeholder="Pesquisar pelo título" />
        </InputWrapper>
        <Profile>
          <div>
            <span>Alex Camargo</span>
            <button>sair</button>
          </div>
          <img
            src="https://github.com/alexxcamargo1000.png"
            alt="Foto de perfil"
          />
        </Profile>
      </header>
    </Container>
  );
}
