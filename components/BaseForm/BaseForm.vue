<template>
  <div class="form-wrap">
    <FormName id="custName" v-model="formData.custName"></FormName>
    <FormPhone id="contactNumber" v-model="formData.contactNumber"></FormPhone>
    <FormIDCard id="idCardNo" v-model="formData.idCardNo"></FormIDCard>
    <FormCity id="addressArr" v-model="formData.addressArr"></FormCity>
    <FormAddress id="address" v-model="formData.address"></FormAddress>
    <van-button
      type="primary"
      block
      round
      class="submit-button"
      color="linear-gradient(#eb4e4b,#e30023)"
      @click="submitOrder()"
      >立即领取</van-button
    >
    <Agreement title="填写并提交视为阅读并同意" :agrList="agrList" v-model:checked="formData.checked" class="mg-t10" />
  </div>
</template>

<script lang="ts" setup>
// import Check from '~/utils/business/form-check';
import { useMainStore } from '@/pinia';
// import { showToast } from 'vant';
import { closeLoading, openLoading } from '@/utils/loading';
import { CommonApi } from '@/api';
import { checkOut } from '@/utils/business/verify-data';
import './style.less';

// const FormCity = defineAsyncComponent(() => import('@/components/FormItem/FormCity.vue'));

// const DEFAULTLINK = 'https://h5.lipush.com/h5/index.html?id=2021080216415100047';

// const emits = defineEmits<{
//   (e: 'submit'): void;
// }>();
const mainStore = useMainStore();

const formData = reactive({
  addressArr: [],
  showForm: false,
  custName: '',
  city: '',
  district: '',
  province: '',
  address: '',
  contactNumber: '',
  idCardNo: '',
  checked: false,
});

let agrList = ref([
  {
    title: '《个人信息保护政策》',
    text: '个人信息保护政策',
  },
  {
    title: '《入网许可协议》',
    text: '入网许可协议',
  },
]);

const submitOrder = async () => {
  const tip = checkOut(formData);
  if (tip !== true) {
    showToast(tip);
    return false;
  }
  openLoading('正在提交');
  const params = {
    url: window.location.href || '',
    pid: mainStore.urlParams.pid || '',
    ...formData,
  };
  //   emits('submit');
  //   // 调接口提交
  let res = await CommonApi.submitForm<Record<string, any>>(params);
  console.log(res);
  closeLoading();
  //   if (res.responseCode === '0') {
  //     window.location.href = resData.url || DEFAULTLINK;
  //   } else {
  //     const newParam = { pid: params.pid, url: window.location.href };
  //     let newRes = await CommonApi.pageIdLocation(newParam);
  //     mainStore.setCjData(newRes);
  //     closeLoading();
  //     showToast(res.msg);
  //   }
};
</script>
