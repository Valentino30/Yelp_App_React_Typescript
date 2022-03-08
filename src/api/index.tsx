import axios from "axios";
import { toast } from "react-toastify";

export const api = {
  get: async (endpoint: string, queryParams: string) => {
    const response = await axios.get(
      `${process.env.REACT_APP_YELP_API_BASE_URL}${endpoint}${
        queryParams && `?${queryParams}`
      }`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
        },
      }
    );
    // FEEDBACK
    // Here you're trusting Yelp to return a data object that fits your frontend requirements
    // However, nothing ensures that Yelp won't change its data object
    // If this were to happen, your frontend would not be able to handle it and it would crash
    // To resolve this issue, it's possible to utilize runtime typing systems like io-ts or zod
    // These libraries help you setup strict typing that can be used at run time
    // So that if an API does not return what the frontend expects
    // The frontend understands it and handles the problem with a clean error flow
    return response.data;
  },
};

export const handleSearchError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 400) {
      return toast.error("Location not found");
    }
    if (error.response?.status === 429) {
      return toast.error("You've hit your search limit");
    }
    if (!error.response) {
      return toast.error("No internet connection");
    }
  }
  toast.error("Oops! Something went wrong.");
};
