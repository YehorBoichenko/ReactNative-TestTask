import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";

// Custom hook to access the store's dispatch function
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

// Custom hook to access the store's select function with typed state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
