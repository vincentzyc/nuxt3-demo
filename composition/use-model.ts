import { computed } from 'vue';

export interface TypeModelProps {
  modelValue: string;
}

export interface TypeModelEmits {
  (event: 'update:modelValue', newName: string): void;
}

export function useModelValue(props: TypeModelProps, emits: TypeModelEmits) {
  const model = computed<string>({
    get() {
      return props.modelValue;
    },
    set(val: string) {
      emits('update:modelValue', val);
    },
  });

  return {
    props,
    emits,
    model,
  };
}
