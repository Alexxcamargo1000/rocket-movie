import { Container } from "./styles";
import { X, Plus } from "phosphor-react";

export function Tag({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input 
        type="text" 
        value={value} 
        readOnly={!isNew} 
        {...rest} 
      />

      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <Plus size={16} /> : <X size={16} />}
      </button>
    </Container>
  );
}
