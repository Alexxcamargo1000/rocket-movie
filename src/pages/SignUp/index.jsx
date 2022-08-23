import { Container } from "./styles";
import { User, LockSimple, EnvelopeSimple, ArrowLeft } from "phosphor-react";
import { Input } from "../../components/Input";

export function SignUp() {
  return (
    <Container>
      <main>
        <div>
          <h1 className="logo">RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>

          <form action="">
            <legend>Crie sua conta</legend>
            <Input icon={User} type="text" placeholder="Nome" />
            <Input icon={EnvelopeSimple} type="email" placeholder="E-mail" />
            <Input icon={LockSimple} type="password" placeholder="Senha" />
            <button>Cadastrar</button>
          </form>
          <a href="">
            <ArrowLeft size={16} />
            Voltar para o login
          </a>
        </div>
      </main>
      <div className="bgImage" />
    </Container>
  );
}
