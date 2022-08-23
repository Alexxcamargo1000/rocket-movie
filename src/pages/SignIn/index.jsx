import { Container } from "./styles";
import { Input } from "../../components/Input";
import { EnvelopeSimple, LockSimple } from "phosphor-react";

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
          <a href="">Criar conta</a>
        </div>
      </main>
      <div className="bgImage" />
    </Container>
  );
}
