<template>
  <div class="flex align-middle form-item">
    <div class="form-label">领卡姓名</div>
    <div class="form-input flex flex-auto align-middle">
      <input
        @blur="checkedName(model)"
        :maxlength="15"
        placeholder="输入办理人姓名（已加密）"
        type="text"
        v-model.trim="model"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    required: true,
    type: String,
  },
});

const emits = defineEmits(['update:modelValue']);

const model = computed<string>({
  get() {
    return props.modelValue;
  },
  set(val: string) {
    emits('update:modelValue', val);
  },
});

function checkedName(v: string) {
  const checkRes = checkName(v);
  if (checkRes === true) return true;
  showToast(checkRes);
}
function checkName(value: string) {
  if (!value) return '请输入领卡姓名';
  if (/^[\u4e00-\u9fa5\\·]{2,20}$/.test(value)) return true;
  if (value.length < 2 || value.length > 20) return '姓名长度不能小于2或超过20';
  return '姓名必须为汉字';
}
</script>
