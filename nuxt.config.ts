// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  devServer: {
    port: 8010,
  },
  css: ['~/assets/css/base.css', '~/assets/css/main.less'],
  modules: ['@vant/nuxt'],
  vant: {
    lazyload: true,
  },
});
