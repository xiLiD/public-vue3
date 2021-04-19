<template>
  <div class="income-part">
    <div class="nav-part">
      <div class="nav-title">收入预测专题</div>
      <el-menu
        :default-active="activeIndex.toString()"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template v-for="(firstItem, firstIndex) in layout">
          <template v-if="showChildren(firstItem.children, firstIndex)">
            <el-menu-item
              :index="firstIndex.toString()"
              :key="firstIndex.toString()"
              >{{ firstItem.name }}</el-menu-item
            >
          </template>
          <template v-else>
            <el-submenu
              :index="firstIndex.toString()"
              :key="firstIndex.toString()"
            >
              <template slot="title">{{ firstItem.name }}</template>
              <template v-for="(secondItem, secondIndex) in firstItem.children">
                <template
                  v-if="
                    showChildren(
                      secondItem.children,
                      firstIndex + '-' + secondIndex
                    )
                  "
                >
                  <el-menu-item
                    :index="firstIndex + '-' + secondIndex"
                    :key="firstIndex + '-' + secondIndex"
                    >{{ secondItem.name }}</el-menu-item
                  >
                </template>
                <template v-else>
                  <el-submenu
                    :index="firstIndex + '-' + secondIndex"
                    :key="firstIndex + '-' + secondIndex"
                  >
                    <template slot="title">{{ secondItem.name }}</template>
                    <template
                      v-for="(thirdItem, thirdIndex) in secondItem.children"
                    >
                      <template
                        v-if="
                          showChildren(
                            thirdItem.children,
                            firstIndex + '-' + secondIndex + '-' + thirdIndex
                          )
                        "
                      >
                        <el-menu-item
                          :index="
                            firstIndex + '-' + secondIndex + '-' + thirdIndex
                          "
                          :key="
                            firstIndex + '-' + secondIndex + '-' + thirdIndex
                          "
                          >{{ thirdItem.name }}</el-menu-item
                        >
                      </template>
                    </template>
                  </el-submenu>
                </template>
              </template>
            </el-submenu>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>
<script>
// import layout from "js/layout.js";
export default {
  data() {
    return {
      layout: [
        { name: "汇总收入", children: [] },
        {
          name: "个人市场出账收入预测",
          children: [
            { name: "个人市场收入" },
            { name: "个人套餐" },
            { name: "个人价值包" },
            { name: "个人新业务" },
            { name: "个人政企" },
            { name: "个人家庭" },
            { name: "个人套外" },
          ],
        },
        { name: "政企市场产品收入预测", children: [{ name: "政企收入" }] },
        { name: "家庭市场产品收入预测", children: [{ name: "家庭收入" }] },
        {
          name: "营销资源预测",
          children: [
            { name: "营销资源汇总" },
            { name: "折扣折让" },
            { name: "积分兑换" },
            { name: "终端补贴" },
            { name: "和包券" },
          ],
        },
        {
          name: "结算收入预测",
          children: [
            { name: "结算汇总" },
            { name: "结算收入" },
            { name: "信息费结算收入" },
            { name: "信息费结算支出" },
            { name: "流量递延收入" },
          ],
        },
        {
          name: "动态导入",
          children: [{ name: "动态举措导入" }, { name: "结算收入导入" }],
        },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    handleSelect() {},
    showChildren(array, index) {
      if (Object.prototype.toString.call(array) == "[object Array]") {
        return !array.length;
      } else {
        return !array;
      }
      //   return array
    },
  },
};
</script>
<style lang="less" scoped>
.nav-title {
  font-size: 18px;
  font-weight: 600;
  z-index: 999;
  position: relative;
  color: #fff;
  line-height: 60px;
  height: 60px;
  padding: 0 15px;
  display: flex;
  justify-items: center;
  align-items: center;
  font-family: "Microsoft YaHei";
}
.income-part {
  width: 100%;
}
.nav-part {
  display: flex;
  background-color: rgb(84, 92, 100);
  width: 100%;
}
</style>
