import { PageIdLocation } from '@/api/types/common';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    urlParams: {} as Record<string, string>,
    counter: 0,
    cjData: null as PageIdLocation | null,
  }),
  getters: {
    doubleCount: state => state.counter * 2,
    doubleCountPlusOne(): number {
      return this.doubleCount * 2 + 1;
    },
    locationCity: state => [state.cjData?.province || '', state.cjData?.city || ''],
  },
  actions: {
    setUrlParams(payload: Record<string, string>) {
      this.urlParams = payload;
    },
    setCjData(payload: PageIdLocation | null) {
      this.cjData = payload;
    },
    reset() {
      this.counter = 0;
    },
  },
});
