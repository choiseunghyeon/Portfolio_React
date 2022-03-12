import axios from "axios";

const request = async params => {
  const { method = "GET", url, headers = {}, body } = params;

  const config = {
    url,
    method,
    headers,
    data: body,
  };

  return axios(config);
};
const get = async (url, headers: any) => {
  const response = await request({
    url,
    headers,
    method: "GET",
  });

  return response.data;
};

const post = async (url, body, headers) => {
  const response = await request({
    url,
    headers,
    method: "POST",
    body,
  });

  return response.data;
};

const deleteMethod = async (url, body, headers) => {
  const response = await request({
    url,
    headers,
    method: "DELETE",
    body,
  });

  return response.data;
};

export default {
  get,
  post,
  delete: deleteMethod,
};
