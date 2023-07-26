<template>
  <div class="flex align-middle form-item">
    <div class="form-label">身份证号</div>
    <div class="form-input flex-auto flex align-middle">
      <input
        @blur="checkIDCard(model)"
        :maxlength="18"
        placeholder="输入办理人身份证（已加密）"
        type="text"
        v-model.trim="model"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { checkIDCard } from '~/utils/business/verify-data';
import { TypeModelProps, TypeModelEmits, useModelValue } from '~/composition/use-model';

const props = defineProps<TypeModelProps>();

const emits = defineEmits<TypeModelEmits>();

const { model } = useModelValue(props, emits);
</script>
