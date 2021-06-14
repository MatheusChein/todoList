import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }

  input[type=checkbox] {
    width: 18px;
    height: 18px;
    margin: 0 1rem 0 0.5rem;
    border-radius: 0;
    cursor: pointer;
    transition: 0.2;

    &:hover {
      filter: brightness(0.9)
    }
  }

`