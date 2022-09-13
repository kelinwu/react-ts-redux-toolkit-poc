import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PartI } from "../../app/interfaces/Parts";

interface PartStateI {
  parts: PartI[] | null;
  loading: boolean;
  part: PartI | null;
  errors?: any;
}

const initialState: PartStateI = {
  parts: [],
  loading: false,
  part: null,
};
// action
export const getParts = createAsyncThunk<PartI[]>(
  "parts/getParts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addPart = createAsyncThunk<Object, PartI>(
  "parts/addPart",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("blahblah/blah");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// reducer
export const builderSlice = createSlice({
  name: "parts",
  initialState,
  reducers: {
    setParts: (state, action: PayloadAction<PartI[]>) => {
      state.parts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getParts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getParts.fulfilled, (state, action) => {
      state.parts = action.payload;
      state.loading = false;
    });
    builder.addCase(getParts.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export default builderSlice.reducer;
export const { setParts } = builderSlice.actions;
