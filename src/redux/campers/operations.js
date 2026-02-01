import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (params = {}, thunkAPI) => {
    try {
      const { page = 1, limit = 4, ...filters } = params;
      const searchParams = new URLSearchParams({
        page,
        limit,
      });
      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          searchParams.append(key, filters[key]);
        }
      });
      const response = await axios.get(`/campers?${searchParams.toString()}`);
      return response.data;
    } catch (e) {
      if (e.response && e.response.status === 404) {
        return { items: [], total: 0 };
      }
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchOne",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
