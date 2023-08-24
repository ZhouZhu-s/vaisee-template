import { checkAuth } from '@/utils/authority';
import type { Directive, DirectiveBinding } from 'vue';

export const auth: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<string[]>) {
    const hasPermission = checkAuth(binding.value);
    if (!hasPermission) {
      el.remove();
    }
  }
};
