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
    // 액세스 토큰 만료 에러가 아니면 탈출
  }
};

export const fetcher = async (url) => {
  try {
    const url = "/api/v1/users/access-token";
    // const data = {
    //   userId: 0,
    //   displayName: "test",
    //   profileImage:
    //     "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg",
    // };
    const request = () =>
      axios.get(url, {
        headers: {
          withCredentials: true,
          "ngrok-skip-browser-warning": "69420",
        },
      });
    const { data } = await handleRequest(request);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([null, data]);
      }, 300);
    });
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
