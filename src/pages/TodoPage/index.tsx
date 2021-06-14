import { ChangeEvent, FormEvent, useState } from "react";
import { useItemList } from "../../hooks/useItemList";
import { List } from '../../components/List'
import { Input } from '../../components/Input'

import { Container } from "./styles";

export function TodoPage() {
  const [item, setItem] = useState('')
  
  const { addNewItem, todoItems } = useItemList()

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    addNewItem({
      isDone: false,
      name: item
    })

    setItem('')
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setItem(event.target.value)
  }

  return (
    <Container>
      <Input 
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        item={item}
      />
      <List listName={'Todo'} items={todoItems} areItemsChecked={false} />
    </Container>
  )
}