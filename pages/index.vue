<template>
  <div class="wrapper">
    <img src="~/assets/img/home/header.jpg" alt="靓号抢购" class="widthfull" />
    <CountDown class="mg-b10" />
    <div class="form-wrapper">
      <BaseForm animteBtn />
    </div>
    <MarqueeSingle class="mg10" />
    <img src="~/assets/img/home/img1.jpg" alt="产品说明" class="widthfull" />
    <img src="~/assets/img/home/img2.jpg" alt="产品说明" class="widthfull" />
    <div class="text-center expenses-wrap">
      <span class="expenses-text" @click="showExpenses()">
        <img src="~/assets/img/home/img4.jpg" alt="资费详情说明" class="widthfull" />
      </span>
    </div>
    <van-popup class="agreement-popup" v-model:show="show" round>
      <div class="agreement-wrap">{{ expensesText }}</div>
      <div class="agreement-confirm" @click="close()">我知道了</div>
    </van-popup>
    <img alt="领卡流程" class="widthfull" v-lazy="img3" />
  </div>
</template>

<script setup lang="ts">
import { expensesText } from '~/assets/js/static-data';
import img3 from '~/assets/img/home/img3.jpg';
import { CommonApi } from '@/api';
import { useMainStore } from '@/pinia';

useHead({
  title: 'Yun Yi',
  htmlAttrs: {
    lang: 'zh',
  },
});

// const { data } = await useFetch('/api/hello');

// import { getBaseData } from '@/composition/business/useGetPidData';

const mainStore = useMainStore();

let show = ref(false);
function showExpenses() {
  show.value = true;
}
function close() {
  show.value = false;
}

async function getBaseData(pid: string, href: string) {
  const mainStore = useMainStore();
  const param = { pid: pid, url: href };
  let res = await CommonApi.pageIdLocation(param);
  mainStore.setCjData(res);
}

function setPgaePid() {
  const url = useRequestURL();
  const searchParams = new URLSearchParams(url.searchParams);
  const params = Object.fromEntries(searchParams.entries());
  mainStore.setUrlParams(params);
  if (mainStore.urlParams.pid) getBaseData(mainStore.urlParams.pid, url.href);
}
setPgaePid();
</script>
