// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 5000,
  },
  nitro: {
    timing: true, // 启用计时信息
    routeRules: {
      "/oauth/**": { proxy: "https://gameusd.com/oauth/**" },
      "/api/**": { proxy: "https://gameusd.com/api/**" },
    },
  },
});
