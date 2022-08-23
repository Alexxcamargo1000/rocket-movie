import { Container } from "./styles";
import { Input } from "../../components/Input";
import { EnvelopeSimple, LockSimple } from "phosphor-react";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <main>
        <div>
          <h1 className="logo">RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <form action="">
            <legend>Faça seu login</legend>
            <Input icon={EnvelopeSimple} type="email"  placeholder="E-mail"/>
            <Input icon={LockSimple} type="password" placeholder="Senha"/>
            <button>Entrar</button>
          </form>
          <Link to="/create">Criar conta</Link>
        </div>
      </main>
      <div className="bgImage" />
    </Container>
  );
}
