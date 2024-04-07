"use client"
import { configureStore } from "@reduxjs/toolkit";
import imgSlice, { plotContext } from "./imgUrl/imgSlice";
// ...

export const store = configureStore({
  reducer: {
    imgUrl: plotContext.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
