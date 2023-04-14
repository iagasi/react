import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';
import { characterApi } from './rtk';
import formSlice from './formSlice';
import { useSelector } from 'react-redux';
export const store = configureStore({
  reducer: {
    search: searchSlice,
    form: formSlice,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(characterApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type SearchState = Pick<RootState, 'search'>;
type FormState = Pick<RootState, 'form'>;
export function useTypedUseSelector(fn: (state: RootState) => RootState) {
  return useSelector(fn);
}

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
