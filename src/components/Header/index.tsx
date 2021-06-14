import { Container } from "./styles";
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";

type ButtonActive = 'todo' | 'done'

export function Header() {
  const [buttonActive, setButtonActive] = useState<ButtonActive>('todo')

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      setButtonActive('todo')
    }
    if (location.pathname === '/done') {
      setButtonActive('done')
    }
  }, [location])

  return (
    <Container whichButtonIsActive={buttonActive}>
        <Link className='todoButton' to='/'>Todo</Link>
        <Link className='doneButton' to='/done'>Done</Link>
    </Container>
  )
}