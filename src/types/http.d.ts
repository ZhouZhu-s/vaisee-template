declare interface BaseResponseBody {
  errorCode: number;
  errorMsg: string;
}

declare interface ResponseBody<T = any> extends BaseResponseBody {
  data: T;
  page: {
    page: number;
    pageSize: number;
    count: number;
    totalPages: number;
  };
}

declare interface PageParams {
  page: number;
  pageSize: number;
}
