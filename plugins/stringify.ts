export default definePayloadPlugin((nuxtApp) => {
  console.log("definePayloadPlugin", nuxtApp.payload.data);
});
