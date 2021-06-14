import { Item } from "../../hooks/useItemList";
import { ListItem } from "../ListItem";
import { Container } from "./styles";

interface ListProps {
  listName: string;
  items: Item[];
  areItemsChecked: boolean;
}

export function List({ listName, items, areItemsChecked }: ListProps) {
  return (
    <Container>
      <h3>{listName} Items</h3>
      <hr />
      {items.map(item => (
        <ListItem key={item.name} name={item.name} isChecked={areItemsChecked} />
      ))}
    </Container>
  )
}