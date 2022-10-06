import { Star } from "phosphor-react";
import { StarsWrapper } from "./styles";

export function Rating({rating, size}) {

   switch (Number(rating)) {
    case 5:
      return (
        <StarsWrapper>
        <Star className={"active"} size={size} />
        <Star className={"active"} size={size} />
        <Star className={"active"} size={size} />
        <Star className={"active"} size={size} />
        <Star className={"active"} size={size} />
        </StarsWrapper>
      )
    case 4:
      return (
        <StarsWrapper>
          <Star className={"active"} size={size} />
          <Star className={"active"} size={size} />
          <Star className={"active"} size={size} />
          <Star className={"active"} size={size} />
          <Star className={""}       size={size} />
        </StarsWrapper>
      )
    case 3:
      return (
        <StarsWrapper>
          <Star className={"active"} size={size} />
          <Star className={"active"} size={size} />
          <Star className={"active"} size={size} />
          <Star className={""}       size={size} />
          <Star className={""}       size={size} />
        </StarsWrapper>
      )
    case 2:
      return (
        <StarsWrapper>
          <Star className={"active"} size={size} />
          <Star className={"active"} size={size} />
          <Star className={""}       size={size} />
          <Star className={""}       size={size} />
          <Star className={""}       size={size} />
        </StarsWrapper>
      )
    case 1:
      return (
        <StarsWrapper>
          <Star className={"active"} size={size} />
          <Star className={""}       size={size} />
          <Star className={""}       size={size} />
          <Star className={""}       size={size} />
          <Star className={""}       size={size} />
        </StarsWrapper>  
      )
    default:
      return (
        <StarsWrapper>
          <Star className={""} size={size} />
          <Star className={""} size={size} />
          <Star className={""} size={size} />
          <Star className={""} size={size} />
          <Star className={""} size={size} />
        </StarsWrapper>
      )
  }


}