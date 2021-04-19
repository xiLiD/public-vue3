<template>
  <div>
    <step-template></step-template>
  </div>
</template>
<script>
import StepTemplate from "./components/steps/index.vue";
export default {
  components: {
    StepTemplate,
  },
  data() {
    return {
      steps: [
        {
          text: "步骤一",
          desc: "描述信息",
        },
        {
          text: "步骤二",
          desc: "描述信息",
        },
        {
          text: "步骤三",
          desc: "描述信息",
        },
        {
          text: "步骤四",
          desc: "描述信息",
        },
      ],
      active: 0,
    };
  },
};
</script>
<style scoped>
</style>