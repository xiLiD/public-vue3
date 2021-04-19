<template>
  <div class="steps-box">
    <div class="steps-container">
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
      <div class="person-select">
        <person-select></person-select>
      </div>
    </div>
    <div class="btn-operate">
      <el-button @click="next" size="small" class="btn-next">{{
        active != 2 ? "下一步" : "完成"
      }}</el-button>
    </div>
  </div>
</template>
 
<script>
import PersonSelect from "../personSelect/index.vue";
export default {
  components: {
    PersonSelect,
  },
  data() {
    return {
      active: 0,
    };
  },

  methods: {
    next() {
      if (this.active == 2) {
        this.$message.success("已完成");
        return;
      }
      this.active++;
    },
  },
};
</script>
<style scoped lang="less">
.steps-box {
  width: 50%;
  min-width: 800px;
  padding: 15px 20px;
  box-sizing: border-box;
  box-shadow: 0 0 5px #999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  .steps-container {
    min-height: 400px;
    position: relative;
    .btn-next {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  .btn-operate {
    text-align: right;
    margin-top: 5px;
  }
}
</style>