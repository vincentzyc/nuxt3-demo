<template>
  <div class="flex align-middle form-item">
    <div class="form-label">收货城市</div>
    <div @click="openCityPicker()" class="form-input flex-auto flex align-middle disabled-input">
      <div class="wg-input" :class="{ placeholder: !showValue }">{{ showValue ? showValue : '请选择收货城市' }}</div>
    </div>
    <CityPicker @selected="closePicker" :locationCity="locationCity" ref="domCityPicker" v-model:show="showPicker" />
  </div>
</template>

<script lang="ts" setup>
import { checkCity } from '~/utils/business/verify-data';

interface TypeModelProps {
  modelValue: string[];
}

interface TypeModelEmits {
  (event: 'update:modelValue', newName: string[]): void;
}

const props = defineProps<TypeModelProps>();

const emits = defineEmits<TypeModelEmits>();

const domCityPicker = ref();
const showPicker = ref(false);
const locationCity = ref([]);

const showValue = computed(() => {
  return props.modelValue.length > 0 ? props.modelValue.join(' ') : '';
});

const openCityPicker = () => {
  showPicker.value = true;
};
const closePicker = (val: string[]) => {
  if (Array.isArray(val) && val.length === 3) {
    emits('update:modelValue', val);
    checkCity(val);
  }
};
</script>
