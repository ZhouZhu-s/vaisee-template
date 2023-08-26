import { ref, watch, type Ref, computed } from 'vue';

export const useFullHeight = (elRef: Ref<any>, extraHeight = 0) => {
  const height = ref(0);

  const el = computed(() => elRef.value?.$el);

  watch(
    () => el.value,
    () => {
      const { top } = el.value.getBoundingClientRect();
      height.value = window.innerHeight - top - extraHeight;
    }
  );

  return { height };
};
