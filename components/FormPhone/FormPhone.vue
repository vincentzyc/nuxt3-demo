<template>
  <div class="flex align-middle form-item">
    <div class="form-label">联系电话</div>
    <div class="form-input flex-auto flex align-middle">
      <input
        @blur="checkPhone(model)"
        :maxlength="11"
        placeholder="输入有效联系电话并保持畅通"
        type="tel"
        v-model.trim="model"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { checkPhone } from '~/utils/business/verify-data';
import { TypeModelProps, TypeModelEmits, useModelValue } from '~/composition/use-model';

const props = defineProps<TypeModelProps>();

const emits = defineEmits<TypeModelEmits>();

const { model } = useModelValue(props, emits);
</script>
