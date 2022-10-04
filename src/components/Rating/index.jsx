import { Star } from "phosphor-react";
import { StarsWrapper } from "./styles";

export function Rating({rating}) {

   switch (Number(rating)) {
    case 5:
      return (
        <StarsWrapper>
        <Star className={"active"} size={16} />
        <Star className={"active"} size={16} />
        <Star className={"active"} size={16} />
        <Star className={"active"} size={16} />
        <Star className={"active"} size={16} />
        </StarsWrapper>
      )
    case 4:
      return (
        <StarsWrapper>
          <Star className={"active"} size={16} />
          <Star className={"active"} size={16} />
          <Star className={"active"} size={16} />
          <Star className={"active"} size={16} />
          <Star className={""}       size={16} />
        </StarsWrapper>
      )
    case 3:
      return (
        <StarsWrapper>
          <Star className={"active"} size={16} />
          <Star className={"active"} size={16} />
          <Star className={"active"} size={16} />
          <Star className={""}       size={16} />
          <Star className={""}       size={16} />
        </StarsWrapper>
      )
    case 2:
      return (
        <StarsWrapper>
          <Star className={"active"} size={16} />
          <Star className={"active"} size={16} />
          <Star className={""}       size={16} />
          <Star className={""}       size={16} />
          <Star className={""}       size={16} />
        </StarsWrapper>
      )
    case 1:
      return (
        <StarsWrapper>
          <Star className={"active"} size={16} />
          <Star className={""}       size={16} />
          <Star className={""}       size={16} />
          <Star className={""}       size={16} />
          <Star className={""}       size={16} />
        </StarsWrapper>  
      )
    default:
      return (
        <StarsWrapper>
          <Star className={""} size={16} />
          <Star className={""} size={16} />
          <Star className={""} size={16} />
          <Star className={""} size={16} />
          <Star className={""} size={16} />
        </StarsWrapper>
      )
  }


}