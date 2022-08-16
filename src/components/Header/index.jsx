import { Container, Profile, Input } from "./styles";

export function Header() {
  return (
    <Container>
      <header>
        <a className="logo" href="">
          RocketMovies
        </a>
        <Input type="text" id="search" placeholder="Pesquisar pelo título" />
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
