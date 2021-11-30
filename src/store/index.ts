import { configureStore, Action, combineReducers, Reducer, ThunkAction } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';

declare module 'react-redux' {
  interface DefaultRootState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [k: string]: any;
  }
}

export type AppThunk<T = void> = ThunkAction<T, RootState, unknown, Action<string>>;
export type RootState = DefaultRootState;

let asyncReducers = {};

export const createReducer = (): Reducer => {
  return combineReducers({
    ...asyncReducers,
  });
};

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development' ? { trace: true } : false,
  middleware: (defaultMiddleware) => [
    ...defaultMiddleware({
      serializableCheck: false,
    }),
  ],
  reducer: createReducer(),
});

export const injectReducer = (reducers: Partial<Record<keyof DefaultRootState, Reducer>>): void => {
  asyncReducers = { ...asyncReducers, ...reducers };
  store.replaceReducer(createReducer());
};
