import styled, { css } from 'styled-components';

interface HeaderProps {
  whichButtonIsActive: 'todo' | 'done';
}

export const Container = styled.header<HeaderProps>`
  margin: 0 auto;
  padding: 2rem 0 1rem;
  width: 100%;
  max-width: 420px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 0.5rem 2rem;
    border: solid 1px #231e23;
    color: #231e23;
    text-decoration: 0;
    border-radius: 0.25rem;

    transition: 0.2s;
    
    & + a {
      margin-left: 1rem;
    }

    &:hover {
      filter: brightness(0.9)
    }
  }

  ${props => {
    if (props.whichButtonIsActive === 'todo') {
      return (
        css`
        .todoButton {
          background-color: #dbe6fd;
        }`
      )
    }
    if (props.whichButtonIsActive === 'done') {
      return (
        css`
        .doneButton {
          background-color: #dbe6fd;
        }`
      )
    }
  }}
`