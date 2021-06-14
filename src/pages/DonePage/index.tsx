import { useItemList } from "../../hooks/useItemList";
import { List } from '../../components/List'

import { Container } from "./styles";

export function DonePage() {
  const { doneItems } = useItemList()

  return (
    <Container>
      <List listName={'Done'} items={doneItems} areItemsChecked={true} />
    </Container>
  )
}