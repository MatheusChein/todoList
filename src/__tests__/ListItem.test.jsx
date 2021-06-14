import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';

import { TodoItem } from "../components/TodoItem";


/**
 * 1 - Precisa renderizar o nome da tarefa passada como props
 * 2 - Quando eu clicar no checkbox, a tarefa precisa ser marcada como concluída
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

it("should render the incomplete task with the name passed on props", () => {
  act(() => {
    render(<TodoItem name='Task Teste' />, container);
  });

  expect(container.textContent).toBe("Task Teste");

  const input = document.querySelector('input');
  expect(input.checked).toBe(false);
});

it('should check the task as completed when an user clicks on the input', () => {
  act(() => {
    render(<TodoItem name='Task Teste'/>, container);
  });

  const input = document.querySelector('input');

  act(() => {
    input.dispatchEvent(new MouseEvent('click'))
  });

  expect(input.checked).toBe(true)

  // expect(input.onchange()).toHaveBeenCalledTimes(1)
})