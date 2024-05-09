"use client";
import { configureStore } from "@reduxjs/toolkit";
import { plotContext } from "./imgUrl/imgSlice";
import columnNamesContext from "./columnNamesSlice";



export const store = configureStore({
  reducer: {
    imgUrl: plotContext.reducer,
    columnNames: columnNamesContext,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
