import { ref } from 'vue';
import type { AxiosResponse } from 'axios';

type FormatFn<R, L> = (data: R) => L;

type FetchApiFn<R> = (params: any) => Promise<AxiosResponse<ResponseBody<R>>>;

export const useList = <R, L>(fetchApiFn: FetchApiFn<R>, formatFn: FormatFn<R, L[]>) => {
  /**
   * 列表
   */
  const list = ref<L[]>();
  /**
   * 当前页
   */
  const current = ref(1);
  /**
   * 每页条数
   */
  const pageSize = ref(10);
  /**
   * 总条数
   */
  const total = ref(0);
  /**
   * 加载中
   */
  const loading = ref(false);

  const getList = async (params?: object) => {
    loading.value = true;
    try {
      const {
        data: { errorCode, data, page: resPage }
      } = await fetchApiFn(
        Object.assign(params || {}, { page: current.value, pageSize: pageSize.value })
      );
      if (errorCode === 10200) {
        list.value = formatFn(data);
        total.value = resPage.count;
      }
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false;
    }
  };

  return { list, current, pageSize, total, loading, getList };
};
