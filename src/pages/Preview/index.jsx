import { Header } from "../../components/Header";
import { TagItem } from "../../components/TagItem";
import { ArrowLeft, Clock } from "phosphor-react";
import { format  } from "date-fns";
import { Link, useParams } from "react-router-dom";
import { Container, TitleWrapper, Title, InfoUser, TagsWrapper, Content } from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { Rating } from "../../components/Rating";
import { useAuth } from "../../context/AuthProvider";

export function Preview() {

  const {user} = useAuth() 
  const params  = useParams()
  const [movie, setMovie] = useState({})
  const [tags, setTags] = useState([])
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')




  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`movie/${params.id}`)
      const {movie, tags} = response.data
      setMovie(movie)
      setTags(tags)
      const [date, fullHour]= movie.created_at.split(' ')
      const [year, month, day] = date.split('-').map(Number)
      const [hour, minutes,] = fullHour.split(':')
      const formattedDate = format(new Date(year, month - 1, day) , 'dd/MM/yy')


      setDate(formattedDate);
      setHour(`${hour}:${minutes}`)
    }

    fetchMovie()
  }, [])

  return (
    <Container>
      <Header />
      <main>
        <TitleWrapper>
          <Link to="/">
            <ArrowLeft size={19} />
            Voltar
          </Link>
          <Title>
            <h1>{movie.title}</h1>
            <Rating rating={movie.rating} size={28}/>
          </Title>

          <InfoUser>
            <img
              src="https://github.com/alexxcamargo1000.png"
              alt="Foto de perfil"
            />
            <span>Por {user.name}</span>
            <Clock size={16} />
            <span>{date} às {hour}</span>
          </InfoUser>

          <TagsWrapper>
            {tags.map(tag => (
              <TagItem key={String(tag.id)} tagColor title={tag.name} />
            ))}
          </TagsWrapper>
        </TitleWrapper>

        <Content>
          <p>
            {movie.description}
          </p>
        </Content>
      </main>
    </Container>
  );
}
