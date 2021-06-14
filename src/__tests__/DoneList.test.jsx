import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { DoneList } from "../components/DoneList";


/**
 * 1 - Precisa renderizar as tarefas conclúidas
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

it("should render all of the completed tasks", () => {
  const useItemList = jest.fn(() => (
    [
      {
        isDone: true,
        name: 'Task Teste 1'
      },
      {
        isDone: true,
        name: 'Task Teste 2'
      },
      {
        isDone: true,
        name: 'Task Teste 3'
      },
    ]
  ));

  act(() => {
    render(<DoneList />, container);
  });

  jest.spyOn(global, '')

});