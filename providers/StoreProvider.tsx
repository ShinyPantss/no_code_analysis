"use client";
import { store } from "@/store/store";
import { useRef } from "react";
import { Provider } from "react-redux";
store;
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
