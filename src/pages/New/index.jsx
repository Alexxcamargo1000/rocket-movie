import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

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

  const [tags, setTags] = useState([])
  const [tag, setTag] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")
  const navigate = useNavigate()

  function handleNewTag() { 
    if(tags.includes(tag)) {
      alert("ja exite uma tag com esse nome")
      return
    }
    setTags( prevState => [...prevState, tag])
    setTag("")
  }

  function handleDelTag(tagDeleted) {
    const filterTags = tags.filter(tag => tag  !== tagDeleted);

    setTags(filterTags)
  }

  async function handleSaveMovie() {

    if(!title) {
      return alert("O titulo não foi informado!")
    }
    if(!description) {
      return alert("A discrição não foi informado!")
    }
    if(tags.length === 0 ) {
      return alert("Não pode cadastrar um filme sem tag")
    }

    if(tag) {
      return alert("Você deixou uma tag marcada mas não selecionou")
    }

    const movie ={
      title,
      rating: Number(rating),
      description,
      tags
    }

    try {
      await api.post("/movie", movie )
      alert("Filme cadastrado")
      navigate(-1)

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("não foi possível entrar");
      }
    }
  }

  function handleDelMovie() {
    setTags([])
    setTitle("")
    setRating("")
    setDescription("")
  }

  return (
    <Container>
      <Header />
      <main>
        <TitleWrapper>
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={19} />
            Voltar
          </button>
          <h1>Novo filme</h1>
        </TitleWrapper>

        <Form method="post">
          <div className="inputWrapper">
            <Input 
              placeholder="Título" 
              id="title" 
              name="title"
              onChange={ e => setTitle(e.target.value) }
              value={title}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              id="rating"
              name="rating"
              onChange={ e => setRating(e.target.value) }
              value={rating}
            />
          </div>

          <textarea
            name="description"
            id="description"
            placeholder="Observações"
            onChange={ e =>  setDescription(e.target.value) }
            value={description}
          />

          <TagsWrapper>
            <span>Marcadores</span>
            <Tags>
              {tags.map((tag, index) =>  <Tag key={`${tag}_${index}`} value={tag} onClick={() =>handleDelTag(tag)} />)}
              <Tag 
                value={tag} 
                isNew 
                placeholder="Novo marcador" 
                onChange={e => setTag(e.target.value)} 
                onClick={handleNewTag}
              />
            </Tags>
          </TagsWrapper>

          <ButtonWrapper>
            <button type="button" onClick={handleDelMovie} className="delete">Excluir filme</button>
            <button type="button" onClick={handleSaveMovie} className="save">Salvar alterações</button>
          </ButtonWrapper>
        </Form>
        
      </main>
    </Container>
  );
}
