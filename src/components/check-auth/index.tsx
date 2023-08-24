import { defineComponent, type PropType } from 'vue';
import { checkAuth } from '@/utils/authority';

export default defineComponent({
  name: 'check-auth',
  props: {
    auth: {
      type: Array as PropType<string[]>,
      required: true,
      default: () => []
    }
  },
  setup(props, { slots }) {
    return <>{checkAuth(props.auth) && slots.default?.()}</>;
  }
});
