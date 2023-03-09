import axios from 'axios';

const authURL = 'https://todo-list.alphacamp.io/api/auth';

export const login = async ({ username, password }) => {
  try {
    // const { data } = res.data // {"authToken":"..."}
    const { data } = await axios.post(`${authURL}/login`, {
      username,
      password,
    });

    // const { authToken } = {"authToken":"...", ...}
    const { authToken } = data;
    if (authToken) {
      return { success: true, ...data };
    }
    // 登入失敗，有可能尚未註冊
    return data;
  } catch (error) {
    console.error('[Login failed]:', error);
  }
};

export const register = async ({ username, email, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/register`, {
      username,
      email,
      password,
    });
    const { authToken } = data;

    if (authToken) {
      return { success: true, ...data };
    }

    return data;
  } catch (error) {
    console.error('[Sign in failed]:', error);
  }
};

export const checkPermission = async (authToken) => {
  try {
    const res = await axios.get(`${authURL}/test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });

    return res.data.success;
  } catch (error) {
    console.error('[Check permission failed]:', error);
  }
};
