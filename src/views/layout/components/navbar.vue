<template>
  <div class="headerContent box-start align-end Pl-30">
    <div
      class="menuItem box-v-center"
      :class="{ activeMenu: activeIndex === 1 }"
      @click="goPage('/index')"
    >
      首页
    </div>
    <div
      class="menuItem box-v-center"
      :class="{ activeMenu: activeIndex === 2 }"
      @click="goPage('/turnNotification')"
    >
      携转战况通报
    </div>
    <div
      class="menuItem box-v-center"
      :class="{ activeMenu: activeIndex === 3 }"
    >
      <!-- 个人市场出账收入预测 -->
      <el-dropdown trigger="click" @command="goPage">
        <span class="el-dropdown-link">
          个人市场出账收入预测<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="/markIncome"
            >个人市场收入</el-dropdown-item
          >
          <el-dropdown-item command="/markIncome/plan"
            >个人套餐</el-dropdown-item
          >
          <el-dropdown-item command="/markIncome/valuePack"
            >个人价值包</el-dropdown-item
          >
          <el-dropdown-item command="/markIncome/newBussiness"
            >个人新业务</el-dropdown-item
          >
          <el-dropdown-item command="/markIncome/company"
            >个人政务</el-dropdown-item
          >
          <el-dropdown-item command="/markIncome/family"
            >个人家庭</el-dropdown-item
          >
          <el-dropdown-item command="/markIncome/outside"
            >个人套外</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div
      class="menuItem box-v-center"
      :class="{ activeMenu: activeIndex === 4 }"
      @click="goPage('/turnPortrait')"
    >
      携转客户画像
    </div>
    <div
      class="menuItem box-v-center"
      :class="{ activeMenu: activeIndex === 5 }"
      @click="goPage('/leaflet')"
    >
      地图
    </div>
  </div>
</template>

<script>
import routeDate from "@/router/routeDate.js";
export default {
  data() {
    return {
      activeIndex: 1,
    };
  },
  watch: {
    $route: {
      handler(to, from) {
        this.activeIndex = to.meta.navbar;
      },
      immediate: true,
    },
  },
  methods: {
    goPage(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.headerContent {
  height: 58px;
  background-color: white;
  position: fixed;
  z-index: 10;
  top: 0px;
  width: 100%;
  max-width: 1680px;
  box-sizing: border-box;
}
.menuItem {
  height: 48px;
  padding: 0px 20px;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 8px 8px 0px 0px;
  margin-left: 15px;
}
.menuItem:hover {
  background-color: #f5f5fc;
}
.activeMenu {
  background-color: #f5f5fc;
  color: #3eb4fa;
  font-weight: 600;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
