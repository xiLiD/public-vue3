<template>
  <div class="iframe-box">
    <nav-bar></nav-bar>
  </div>
</template>
<script>
import NavBar from "./components/navbar";
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
  },
};
</script>
<style lang="less" scoped>
.iframe-box {
  width: 100%;
}
#app .app-main {
  padding: 0;
}
</style>