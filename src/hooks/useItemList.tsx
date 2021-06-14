import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface Item {
  isDone: boolean;
  name: string;
}

interface ItemListContextData {
  todoItems: Item[];
  doneItems: Item[];
  addNewItem: (item: Item) => void;
  finishItem: (item: Item) => void;
  handleCheckboxChange: (item: Item) => void;
}

const ItemListContext = createContext<ItemListContextData>({} as ItemListContextData)



interface ItemListProviderProps {
  children: ReactNode
}


export function ItemListProvider({ children }: ItemListProviderProps) {
  const [todoItems, setTodoItems] = useState<Item[]>([])
  const [doneItems, setDoneItems] = useState<Item[]>([])

  useEffect(() => {
    const todoList = localStorage.getItem('TodoList');

    if (todoList !== null) {
      setTodoItems(JSON.parse(todoList))
    }

    const donelist = localStorage.getItem('DoneList');

    if (donelist !== null) {
      setDoneItems(JSON.parse(donelist))
    }
  }, [])

  useEffect(() => {localStorage.setItem('TodoList', JSON.stringify(todoItems))}, [todoItems])

  useEffect(() => {localStorage.setItem('DoneList', JSON.stringify(doneItems))}, [doneItems])


  function addNewItem({ name, isDone }: Item) {
    const newDoneList = doneItems.filter(doneItem => doneItem.name !== name);

    setDoneItems(newDoneList)

    const newTodoList = [...todoItems, {
      isDone,
      name,
    }]
    
    setTodoItems(newTodoList);
  }
  

  function finishItem({ name, isDone }: Item) {
    const newTodoList = todoItems.filter(todoItem => todoItem.name !== name)

    setTodoItems(newTodoList)

    const newDoneList = [...doneItems, {
      isDone,
      name,
    }]

    setDoneItems(newDoneList);
  }

  function handleCheckboxChange({ name, isDone }: Item) {
    if (isDone) {
      addNewItem({
        isDone: false,
        name
      })
    } else {
      finishItem({
        isDone: true,
        name
      })
    }
  }

  return (
    <ItemListContext.Provider value={{
      todoItems,
      doneItems,
      addNewItem,
      finishItem,
      handleCheckboxChange
    }}>
      {children}
    </ItemListContext.Provider>
  )
}

export function useItemList() {
  const context = useContext(ItemListContext);

  return context;
}