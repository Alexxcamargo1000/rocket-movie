import { Container, StarsWrapper, TagsWrapper } from "./styles";
import { Star } from "phosphor-react";
import { useState } from "react";
import { Rating } from "../Rating";

export function NoteMovie({title, description = "", tags, rating}) {
  const [active, setActive] = useState(true)

  if (description.length > 315)  {
    description = description.substring(0, 316) + '...'
  }

  return (
    <Container>
      <h2>{title}</h2>
      <Rating rating={rating}/>

      <p>{description}</p>
      <TagsWrapper>
        {tags.map(tag =>  <span key={tag.id}>{tag.name}</span> )}
      </TagsWrapper>
    </Container>
  );
}
