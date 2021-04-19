<template>
  <div class="nav-bar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="(menuItem, menuIndex) in menuList">
        <el-submenu
          :index="menuIndex + ''"
          v-if="menuItem.children"
          :key="menuIndex"
        >
          <template slot="title">{{ menuItem.name }}</template>
          <el-menu-item
            :index="childremItem.redirectUrl"
            v-for="(childremItem, childrenIndex) in menuItem.children"
            :key="childrenIndex"
            >{{ childremItem.name }}</el-menu-item
          >
        </el-submenu>
        <el-menu-item :index="menuItem.redirectUrl" :key="menuIndex" v-else>{{
          menuItem.name
        }}</el-menu-item>
      </template>
    </el-menu>
    <div class="iframe-wrapper">
      <div class="iframe-container">
        <iframe :src="iframeUrl" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "",
      iframeUrl: "",
      menuList: [
        {
          name: "携转",
          redirectUrl: "../resource/xiezhuan/index.html",
        },
        {
          name: "IOP",
          children: [
            {
              name: "IOP活动监控",
              redirectUrl: "../resource/jiankong/index.html",
            },
            {
              name: "IOP调度协同",
              redirectUrl: "../resource/xietong/index.html",
            },
            {
              name: "IOP销售产品",
              redirectUrl: "../resource/product/index.html",
            },
          ],
        },
        {
          name: "诈骗专题",
          redirectUrl: "../resource/swindle/index.html",
        },
        {
          name: "知识谱图",
          redirectUrl: "../resource/knowweb/index.html",
        },
      ],
    };
  },
  computed: {},
  mounted() {
    this.iframeUrl = this.menuList[0] ? this.menuList[0].redirectUrl : "";
    this.activeIndex = this.menuList[0] ? this.menuList[0].redirectUrl : "";
  },
  methods: {
    handleSelect(key, keyPath) {
      this.iframeUrl = key;
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less">
.iframe-wrapper {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;

  .iframe-container {
    padding: 20px 30px;
    box-shadow: 0 0 5px #999;
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;
  }
  iframe {
    width: 100%;
    height: 100vh;
  }
}
</style>