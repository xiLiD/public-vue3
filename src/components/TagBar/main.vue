
<template>
  <div class="yh-page">
    <h1>TabGroup演示</h1>
    <div class="desc">
      Demo源代码：
      <code>/examples/components/modules/TabGroupDemo.vue</code>
    </div>
    <div class="yh-block">
      <yh-tab-group
        @select="onTabSelected"
        :options="options"
        :default="0"
        :closable="true"
        ref="tg1"
        @close="close"
      ></yh-tab-group>
      <yh-tab-group
        @select="onTabSelected2"
        class="yh-dash-border"
        :options="options2"
        badgeField="value"
        ref="tg2"
        :default="0"
      ></yh-tab-group>
    </div>
  </div>
</template>
<script>
import tabgroup from "./TagsView/TagsView";
export default {
  name: "TabGroupDemo",
  data() {
    return {
      options: [
        "刷新",
        "添加",
        "移动",
        "查询",
        "清空",
        "Select",
        "Update Title",
      ],
      options2: [
        { title: "基金", value: 0 },
        { title: "理财", value: 1 },
        { title: "保险", value: 2 },
        { title: "贵金属", value: 3 },
        { title: "保险1", value: 4 },
        { title: "贵金属1", value: 5 },
      ],
      options3: [
        "基金",
        { title: "理财", value: 2 },
        { title: "保险", value: "check" },
        { title: "贵金属", value: "cross" },
        "国债",
        "银行卡",
        "存单",
        "产品组合",
      ],
    };
  },
  methods: {
    close(index) {
      this.$refs.tg1.remove(index);
    },
    onTabSelected: function (index, data) {
      var tg2 = this.$refs.tg2;
      switch (index) {
        case 0:
          this.options2 = this.options3;
          break;
        case 1:
          tg2.addTab("New Tab", true);
          break;
        case 2:
          tg2.moveTabWith("value", 5, 0, true);
          break;
        case 3:
          alert("tab " + JSON.stringify(tg2.tabWith("value", 2)));
          break;
        case 4:
          tg2.clear();
          break;
        case 5:
          tg2.select(3);
          break;
        case 6:
          this.options2[1].title = "Test";
          break;
      }
    },
    onTabSelected2: function (index, data) {},
  },
  components: {
    "yh-tab-group": tabgroup,
  },
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
</style>