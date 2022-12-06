// Хуки стора Redux
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from './store';

// Хуки, использующие типы из стора Redux
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;