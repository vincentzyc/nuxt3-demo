<template>
  <van-popup v-model:show="isShow" class="agreement-popup" style="max-width: 576px" teleport="body" @closed="close">
    <div class="agreement-wrap">
      <p v-html="text"></p>
    </div>
    <div class="agreement-confirm" @click="close()">我知道了</div>
  </van-popup>
</template>

<script setup lang="ts">
import './style.less';
const props = defineProps<{
  show: boolean;
  text: string;
}>();
const emits = defineEmits<{
  (e: 'update:show', bool: boolean): void;
}>();

let isShow = computed({
  get: () => props.show,
  set: v => emits('update:show', v),
});

function close() {
  isShow.value = false;
}
</script>
