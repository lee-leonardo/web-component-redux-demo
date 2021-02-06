import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TagList = Array<string>;
export interface TodoItem {
  text: string;
  checked: boolean;
  index: number;
  tags?: TagList;
}

export enum TodoActionTypes {
  add = 'ADD',
  delete = 'DELETE',
  check = 'CHECK_TOGGLE',
}

const name = 'todos';
const initialState: Array<TodoItem> = [];

const todosSlice = createSlice({
  name,
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoItem>) => {
      state.push(action.payload);
    },
    delete: (state, action: PayloadAction<TodoItem>) => {
      state = state.filter((item, i) => i !== action.payload.index);
    },
    toggle: (state, action: PayloadAction<TodoItem>) => {
      const { index } = action.payload;
      state[index].checked = !state[index].checked;
    },
  },
});

export const actions = todosSlice.actions;
export const store = configureStore({
  reducer: todosSlice.reducer,
});
