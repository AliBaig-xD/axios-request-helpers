import axios from "axios";
import { getAccessToken } from "./asyncStorage";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const setApiHeader = async () => {
  axios.defaults.headers.common.Authorization = `Bearer ${await getAccessToken()}`;
};

const unSetApiHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

const handleRequest = async (
  method,
  url,
  body = null,
  config = {},
  withAuth
) => {
  if (withAuth) {
    await setApiHeader();
  } else {
    unSetApiHeader();
  }
  try {
    const res = await axios.request({
      method,
      url,
      data: body,
      ...config
    });
    return { data: res.data.data, isError: false };
  } catch (err) {
    return {
      error: err.response.data,
      isError: true
    };
  }
};

export const POST = async (url, body, config, withAuth = true) => {
  return handleRequest("post", url, body, config, withAuth);
};

export const PATCH = async (url, body, withAuth = true) => {
  return handleRequest("patch", url, body, withAuth);
};

export const GET = async (url, query = null, withAuth = true) => {
  return handleRequest("get", url, null, { params: query }, withAuth);
};

export const DELETE = async (url, withAuth = true) => {
  return handleRequest("delete", url, withAuth);
};
