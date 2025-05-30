import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../index";
import { uid } from "uid";
import { getCreatedAt } from "../../../utils/getCurrentDate";

interface Todo {
  id: string;
  task: string;
  isDone: boolean;
  createdAt: string;
}

type AddTodoPayload = Pick<Todo, "task">;
type EditTodoPayload = Pick<Todo, "id" | "task">;
type GetTodoByIdPayload = Pick<Todo, "id">;

const initialState: Todo[] = [];

export const TodoSlice = createSlice({
  name: "Todo",
  initialState: initialState,
  reducers: {
    AddTodo: (state, action: PayloadAction<AddTodoPayload>) => {
      state.push({
        id: uid(),
        isDone: false,
        createdAt: getCreatedAt(),
        task: action.payload.task,
      });
    },
    DeleteTodo: (state, action: PayloadAction<GetTodoByIdPayload>) => {
      return state.filter((stateItem) => stateItem.id !== action.payload.id);
    },
    EditTodo: (state, action: PayloadAction<EditTodoPayload>) => {
      const updatedState = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state[updatedState] = {
        ...state[updatedState],
        task: action.payload.task,
      };
    },
    MarkAsDone: (state, action: PayloadAction<GetTodoByIdPayload>) => {
      const updatedState = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state[updatedState] = {
        ...state[updatedState],
        isDone: true,
      };
    },
  },
});

export const todoActions = TodoSlice.actions;

export const Todos = (state: RootState) => state.Todo;

export default TodoSlice.reducer;
