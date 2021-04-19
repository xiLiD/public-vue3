<template>
  <div class="input-box">
    <!-- <input type="file" @change="getFile" class="files" /> -->
    <input-excel></input-excel>
    <!-- <socket></socket> -->
    <!-- <up-load></up-load> -->
  </div>
</template>
<script>
import inputExcel from "./components/inputExcel.vue";
import socket from "@/components/socket/socket";
import upLoad from "@/components/upload/index";
export default {
  data() {
    return {};
  },
  components: { inputExcel, socket, upLoad },
  methods: {
    getFile(e) {
      let files = document.querySelector(".files");
    },
  },
};
</script>
<style lang="less">
.input-box {
  padding: 20px 20px 20px 15px;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
}
</style>