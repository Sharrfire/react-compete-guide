import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../components/ReduxSection/slice/counterSlice';
import authReducer from '../components/ReduxSection/slice/authSlice';
import uiSlice from '../components/ReduxAdvance/slice/ui-slice';
import cartSlice from '../components/ReduxAdvance/slice/cartSlice';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer, ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
