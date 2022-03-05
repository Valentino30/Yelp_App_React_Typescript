import axios from "axios";

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
