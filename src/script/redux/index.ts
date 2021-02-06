import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TagList = Array<string>;
export interface TodoItem {
  text: string;
  checked: boolean;
  tags?: TagList;
}

export interface Position {
  index: number;
}

export enum TodoActionTypes {
  add = 'ADD',
  delete = 'DELETE',
  check = 'CHECK_TOGGLE',
}

const name = 'todos';

interface State {
  todos: Array<TodoItem>;
}

const initialState: State = {
  todos: [
    {
      text: 'example 1',
      checked: false,
    },
  ],
};

const todosSlice = createSlice({
  name,
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoItem>) => {
      state.todos.push(action.payload);
    },
    delete: (state, action: PayloadAction<Position>) => {
      state.todos = state.todos.filter((item, i) => i !== action.payload.index);
    },
    toggle: (state, action: PayloadAction<Position>) => {
      const { index } = action.payload;
      state.todos[index].checked = !state.todos[index].checked;
    },
  },
});

export const actions = todosSlice.actions;
export const store = configureStore({
  reducer: todosSlice.reducer,
});
