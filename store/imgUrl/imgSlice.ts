"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  imgUrl: string;
  plotType: string;
}

const initialState: CounterState = {
  imgUrl: "",
  plotType: "",
};

export const plotContext = createSlice({
  name: "imgUrl",
  initialState,
  reducers: {
    setImgUrl: (state, action: PayloadAction<string>) => {
      state.imgUrl = action.payload;
    },
    setPlotType: (state, action: PayloadAction<string>) => {
      state.plotType = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setImgUrl, setPlotType } = plotContext.actions;

export default plotContext.reducer;
