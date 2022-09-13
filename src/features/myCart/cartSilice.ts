import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CartI } from "../../app/interfaces/Cart";

interface CartStateI {
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
  name: "cartItems",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartI[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (cart) => {
    cart.addCase(getCartItems.pending, (state) => {
      state.loading = true;
    });
    cart.addCase(getCartItems.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    cart.addCase(getCartItems.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
    cart.addCase(removeCartItem.pending, (state) => {
      state.loading = true;
    });
    cart.addCase(removeCartItem.fulfilled, (state, action) => {
      state.items?.filter((f) => f !== action.payload);
      state.loading = false;
    });
    cart.addCase(removeCartItem.rejected, (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    });
  },
});

export default cartReducer.reducer;
export const { setCartItems } = cartReducer.actions;
