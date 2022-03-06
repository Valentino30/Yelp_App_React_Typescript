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
