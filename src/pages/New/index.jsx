import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ArrowLeft, X, Plus } from "phosphor-react";

import {
  Container,
  TitleWrapper,
  Form,
  TagsWrapper,
  Tags,
  ButtonWrapper,
} from "./styles";
import { Tag } from "../../components/Tag";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <TitleWrapper>
          <a href="/">
            <ArrowLeft size={19} />
            Voltar
          </a>
          <h1>Novo filme</h1>
        </TitleWrapper>

        <Form method="post">
          <div className="inputWrapper">
            <Input placeholder="Título" id="title" name="title" />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              id="rating"
              name="rating"
            />
          </div>

          <textarea
            name="description"
            id="description"
            placeholder="Observações"
          ></textarea>

          <TagsWrapper>
            <span>Marcadores</span>
            <Tags>
              <Tag value="Ação" />
              <Tag isNew placeholder="Novo marcador" />
            </Tags>
          </TagsWrapper>

          <ButtonWrapper>
            <button className="delete">Excluir filme</button>
            <button className="save">Salvar alterações</button>
          </ButtonWrapper>
        </Form>
      </main>
    </Container>
  );
}
