import axios from "axios";

export const refreshTokens = async () => {
  const url = "/api/v1/refreshToken";
  await axios.post(url, undefined, {
    withCredentials: true,
  });
};

const handleRequest = async (request) => {
  try {
    return await request();
  } catch (error) {
    if (error?.response?.status === 401) {
      try {
        await refreshTokens();
        return await request();
      } catch (e) {
        console.log(e);
      }
    }
  }
};

export const fetcher = async (url) => {
  try {
    const url = "/api/v1/users/access-token";
    const request = () =>
      axios.get(url, {
        headers: {
          withCredentials: true,
        },
      });
    const { data } = await handleRequest(request);
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};

export const poster = async (url, payload) => {
  try {
    const request = () => axios.post(url, payload, { withCredentials: true });
    const { data } = await handleRequest(request);
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
