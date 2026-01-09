import { onBeforeUnmount } from 'vue';

/**
 * 清理焦点以防止内存泄漏
 * 当一个获得焦点的输入框被销毁时，某些浏览器可能不会正确清理焦点状态，导致内存泄漏
 * 此函数通过创建一个临时元素来接管焦点，然后立即销毁，从而避免泄漏
 * @see https://github.com/arco-design/arco-design-vue/issues/3629
 */
export function useFocusCleanup() {
  onBeforeUnmount(() => {
    const fakeInput = document.createElement('input');
    fakeInput.focus();
    fakeInput.blur();
    fakeInput.remove();
  });
}
