import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../features/store';

// Using this throughout the app instead of plain `useDispatch` and `useSelector` 
// will make it easier to refactor if the store structure changes in the future.
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
