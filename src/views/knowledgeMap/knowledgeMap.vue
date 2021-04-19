<template>
  <div class="page-container common-css">
    <div class="page-main">
      <div class="page-menu">
        <el-form
          :inline="true"
          :model="formInline"
          ref="ruleForm"
          class="demo-form-inline"
          size="small"
        >
          <div class="menu-left">
            <el-form-item label="客户群选择">
              <el-select v-model="formInline.custom" placeholder="客户群选择">
                <el-option
                  :label="item.name"
                  :value="item.value"
                  v-for="(item, index) in menuOptions"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品选择">
              <el-select v-model="formInline.product" placeholder="请选择产品">
                <el-option
                  :label="item.name"
                  :value="item.value"
                  v-for="(item, index) in productMenu"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="时间日期">
              <el-date-picker
                v-model="formInline.datatime"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="$timestampToTime3"
              >
              </el-date-picker>
            </el-form-item>
          </div>
          <div class="menu-right">
            <el-form-item class="menu-btn">
              <el-button type="success" @click="resetForm" size="small"
                >重置条件</el-button
              >
              <el-button type="primary" @click="findTable" size="small"
                >查询</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="map-container line">
        <div
          class="center-container"
          id="Map"
          ref="Map"
          style="width: 100%; height: 400px"
        ></div>
        <!-- <div class="relation-box">
          <div class="relation-header"></div>
          <div class="relation-container"></div>
          <div class="relation-footer"></div>
        </div> -->
      </div>
      <div class="map-site line">
        <div class="map-footer common-shadow">
          <div class="map-title">其余产品列表</div>
          <ul class="map-list">
            <li
              v-for="(item, index) in legalList"
              :key="index"
              @click="setDisabled(index)"
              :data-index="index"
              :data-checkd="item.checked"
              :class="[{ checked: item.checked == true }]"
            >
              <span class="map-name">{{ item.name }} </span
              ><span class="map-info">{{ "（" + item.info + "）" }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import apiSend from "@/api/axios.js";
import base from "@/api/baseUrl";
import options from "./knowledgeMap.js";
import option from "./knowledgeMap.js";
var echarts = require("echarts");
// import { mapState } from "vuex";
import jsonData from "./json.js";
export default {
  data() {
    return {
      options: options,
      baseUrl:
        process.env.NODE_ENV === "development"
          ? base.development
          : base.production,
      queryData: {
        total: 0,
        pageSize: 10,
        pageNo: 1,
      },
      formInline: {
        custom: "", // 客户群
        product: "", // 产品
        datatime: "", // 日期
      },
      menuOptions: [
        { name: "客户群1", value: 1 },
        { name: "客户群2", value: 2 },
        { name: "客户群3", value: 3 },
        { name: "客户群4", value: 4 },
        { name: "客户群5", value: 5 },
        { name: "客户群6", value: 6 },
      ],
      productMenu: [
        { name: "产品1", value: 1 },
        { name: "产品2", value: 2 },
        { name: "产品3", value: 3 },
        { name: "产品4", value: 4 },
        { name: "产品5", value: 5 },
        { name: "产品6", value: 6 },
      ],
      tableData: [],
      legalList: [
        {
          name: "权益1",
          target: "权益2",
          id: 1,
          order_rate: 30,
          order_num: 40000,
        },
        {
          name: "权益2",
          target: "权益3",
          id: 2,
          order_rate: 30,
          order_num: 40000,
        },
        {
          name: "权益3",
          target: "权益4",
          id: 3,
          order_rate: 30,
          order_num: 40000,
        },
        {
          name: "权益4",
          target: "",
          id: 4,
          order_rate: 30,
          order_num: 40000,
        },
        {
          name: "权益2",
          target: "权益5",
          id: 5,
          order_rate: 30,
          order_num: 40000,
        },
        {
          name: "权益5",
          target: "权益4",
          id: 5,
          order_rate: 30,
          order_num: 40000,
        },
        {
          name: "权益3",
          target: "权益6",
          id: 5,
          order_rate: 30,
          order_num: 40000,
        },
        {
          name: "权益6",
          target: "权益4",
          id: 6,
          order_rate: 30,
          order_num: 40000,
        },
        {
          name: "权益6",
          target: "权益7",
          id: 6,
          order_rate: 30,
          order_num: 40000,
        },
        {
          name: "权益7",
          target: "权益4",
          id: 7,
          order_rate: 30,
          order_num: 40000,
        },
      ],
      disabledList: [],
      color: [
        "#62BD97",
        "#00AAFF",
        "#00B050",
        "#D2BCC1",
        "#62BD97",
        "#BDA273",
        "#B8BD53",
        "#BD7796",
        "#0070C0",
        "#73BD5F",
        "#C0B40f",
      ],
      styleList: [],
      position: {
        start: [],
        end: [],
      },
      legal: [], // 权益线
    };
  },
  computed: {},
  mounted() {
    this.initEcharts();
  },
  created() {
    this.findMapList();
    // this.findTable();
    window.jsonData = JSON.stringify(jsonData);
    window.setJSON = function (str) {
      let reg = /\\/g;
      //使用replace方法将全部匹配正则表达式的转义符替换为空
      return str.replace(reg, "");
    };
    console.log();
    // console.log(JSON.parse(this.jsonData(JSON.stringify(jsonData))));
    // console.log(JSON.parse());
  },
  methods: {
    jsonData(str) {
      let reg = /\\/g;
      //使用replace方法将全部匹配正则表达式的转义符替换为空
      return str.replace(reg, "");
    },
    // 设置随机颜色
    getColor() {
      return this.color[Math.floor(Math.random() * 11).toString(16)];
    },
    setTooltip() {
      let links = this.options.series[color0].links;
      this.options.tooltip = {
        formatter: function (params, ticket, callback) {
          console.log(params);
          console.log(links[params.dataIndex]);
          return links[params.dataIndex].source;
        },
      };
    },
    // 设置data
    setPosition() {
      let list = this.legalList;
      let start = this.position.start; //
      let end = this.position.end;
      let startItem = null,
        endItem = null;
      let data = [];
      // 跟据权益 线设置 首先获取当前查询的数据的总权益数 => 即
      // 先遍历每条线的起点 设置x值
      // 再遍历每条线的终点 设置y值
      let targetList = [];
      // 获取起点列表，同时也是所有球的列表
      list.forEach((item, index) => {
        // 数据中,若起点列表包含该起点,则排除
        let hasStart = start.some((styleItem) => styleItem.name === item.name);
        if (!hasStart) {
          start.push(item);
        }
        // 获取终点列表
        // 过滤单体球，没有终点线的单体球，即本身就是终点
        if (item.target === "") {
          end.push(item);
        }
        // 获得最先的起点项
        // 满足两个条件: 1. 在所有球的列表中 2. 没有终点指向该球
        if (
          hasStart &&
          start.some((styleItem) => styleItem.target !== item.target)
        ) {
          startItem = item;
        }
      });
      console.log(start);
      console.log(end);
      this.position = {
        startItem,
        start: start,
        end: end,
        endItem,
      };
      console.log(this.position);
      // 设置起点
      start.forEach((item, index) => {
        item["color"] = this.getColor();
        item["x"] = this.getExtends(list, item, "x");
        item["y"] = this.getExtends(list, item, "y");
      });
      console.log(start);
    },
    getExtends(result, menu, lead) {
      let item = result.filter((item) => item.target == menu.name) || []; // 获取指向 当前项 的项
      console.log(item);
      // let children = result.find(
      //   (childItem) => childItem.target == childItem.name
      // ); // 是否 指向
      // console.log(menu.target);
      // let index = item.findIndex((listItem) => listItem.name == menu.target); // 获取当前同级项
      // console.log(index);
      let len = item.length;
      console.log(menu, len);
      if (len > 0) {
        // 如果是当前继承的子分支
        return item[0][lead] + 100;
      } else {
        // 不是当前继承的分支
        return 0;
      }
    },
    // 设置links 线
    initStyle() {
      // 关系图 设置圈的颜色
      let links = [];
      let data = [];
      let list = this.legalList;
      links = list.map((item) => {
        let result = Object.assign({
          label: {
            show: true,
            formatter: item.info,
          },
          source: item.name,
          target: item.target,
        });
        return result;
      });
      this.setPosition();
      this.options.series[0].links = links;
      // this.options.series[0].data = data;
      this.setTooltip();
    },
    initEcharts() {
      // 基于准备好的dom，初始化echarts实例
      this.initStyle();
      let refs = this.$refs.Map;
      console.log(refs);
      console.log(document.getElementById("Map"));
      var myChart = echarts.init(document.getElementById("Map"));
      myChart.setOption(options);
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    findTable() {
      let self = this;
      let params = {
        pageNo: self.queryData.pageNo,
        pageSize: self.queryData.pageSize,
      };
      let key = self.formInline.region == 0 ? "prodCode" : "prodName";
      let key2 = key == "prodCode" ? "prodName" : "prodCode";
      params[key] = self.formInline.search;
      params[key2] = "";
      //   apiSend.canalFindChnnlInfo({ data: params }).then((res) => {
      //     self.tableData = res.data.data.records;
      //     self.queryData.total = res.data.data.total;
      //   });
    },
    findMapList() {
      let list = this.legalList;
      list.map((item) => {
        item.checked = false;
        item.info = "（订购率" + item.order_rate + "% ,人數" + item.order_num;
      });
      this.legalList = list;
    },
    setDisabled(index) {
      let legalList = this.legalList;
      legalList[index].checked = !legalList[index].checked;
      this.$set(this.legalList, index, legalList[index]);
    },
  },
};
</script>
<style lang="less">
.menu-right .menu-btn {
  display: flex !important;
}
.map-container {
  min-height: 500px;
  padding: 0 0 20px;
}
.relation-box {
  display: flex;
  justify-content: space-between;
}
.map-footer {
  padding: 10px 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .map-title {
    min-width: 100px;
  }
  .map-list {
    // width: 80%;
    // margin-left: 50px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 80%;
    li {
      padding: 5px 10px;
      margin-right: 15px;
      font-size: 14px;
      background-color: #409eff;
      color: #fff;
      border-radius: 5px;
      min-width: 30%;
      margin-top: 10px;
      cursor: pointer;
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: 0px;
      }
      .map-name {
        font-weight: bold;
      }
      .map-info {
        font-size: 12px;
      }
    }
    li:hover {
      box-shadow: 0 0 5px 0 #999;
    }
    li.checked {
      background-color: #ddd;
    }
  }
}
</style>