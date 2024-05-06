import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ColumnNamesState {
  columnNames: string[];
}

const initialState: ColumnNamesState = {
  columnNames: [],
};

export const columnNamesSlice = createSlice({
  name: "columnNames",
  initialState,
  reducers: {
    setColumnNames: (state, action: PayloadAction<string[]>) => {
      state.columnNames = action.payload;
    },
  },
});

export const { setColumnNames } = columnNamesSlice.actions;

export default columnNamesSlice.reducer;
