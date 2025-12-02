import { defineComponent, shallowRef } from 'vue';

export default defineComponent({
  name: 'InputLabel',
  props: {},
  setup() {
    const inputRef = shallowRef<HTMLInputElement>();

    const handleFocus = (ev: FocusEvent) => {
      console.log('handleFocus');
    };

    const handleBlur = (ev: FocusEvent) => {
      console.log('handleBlur');
    };


    // expose({
    //   focus() {
    //     inputRef.value?.focus();
    //   },
    //   blur() {
    //     inputRef.value?.blur();
    //   },
    // });

    return () => (
      <span title={'xxx'}>
        <input
          ref={inputRef}
          value={''}
          readonly
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <span>AA</span>
      </span>
    );
  },
});
