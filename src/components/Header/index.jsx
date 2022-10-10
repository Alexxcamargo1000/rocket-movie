import {
  Container,
  Profile,
  InputWrapper,
  PopUpMobile,
  ButtonMobile,
} from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import { Plus } from "phosphor-react";
import { useRef } from "react";
import { useAuth } from "../../context/AuthProvider";
import { api } from "../../services/api";
import avatarSvg from "../../assets/avatar_placeholder.svg"

export function Header({search}) {
  const { user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarSvg
  const popUp = useRef(null);
  const { signOut } = useAuth()


  function heddleTogglePopUp() {
    popUp.current.classList.toggle("hide");

    console.log(popUp);
  }
  return (
    <Container>
      <header>
        <Link to="/" className="logo logo-header">
          RocketMovies
        </Link>
        <InputWrapper>
          <Input type="text" id="search" onChange={e => search(e.target.value) } placeholder="Pesquisar pelo título" />
        </InputWrapper>
        <Profile>
          <div>
            <Link to="/profile">Alex Camargo</Link>
            <button type="button" onClick={signOut} >sair</button>
          </div>
          <Link to="/profile">
            <img
              src={avatarUrl}
              alt={`foto de perfil do ${user.name}`}
            />
          </Link>
        </Profile>
      </header>

      <ButtonMobile onClick={heddleTogglePopUp}>
        <Plus size={20} weight="fill" />
      </ButtonMobile>

      <PopUpMobile ref={popUp} className="hide">

          <Link to="/profile">
            <img
              src={avatarUrl}
              alt={`foto de perfil do ${user.name}`}
            />
            <span>Alex Camargo</span>
          </Link>
          <button type="button" onClick={signOut}>sair</button>
  
      </PopUpMobile>
    </Container>
  );
}
