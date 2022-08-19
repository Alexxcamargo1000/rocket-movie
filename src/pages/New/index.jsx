import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ArrowLeft, X, Plus } from "phosphor-react";

import { Container, TitleWrapper, Form, TagsWrapper, ButtonWrapper } from "./styles";

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
            <div>
              <div className="tag active">
                <input type="text" value="Drama"  />
                <X size={16} />
              </div>

              <div className="tag">
                <input type="text" placeholder="Novo Marcadoror"  />
                <Plus size={16} />
              </div>
            </div>
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
