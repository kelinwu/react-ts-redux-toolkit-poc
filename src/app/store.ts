import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import builderReducer from '../features/builder/builderSlice';
import cartReducer from '../features/myCart/cartSilice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    builder: builderReducer,
    myCart: cartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
