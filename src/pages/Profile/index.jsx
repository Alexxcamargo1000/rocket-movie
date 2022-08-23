import { Link } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { User, EnvelopeSimple, LockSimple, Camera } from "phosphor-react";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <ArrowLeft size={16} />
          Voltar
        </Link>
      </header>

      <main>
        <div className="avatar">
          <img src="https://github.com/alexxcamargo1000.png" alt="" />
          <button>
            <Camera size={20} />
          </button>
        </div>

        <form action="">
          <Input
            type="text"
            icon={User}
            defaultValue="Alex Camargo"
            placeholder="Nome"
          />
          <Input
            type="email"
            icon={EnvelopeSimple}
            defaultValue="alex@gmail.com"
            placeholder="Email"
          />

          <Input type="password" icon={LockSimple} placeholder="Senha atual" />
          <Input type="password" icon={LockSimple} placeholder="Nova senha" />
          <button type="submit" disabled>
            Salvar
          </button>
        </form>
      </main>
    </Container>
  );
}
