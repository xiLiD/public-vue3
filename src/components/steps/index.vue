<template>
  <div class="steps-box">
    <el-steps :active="active" finish-status="success" :align-center="true">
      <el-step
        title="步骤 1"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤 2"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step title="步骤 3" description="这段就没那么长了"></el-step>
    </el-steps>

    <el-button style="margin-top: 12px" @click="next" size="small"
      >下一步</el-button
    >
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
  },
};
</script>
<style scoped>
.steps-box {
  width: 50%;
  min-width: 800px;
  min-height: 400px;
  padding: 15px 20px;
  box-sizing: border-box;
  box-shadow: 0 0 5px #999;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;
}
</style>