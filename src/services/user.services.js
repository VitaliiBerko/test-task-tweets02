import axios from "axios";

const usersPublicApi = axios.create({
  baseURL: "https://63e61ee87eef5b22337f4289.mockapi.io/users",
});

export const getUsers = async (params) => {
  const response = await usersPublicApi.get("",
   {
    params: { ...params },
  }
  );

  return response.data;
};
