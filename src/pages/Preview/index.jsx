import { Header } from "../../components/Header";
import { ArrowLeft, Star, Clock } from "phosphor-react";

import { Container } from "./styles";

export function Preview() {
  return (
    <Container>
      <Header />
      <main>
        <div className="content_title">
          <a href="/">
            <ArrowLeft size={19} />
            Voltar
          </a>
          <div className="title">
            <h1>Interestellar</h1>
            <div className="rating">
              <Star className="active" size={16} />
              <Star className="active" size={16} />
              <Star className="active" size={16} />
              <Star className="active" size={16} />
              <Star className="active" size={16} />
            </div>
          </div>

          <div className="sub">
            <img
              src="https://github.com/alexxcamargo1000.png"
              alt="Foto de perfil"
            />
            <span>Por Alex Camargo</span>
            <span>
              <Clock size={16} />
              23/05/22 às 08:00
            </span>
          </div>
        </div>
      </main>
    </Container>
  );
}
