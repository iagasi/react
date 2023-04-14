import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';
import { characterApi } from './rtk';
export const store = configureStore({
  reducer: {
    search: searchSlice,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(characterApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type SearchState = Pick<RootState, 'search'>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
