import { message } from 'ant-design-vue';
import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios';
import { HttpStatusCodeHandler } from './HttpCodeHandler';

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PROXY_PREFIX
});

/**
 * 请求拦截器
 */
instance.interceptors.request.use(
  (config): InternalAxiosRequestConfig => {
    if (config.headers && import.meta.env.VITE_WITH_HTTP_TOKEN === 'true') {
      config.headers.Authorization = `Bearer ${localStorage.getItem('Authorization')}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
  (res): AxiosResponse => {
    if (res.data.errorCode !== 10200) {
      message.error(res.data.errorMsg);
    }
    if (res.data.errorCode === 10403) {
      message.error('身份认证过期，请重新登录');
      localStorage.clear();
      setTimeout(() => {
        location.href = '/';
      }, 2000);
    }
    return res;
  },
  (err): AxiosResponse => {
    const {
      response: { status }
    } = err;
    const errorMessage = HttpStatusCodeHandler.get(status)?.();
    errorMessage && message.error(errorMessage);
    return err;
  }
);

export default instance;
