import { Container, StarsWrapper, TagsWrapper } from "./styles";
import { Star } from "phosphor-react";

export function NoteMovie({title, description = "", tags, rating}) {

  if (description.length > 315)  {
    description = description.substring(0, 316) + '...'
  }

  return (
    <Container>
      <h2>{title}</h2>
      <StarsWrapper>
        <Star className="active" size={16} />
        <Star className="active" size={16} />
        <Star className="active" size={16} />
        <Star className="active" size={16} />
        <Star size={16} />
      </StarsWrapper>

      <p>{description}</p>
      <TagsWrapper>
        {tags.map(tag =>  <span key={tag.id}>{tag.name}</span> )}
      </TagsWrapper>
    </Container>
  );
}
