<template>
  <div class="flex align-middle form-item">
    <div class="form-label">领卡姓名</div>
    <div class="form-input flex flex-auto align-middle">
      <input
        @blur="checkName(model)"
        :maxlength="15"
        placeholder="输入办理人姓名（已加密）"
        type="text"
        v-model.trim="model"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { checkName } from '~/utils/business/verify-data';

interface TypeModelProps {
  modelValue: string;
}

interface TypeModelEmits {
  (event: 'update:modelValue', newName: string): void;
}

const props = defineProps<TypeModelProps>();

const emits = defineEmits<TypeModelEmits>();

const model = computed<string>({
  get() {
    return props.modelValue;
  },
  set(val: string) {
    emits('update:modelValue', val);
  },
});
</script>
