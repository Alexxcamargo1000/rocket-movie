import { Container, Profile, InputWrapper } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import { SignOut } from "phosphor-react";

export function Header() {
  return (
    <Container>
      <header>
        <Link to="/" className="logo logo-header">
          RocketMovies
        </Link>
        <InputWrapper>
          <Input type="text" id="search" placeholder="Pesquisar pelo título" />
        </InputWrapper>
        <Profile>
          <div>
            <Link to="/profile">Alex Camargo</Link>
            <button>sair</button>
          </div>
          <Link to="/profile">
            <img
              src="https://github.com/alexxcamargo1000.png"
              alt="Foto de perfil"
            />
          </Link>
        </Profile>
        <div className="signOutMobile">
        <SignOut size={20} weight="fill"/> 
        </div>
      </header>
    </Container>
  );
}
