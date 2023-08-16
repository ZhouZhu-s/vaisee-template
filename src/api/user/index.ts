import http from '@/utils/asiox-set';
import type { QueryParams, ListItem, PostParams, PutParams } from './types';

enum Api {
  User = '/api/v1/user/user',
}

export const getUserListApi = (params: QueryParams) => {
  return http.get<ResponseBody<ListItem[]>>(Api.User, { params });
}

export const getUserApi = (id: number) => {
  return http.get<ResponseBody<ListItem>>(Api.User + '/' + id);
}

export const deleteUserApi = (id: number) => {
  return http.delete<ResponseBody<ListItem>>(Api.User + '/' + id);
}

export const putUserApi = (id: number, data: PutParams) => {
  return http.put<ResponseBody<ListItem>>(Api.User + '/' + id, data);
}

export const postUserApi = (data: PostParams) => {
  return http.post<ResponseBody<ListItem>>(Api.User, data);
}
