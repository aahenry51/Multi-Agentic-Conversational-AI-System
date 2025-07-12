import { axiosAPI } from "./axios";
import type { AxiosResponse,AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';


export const postSignUpData = async (data:any) => {


    const config: AxiosRequestConfig = {
    headers: {
      'Accept': 'application/json',
    } as RawAxiosRequestHeaders,
  };


  try {
  
    const response: AxiosResponse = await axiosAPI.post(`/crm/create_user`, data);

    return response;
  } catch (error) {}
};

export const postLoginData = async (data:any) => {


    const config: AxiosRequestConfig = {
    headers: {
      'Accept': 'application/json',
    } as RawAxiosRequestHeaders,
  };


  try {
  
    const response: AxiosResponse = await axiosAPI.post(`/crm/login_user`, data);

    return response;
  } catch (error) {}
};