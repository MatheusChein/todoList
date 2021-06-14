import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { TodoList } from "../components/TodoList";


/**
 * 1 - Precisa ter o input para o usuário digitar a tarefa nova
 * 2 - Precisa adicionar a tarefa nova quando o usuário submeter a tarefa
 * 3 - Precisa renderizar as tarefas que não foram concluídas
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

it("should render with an input element", () => {
  act(() => {
    render(<TodoList />, container);
  });

  expect(container).toBe("todoButton");
});