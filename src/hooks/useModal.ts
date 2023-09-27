import { ref, h, type VNode, mergeProps, type RendererNode, type RendererElement } from 'vue';
import { Modal, type ModalProps } from 'ant-design-vue';

export interface ModalContext {
  contextHolder: () => VNode<
    RendererNode,
    RendererElement,
    {
      [key: string]: any;
    }
  >;
  modal: {
    open: () => void;
    close: () => void;
  };
  setContentProps: (props: Record<string, unknown>) => void;
}

/**
 * 完全兼容 ant-design-vue 的 Modal，参数与 ant-design-vue 的 Modal 一致，但是不支持 open 参数
 * @link https://antdv.com/components/modal-cn
 *
 * @param {Omit<ModalProps, 'open'>} props - 接收参数与 ModalProps 一致，除了 open 不需要传入。
 * @param {VNode} content - VNode 对象.
 * @return {ModalContext} An object containing the context holder and modal functions.
 *
 * @example const { contextHolder, modal, setContentProps } = useModal({ title: 'Modal Title' }, h('p', 'Content'))
 */
export const useModal = (
  props: Omit<ModalProps, 'open'>,
  content: VNode,
): ModalContext => {
  const visible = ref(false);
  const contentProps = ref({});

  const contextHolder = () =>
    h(
      Modal,
      mergeProps(props, {
        footer: null,
        destroyOnClose: true,
        open: visible.value,
        'onUpdate:open': (newValue: boolean) => {
          visible.value = newValue;
        },
      }),
      {
        default: () => h(content, mergeProps(contentProps.value)),
      }
    );

  const modal = {
    open() {
      visible.value = true;
    },
    close() {
      visible.value = false;
    }
  };

  const setContentProps = (props: Record<string, unknown>) => {
    contentProps.value = props;
  };

  return {
    contextHolder,
    modal,
    setContentProps
  };
};
