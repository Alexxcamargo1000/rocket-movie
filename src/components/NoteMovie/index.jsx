import { Container, TagsWrapper } from "./styles";
import { Rating } from "../Rating";

export function NoteMovie({title, description = "", tags, rating}) {
  if (description.length > 315)  {
    description = description.substring(0, 316) + '...'
  }

  return (
    <Container>
      <h2>{title}</h2>
      <Rating rating={rating} size={16}/>

      <p>{description}</p>
      <TagsWrapper>
        {tags.map(tag =>  <span key={tag.id}>{tag.name}</span> )}
      </TagsWrapper>
    </Container>
  );
}
