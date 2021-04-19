<template>
  <div>
    <!-- <search-tab></search-tab> -->
    <div class="tab-wrapper">
      <ul>
        <li>首页</li>
        <li>版式</li>
        <li>发送</li>
      </ul>
    </div>
  </div>
</template>

<script>
import searchTab from "@/components/searchModal/index.vue";
export default {
  methods: {
    handleClick (row) {
      console.log(row);
    }
  },
  components: {
    searchTab
  },
  data () {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ]
    };
  },
  mounted () {
    console.log(234)
  }
};
</script>
<style lang="less">
.tab-wrapper {
  height: 50px;
  background: #fff;
  display: block;
}
</style>
