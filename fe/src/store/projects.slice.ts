import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CardProps } from "../components/Card";

interface ProjectState {
  data: CardProps[];
  loading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  data: [],
  loading: false,
  error: null,
};
const apiUrl = import.meta.env.VITE_API_URL;
export const fetchCardData = createAsyncThunk<
CardProps[],
  { requestedTons: number }
>("cards/fetchCardData", async (inputData) => {
  const response = await fetch(`${apiUrl}project/generate/portfolio`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputData),
  });
  const data: CardProps[] = await response.json();
  return data;
});

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCardData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default projectSlice.reducer;
