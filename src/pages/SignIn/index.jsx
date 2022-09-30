import { Container } from "./styles";
import { Input } from "../../components/Input";
import { EnvelopeSimple, LockSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export function SignIn() {
  const {signIn} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({email, password})
  }



  return (
    <Container>
      <main>
        <div>
         <h1 className="logo">RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <form action="">
            <legend>Faça seu login</legend>
            <Input icon={EnvelopeSimple} type="email"  placeholder="E-mail" onChange={ e => setEmail(e.target.value) }/>
            <Input icon={LockSimple} type="password" placeholder="Senha"onChange={ e => setPassword(e.target.value) }/>
            <button type="button"  onClick={handleSignIn}>Entrar</button>
          </form>
          <Link to="/create">Criar conta</Link>
        </div>
      </main>
      <div className="bgImage" />
    </Container>
  );
}
