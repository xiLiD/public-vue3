<template>
  <div>
    <search-tab></search-tab>
    <!-- <lost-net></lost-net> -->
  </div>
</template>

<script>
import searchTab from "@/components/searchModal/index.vue";
import lostNet from "@/components/lostNet/lost";
import apiSend from "@/api/axios.js";
export default {
  methods: {
    handleClick (row) {
      console.log(row);
    }
  },
  components: {
    searchTab,
    lostNet
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
  created () {
    console.log(123);
    let getParams = {
      name: 1,
      age: 18
    };
    apiSend
      .getToken({ data: getParams })
      .then(res => {
        console.log("success", res);
      })
      .catch(err => {
        console.log("error", err);
      });
  }
};
</script>
<style lang="stylus"></style>
