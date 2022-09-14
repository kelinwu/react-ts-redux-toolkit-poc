import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CartI } from "../../app/interfaces/Cart";

export interface CartStateI {
  items: CartI[] | null;
  loading: boolean;
  errors?: any;
}

const initialState: CartStateI = {
  items: [],
  loading: false,
};

// action getAll
export const getCartItems = createAsyncThunk<CartI[]>(
  "cart/getItems",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("blahblah/blahblah");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// action remove from cart
export const removeCartItem = createAsyncThunk<Object, CartI>(
  "cart/removeItem",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("blahblah/blah", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reducer
export const cartReducer = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.items?.push(action.payload)
    },
    removeCartItemFromState: (state, action) => {
      state.items?.splice(state.items.indexOf(action.payload), 1)
    }
  }
});

export default cartReducer.reducer;
export const { addCartItem,removeCartItemFromState } = cartReducer.actions;
