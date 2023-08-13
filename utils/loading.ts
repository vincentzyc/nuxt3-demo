import { showLoadingToast, closeToast } from 'vant';

export function openLoading(text?: string): void {
  showLoadingToast({
    message: text || '',
    loadingType: 'spinner',
    duration: 0, // 持续展示 toast
    forbidClick: true, // 禁用背景点击
  });
}

export function closeLoading(): void {
  closeToast();
}
