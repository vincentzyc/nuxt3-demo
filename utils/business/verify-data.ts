import Check from '@/utils/business/form-check';
import { scrollIntoView } from '@/utils/dom';

export const checkName = (v: string) => {
  const checkRes = Check.checkName(v);
  if (checkRes === true) {
    return true;
  }
  showToast(checkRes);
};
export const checkPhone = (v: string) => {
  const checkRes = Check.checkPhone(v);
  if (checkRes === true) {
    return true;
  }
  showToast(checkRes);
};
export const checkIDCard = (v: string) => {
  const checkRes = Check.checkIDCard(v);
  if (checkRes === true) {
    return true;
  }
  showToast(checkRes);
};
export const checkCity = (v: string[]) => {
  if (Array.isArray(v) && v.length === 3) {
    return true;
  }
};
export const checkAddress = (v: string) => {
  const checkRes = Check.checkAddress(v);
  if (checkRes === true) {
    return true;
  }
  showToast(checkRes);
};
export const checkOut = (formData: Record<string, any>) => {
  //校验表单
  const checkedName = Check.checkName(formData.custName);
  if (checkedName !== true) {
    const dom = document.getElementById('custName');
    if (dom) scrollIntoView(dom);
    return checkedName;
  }
  const checkedPhone = Check.checkPhone(formData.contactNumber);
  if (checkedPhone !== true) {
    const dom = document.getElementById('contactNumber');
    if (dom) scrollIntoView(dom);
    return checkedPhone;
  }
  const checkedIDCard = Check.checkIDCard(formData.idCardNo);
  if (checkedIDCard !== true) {
    const dom = document.getElementById('idCardNo');
    if (dom) scrollIntoView(dom);
    return checkedIDCard;
  }

  //判断收货省份是否为空
  if (!formData.addressArr[0]) {
    const dom = document.getElementById('addressArr');
    if (dom) scrollIntoView(dom);
    return '请选择收货省份';
  }

  //判断收货市区是否为空
  if (!formData.addressArr[1]) {
    const dom = document.getElementById('addressArr');
    if (dom) scrollIntoView(dom);
    return '请选择收货城市';
  }

  //判断收货区县是否为空
  if (!formData.addressArr[2]) {
    const dom = document.getElementById('addressArr');
    if (dom) scrollIntoView(dom);
    return '请选择收货地区';
  }

  const checkedAddress = Check.checkAddress(formData.address);
  if (checkedAddress !== true) {
    const dom = document.getElementById('address');
    if (dom) scrollIntoView(dom);
    return checkedAddress;
  }

  return true;
};
