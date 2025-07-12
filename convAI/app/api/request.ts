import { axiosAPI } from "./axios";
import type { AxiosResponse,AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';


export const postSignUpData = async (data:any) => {
    // let data: signIn = { 
    //    first name:
    //    last name:
    // company
    //     email: values.email, 
    //     password: values.password, 
    //     token: values.token,
    // };

    const config: AxiosRequestConfig = {
    headers: {
      'Accept': 'application/json',
    } as RawAxiosRequestHeaders,
  };


  try {
  
    const response: AxiosResponse = await axiosAPI.post(`/api/data`, data);

    return response;
  } catch (error) {}
};