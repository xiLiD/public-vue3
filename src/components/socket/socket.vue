<template></template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.sendMessage();
  },
  methods: {
    sendMessage() {
      // 【agentData：发送的参数；this.getConfigResult：回调方法】
      let name = "是的啵那可就是当年";
      this.socketApi.sendSock(name, this.getConfigResult);
    },
    getConfigResult(msg) {
      console.log(msg);
    },
  },
};
</script>
<style lang="less">
</style>