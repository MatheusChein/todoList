import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';

import { ListItem } from "../components/ListItem";
import { useItemList } from "../hooks/useItemList";


/**
 * 1 - Precisa renderizar o nome da tarefa e o status da checkbox, passadas como props
 * 2 - Quando eu clicar no checkbox, a função handleCheckboxChange deve ser chamada
 */


let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render the task with the name and the checkbox status passed on props", () => {
  act(() => {
    render(<ListItem name='Task Teste' isChecked={true} />, container);
  });

  expect(container.textContent).toBe("Task Teste");

  const input = document.querySelector('input');
  expect(input.checked).toBe(true);
});

it('should call the function handleCheckboxChange when an user clicks on the checkbox', () => {
  act(() => {
    render(<ListItem name='Task Teste' isChecked={true}/>, container);
  });

  const input = document.querySelector('input');

  act(() => {
    input.dispatchEvent(new MouseEvent('click'))
  });

  expect().toHaveBeenCalled()

  // expect(input.onchange()).toHaveBeenCalledTimes(1)
})