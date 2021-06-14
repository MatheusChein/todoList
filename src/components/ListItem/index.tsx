import { useItemList } from "../../hooks/useItemList";
import { Container } from "./styles";

interface ListItemProps {
  name: string;
  isChecked: boolean;
}

export function ListItem({ name, isChecked }: ListItemProps) {
  const { handleCheckboxChange } = useItemList();

  return (
    <Container>
      <input 
        type="checkbox"
        onChange={() => handleCheckboxChange({ name, isDone: isChecked })}
        checked={isChecked}
      />
      <span>{name}</span>
    </Container>
  )
}