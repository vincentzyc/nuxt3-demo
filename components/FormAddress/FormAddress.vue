<template>
  <div class="flex align-middle form-item border-bnone">
    <div class="form-label">详细地址</div>
    <div class="form-input flex-auto flex align-middle">
      <input
        @blur="checkAddress(model)"
        :maxlength="50"
        placeholder="街道/镇+村/小区/楼+门牌号"
        type="text"
        v-model.trim="model"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { checkAddress } from '~/utils/business/verify-data';
import { TypeModelProps, TypeModelEmits, useModelValue } from '~/composition/use-model';

const props = defineProps<TypeModelProps>();

const emits = defineEmits<TypeModelEmits>();

const { model } = useModelValue(props, emits);
</script>
