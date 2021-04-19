<template>
  <div class="portraitContent">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="已携转客户画像"
                   name="first">
        <turnedPortrait v-if="activeName === 'first'" />
      </el-tab-pane>
      <el-tab-pane label="潜在携转客户画像"
                   name="second">
        <latentPortrait v-if="activeName === 'second'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import turnedPortrait from "@/components/turnedPortrait";
import latentPortrait from "@/components/latentPortrait";
export default {
  name: "TurnPortrait",
  components: { turnedPortrait, latentPortrait },
  data () {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
.portraitContent {
  background-color: white;
  width: 100%;
  height: calc(100vh - 78px);
  margin-top: 20px;
  padding: 10px 20px;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>
