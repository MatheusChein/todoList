import { ChangeEvent, FormEvent } from "react";
import { Container } from "./styles";

interface InputProps {
  handleSubmit: (event: FormEvent) => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  item: string;
}

export function Input({ handleSubmit, handleInputChange, item }: InputProps) {
  return (
    <Container onSubmit={handleSubmit}>
      <input
        placeholder='New an item...'
        value={item}
        onChange={handleInputChange}
      />
    </Container>
  )
}