import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Header } from "../components/Header";


/**
 * 1 - Começa com o botão Todo selecionado, pq o estado inicial é o 'todo'
 * 2 - Começa também mostrando as todos que não foram feitas ainda
 * 3 - Quando eu clicar no Done, tem que selecionar o botão
 * 4 - Também quando clicar no Done, tem que renderizar as tarefas já feitas
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
  container = null
});

it("should render with the Todo button selected", () => {
  act(() => {
    render(<Header />, container);
  });

  expect(container.className).toBe("todoButton");
});