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
            <el-form-item label="地市选择">
              <el-select
                v-model="formInline.city"
                placeholder="请选择城市"
                disabled
              >
                <el-option
                  :label="item.name"
                  :value="item.value"
                  v-for="(item, index) in cityOptions"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="时间日期">
              <el-date-picker
                v-model="formInline.datatime"
                align="right"
                type="month"
                placeholder="选择月份"
                format="yyyy-MM"
                value-format="yyyy-MM"
                disabled
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="产品选择">
              <div @click="showSelect" class="product-text ellipsis">
                {{ productDescribe }}
              </div>
            </el-form-item>
          </div>
          <div class="menu-right">
            <el-form-item class="menu-btn">
              <el-button type="success" @click="resetForm" size="small"
                >重置条件</el-button
              >
              <el-button type="primary" @click="beforeHttp" size="small"
                >查询</el-button
              >
              <el-button type="success" @click="outPut" size="small"
                >导出</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="map-container line">
        <!-- <div
          class="center-container"
          id="Map"
          ref="Map"
          style="width: 100%; height: 400px"
        ></div> -->
        <div class="type-form-box">
          <el-form
            :inline="true"
            :model="formInline"
            ref="typeForm"
            class="type-form-inline"
            size="small"
          >
            <div class="type-line">
              <el-form-item label="根据类型排序">
                <el-select v-model="formInline.type" placeholder="选择类型">
                  <el-option
                    :label="item.name"
                    :value="item.value"
                    v-for="(item, index) in typeOptions"
                    :key="index"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="relation-box" v-if="allList.length > 0">
          <div class="relation-header">
            {{ searchName }}
          </div>
          <div class="relation-container">
            <div
              class="relation-item"
              v-for="(item, index) in allList"
              :key="index"
            >
              <div class="realtion-item-left">
                <div
                  class="realtion-cur"
                  v-for="(resultItem, resultIndex) in item.result"
                  :key="resultIndex"
                >
                  <div class="pass-wrapper">
                    <div class="pass-contain">
                      <div class="dot"></div>
                    </div>
                    <div class="pass-contain">
                      <div class="dot"></div>
                    </div>
                    <div class="pass-contain">
                      <div class="dot"></div>
                    </div>
                  </div>
                  <div
                    class="relation-left"
                    v-for="(cItem, cIndex) in resultItem.children"
                    :key="cIndex"
                  >
                    <div
                      class="relation-line"
                      :style="{ height: resultItem.Height + 'px' }"
                      v-if="cIndex == 0"
                    >
                      <div style="position: relative; z-index: 99">
                        {{ resultItem.user_rela }}
                      </div>
                      <div
                        class="to-right iconfont icon-xianxingtubiaozhizuomoban-12"
                      ></div>
                    </div>
                    <div
                      class="relation-ele"
                      :style="{ 'background-color': cItem.color }"
                    >
                      {{ cItem.name }}
                    </div>

                    <div
                      class="relation-data-info"
                      v-if="cIndex == resultItem.children.length - 1"
                    >
                      {{ resultItem.info }}
                    </div>
                    <div
                      class="relation-line"
                      :style="{ height: resultItem.Height + 'px' }"
                    >
                      <div style="position: relative; z-index: 99">
                        {{ cItem.describe }}
                      </div>
                      <div
                        class="to-right iconfont icon-xianxingtubiaozhizuomoban-12"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="relation-name"
                v-if="item.name"
                :style="{ 'background-color': item.color }"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="map-site line">
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
      </div> -->
    </div>

    <el-dialog
      title="产品列表"
      :visible.sync="productInfo.dialogVisible"
      width="80%"
      style="min-width: 691px"
      class="checkbox-product"
    >
      <div class="combo-menu">
        <div class="combo-info" v-for="(item, index) in comboList" :key="index">
          <div
            :class="[
              'combo-title',
              { 'line-active': comboIndex == index },
              { 'un-combo': index == comboList.length - 1 },
            ]"
            @click="changeCombo($event)"
            :data-num="index"
            :data-name="item.name"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div>
        <el-checkbox
          :indeterminate="productInfo.isIndeterminate"
          v-model="productInfo.checkAll"
          @change="handleCheckAllChange"
          >全选</el-checkbox
        >
        <div style="margin: 15px 0"></div>
        <el-checkbox-group
          v-model="productInfo.checkedCities"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox
            border
            v-for="(item, index) in productInfo.cities"
            :label="item"
            :key="index"
            >{{ item.name }}</el-checkbox
          >
        </el-checkbox-group>
        <div class="checkbox-btn">
          <el-button type="success" @click="sureSelect" size="small"
            >确定</el-button
          >
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import apiSend from "@/api/axios.js";
import base from "@/api/baseUrl";
// import { mapState } from "vuex";
import jsonData from "./json.js";
import resultData from "./result";
// const cityOptions = [
//   "爱奇艺会员",
//   "腾讯视频会员",
//   "优酷会员",
//   "哔哩哔哩会员",
//   "芒果TV会员",
//   "咪咕视频会员",
//   "酷狗会员",
//   "QQ音乐会员",
//   "酷我会员",
//   "咪咕音乐会员",
//   "掌阅会员",
//   "喜酷狗会员马拉雅会员",
//   "QQ阅读会员",
//   "蜻蜓FM会员",
//   "咪咕阅读会员",
//   "掌阅会员",
//   "网易云音乐会员",
// ];
import comboData from "./data.js";
import a from "./json.js";
export default {
  data() {
    return {
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
        custom: "group1", // 客户群
        product: "", // 产品
        datatime: "2020-10", // 日期
        type: "1", // 类型选择
        city: "732",
      },
      typeOptions: [
        { name: "推荐人数", value: "1" },
        { name: "领取率", value: "2" },
      ],
      menuOptions: [
        { name: "校园客户", value: "group1" },
        { name: "头部保拓客户", value: "group2" },
        { name: "头部保拓四异客户", value: "group3" },
        { name: "边缘客户", value: "group4" },
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
      legalList: [],
      disabledList: [],
      color: [
        "#ea9999",
        "#f9cb9c",
        "#ffe599",
        "#b6d7a8",
        "#fce5cd",
        "#e6b8af",
        "#d9ead3",
        "#cfe2f3",
        "#93c47d",
        "#73BD5F",
        "#d0e0e3",
      ],
      linear: [
        "#ff9900",
        "#e69138",
        "#f6b048",
        "#f6b26b",
        "#f1c232",
        "#ffd966",
        "#ffe599",
        "#fce5cd",
        "#fff2cc",
        "#d9ead3",
      ],
      colorList: [],
      styleList: [],
      position: {
        start: [],
        end: [],
      },
      legal: [], // 权益线
      allList: [],
      productInfo: {
        dialogVisible: false,
        checkAll: false,
        checkedCities: [],
        cities: [],
        isIndeterminate: true,
        productText: "",
      }, // 产品数据
      comboList: [],
      cityOptions: [
        { name: "长沙市", value: "731" },
        { name: "岳阳市", value: "730" },
        { name: "益阳市", value: "737" },
        { name: "常德市", value: "736" },
        { name: "张家界市", value: "744" },
        { name: "湘西土家族苗族自治区", value: "743" },
        { name: "怀化市", value: "745" },
        { name: "娄底市", value: "738" },
        { name: "湘潭市", value: "732" },
        { name: "株洲市", value: "733" },
        { name: "邵阳市", value: "739" },
        { name: "衡阳市", value: "734" },
        { name: "永州市", value: "746" },
        { name: "郴州市", value: "735" },
      ],
      comboIndex: 0,
      interval: "",
      httpStatus: "",
      time: 0,
      timer: 0,
      showSearch: false,
      searchName: "",
    };
  },
  computed: {
    productDescribe() {
      if (this.productInfo.checkedCities.length == 0) {
        return "选择产品";
      }
      let text = "";
      let len = this.productInfo.checkedCities.length;
      for (let prop in this.productInfo.checkedCities) {
        if (text.length < 10) {
          if (this.productInfo.checkedCities[prop].length < 10) {
            text += this.productInfo.checkedCities[prop].name;
          } else {
            text += this.productInfo.checkedCities[prop].name.substring(0, 10);
          }
          text = text + "...等" + len + "个";
          break;
        }
      }
      return text;
    },
  },
  mounted() {},
  created() {
    this.setCombo();
    this.productInfo.checkedCities = comboData[Object.keys(comboData)[0]].data;
    // this.getData();
  },
  methods: {
    legalHeader() {
      // if (this.legalList.length == 0) {
      //   return "";
      // }
      // let name = this.legalList[0].path.split("|")[0];
      // if (name.indexOf("_") != -1) {
      //   name = name.split("_")[0];
      // }
      let custom = this.formInline.custom;
      let itemResult = this.menuOptions.find((item) => item.value == custom);
      return itemResult.name;
    },
    beforeHttp() {
      let that = this;
      // debugger;
      console.log(that.timer);
      this.searchName = this.legalHeader();
      console.log(this.searchName);
      apiSend
        .getStatus({ isLoading: false, loadingTime: that.timer })
        .then((res) => {
          this.httpStatus = res.data.data;
          let httpStatus = this.httpStatus;
          console.log("查询状态：", httpStatus);
          // debugger;
          if (httpStatus === "0" || httpStatus === "1") {
            // 请求

            if (!that.showSearch) {
              console.log(that.showSearch, "锁内");
              this.getNode();
              return;
            }
            this.beforeHttp();
            return;
          } else if (httpStatus === "2") {
            that.getData();
            return;
          } else if (httpStatus === "3") {
            this.$message({
              type: "error",
              message: "查询异常!",
            });
            return;
          }
        })
        .catch((err) => {
          // that.timer = 10000;
          // that.beforeHttp();
        });
    },
    getGroup() {
      apiSend
        .getGroup({})
        .then((res) => {
          console.log(res);
          let result = res.data.data;
          result.forEach((item, index) => {
            item.group = "group" + (index + 1);
          });
          this.menuOptions = res.data.data;
          this.formInline.custom = this.menuOptions[0].group;
          this.getNode();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkForm() {
      let formInline = this.formInline;
      let arr = [];
      this.productInfo.checkedCities.forEach((item) => {
        arr.push(item.id);
      });
      if (arr.length == 0) {
        this.$message({ type: "warn", message: "请选择产品!" });
        return false;
      }
      if (formInline.datatime == "") {
        this.$message({ type: "warn", message: "请选择日期!" });
        return false;
      }
    },
    getNode() {
      if (!this.checkForm) return;

      let arr = [];
      this.productInfo.checkedCities.forEach((item) => {
        arr.push(item.id);
      });
      let str = arr.join("|");
      let params = {
        groupId: this.formInline.custom,
        areaId: this.formInline.city,
        searchDate: this.formInline.datatime,
        productId: str,
        orderType: this.formInline.type == "1" ? "count" : "rate",
      };
      // resultData.data.content.forEach((item) => {
      //   for (var prop in item.nodeName) {
      //     let result = decodeURI(JSON.parse(item.nodeName[prop]));
      //     console.log(result);
      //     item.nodeName[prop] = result;
      //   }
      // });
      // console.log(resultData);
      // this.legalList = resultData.data.content;
      // this.findMapList();
      // console.log("461", resultData);
      apiSend
        .getNode({ data: params, loadingTime: this.timer })
        .then((res) => {
          // let result;
          // try {
          //   result = JSON.parse(res.data.data).content;
          // } catch (error) {
          //   result = res.data.data.content;
          // }
          // this.legalList = result;
          // this.findMapList();
          if (res.data && res.data.code == "0") {
            this.timer = 20000;
            this.showSearch = true;
            this.beforeHttp();
          } else {
            this.$message.error("请求异常!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getData() {
      apiSend.getNodeData().then((res) => {
        if (!res.data.data) {
          return;
        }
        let result;
        try {
          result = JSON.parse(res.data.data).content;
        } catch (error) {
          result = res.data.data.content;
        }

        if (Object.prototype.toString.call(result) == "[object Array]") {
          this.httpStatus = "2";
          this.timer = 0;
        }

        this.legalList = result;
        this.findMapList();
        this.showSearch = false;
      });
    },
    // changeType() {
    //   let menu = this.formInline.type;
    //   console.log(menu);
    //   let key = menu == "2" ? "number" : "count";
    // },
    sortDown(key) {
      // this.allList.sort((a, b) => b[key] - a[key]);
      // this.allList.forEach((item) => {
      //   let name = "";
      //   item.result.sort(function (a, b) {
      //     if (b[key] == a[key]) {
      //       name = name == "number" ? "count" : "number";
      //     } else {
      //       name = key;
      //     }
      //     return b[name] - a[name];
      //   });
      // });
      let Max = this.allList[0].result[0][key]; // 最大数量
      this.allList.forEach((item) => {
        item.result.forEach((resultItem) => {
          resultItem.Height = 19 + (resultItem[key] / Max).toFixed(2) * 30;
        });
      });
    },
    setCombo() {
      let alls = [];
      let combo = [];
      for (let prop in comboData) {
        for (let i in comboData[prop]["data"]) {
          alls.push(comboData[prop]["data"][i]);
        }
        combo.push(comboData[prop]);
      }
      console.log(alls);

      var hash = {};
      alls = alls.reduce(function (arr, current) {
        hash[current.name]
          ? ""
          : (hash[current.name] = true && arr.push(current));
        return arr;
      }, []);
      // alls = alls.filter((item, index, arr) => arr.indexOf(item, 0) == index);
      this.productInfo.cities = alls;
      this.comboList = combo;
    },
    changeCombo(e) {
      let index = e.target.getAttribute("data-num");
      let name = e.target.getAttribute("data-name");
      this.comboIndex = index;
      let key;
      for (let prop in comboData) {
        if (comboData[prop].name == name) {
          key = prop;
          break;
        }
      }
      let nameArr = comboData[key].data.map((item) => {
        return item.name;
      });
      let nowArr = [];
      nowArr = this.productInfo.cities.reduce(function (arr, current) {
        let array = nameArr.filter((item) => item == current.name);
        if (array.length > 0) {
          arr.push(current);
        }
        return arr;
      }, []);
      this.productInfo.checkedCities = nowArr;
      this.productInfo.checkAll = false;
    },
    handleCheckAllChange(val) {
      this.productInfo.checkedCities = val ? this.productInfo.cities : [];
      this.productInfo.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.productInfo.checkAll =
        checkedCount === this.productInfo.cities.length;
      this.productInfo.isIndeterminate =
        checkedCount > 0 && checkedCount < this.productInfo.cities.length;
    },
    sureSelect() {
      this.productInfo.dialogVisible = false;
    },
    showSelect() {
      this.productInfo.dialogVisible = true;
    },
    jsonData(str) {
      let reg = /\\/g;
      //使用replace方法将全部匹配正则表达式的转义符替换为空
      return str.replace(reg, "");
    },
    // 设置随机颜色
    getColor(index) {
      index = index % 10;
      return this.color[index];
    },
    getParenthesesStr(text) {
      let result = "";
      if (text == "") return result;
      let regex = /\((.+?)\)/g;
      let options = text.match(regex);
      if (!options == "") {
        let option = options[0];
        if (!options == "") {
          result = option.substring(1, option.length - 1);
        }
      }
      return result;
    },
    getEleColor(index, len) {
      // 超出10个的，偶数倍 逆， 奇数倍 顺
      if (parseInt(index / 10) >= 1) {
        if (parseInt(index / 10) % 2 === 0) {
          // 偶数倍
          index = 10 - (index % 10);
        } else {
          // 奇数倍
          index = index % 10;
        }
      }
      return this.linear[index];
      // let obj = {
      //   r: Number(color.split(",")[0]),
      //   g: Number(color.split(",")[1]),
      //   b: Number(color.split(",")[2]),
      //   a: !index ? 1 : ((10 - index) % 10) / 10,
      // };
      // console.log(obj);
      // return "rgba(" + obj.r + "," + obj.g + "," + obj.b + "," + obj.a + ")";

      // color.split("()");
    },
    resetForm() {
      this.formInline = {
        custom: "group1", // 客户群
        product: "", // 产品
        datatime: "2020-10", // 日期
        type: "1", // 类型选择 //
        city: "732",
      };
      this.productInfo.checkedCities =
        comboData[Object.keys(comboData)[0]].data;
      this.$message({
        type: "success",
        message: "重置成功",
      });
      // this.$refs.ruleForm.resetField();
    },
    outPut() {
      // this.$message("暂未开发");
      let arr = [];
      this.productInfo.checkedCities.forEach((item) => {
        arr.push(item.id);
      });

      let str = arr.join("|");
      let params = {
        groupId: this.formInline.custom,
        areaId: this.formInline.city,
        searchDate: this.formInline.datatime,
        productId: str,
        orderType: this.formInline.type == "1" ? "count" : "rate",
      };
      apiSend
        .getReport({
          data: params,
          timeOut: 100000,
        })
        .then((res) => {
          this.$message({
            type: "sucess",
            message: res.data.msg,
          });
        })
        .catch((err) => {
          this.$message({
            type: "error",
            message: err.data.msg,
          });
        });
    },
    findTable() {
      this.$message("暂未开发");
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

      list.forEach((item) => {
        let arr = [];
        let children = item.path.split("|");
        // children = children.splice(0, -1);
        // let last = children[children.length - 1];
        let last = item.nodeName[item.nodeName.length - 1];
        console.log(last);
        children.splice(children.length - 1, 1);
        // let last = children.splice(children.length - 1, 1);
        let len = children.length;
        let leaderName = "",
          nodeName = "";
        try {
          leaderName = last.split("'")[1];
        } catch (error) {
          leaderName = last;
        }
        children.forEach((childrenItem, childrenIndex) => {
          console.log(item.nodeName[childrenIndex]);
          try {
            nodeName = item.nodeName[childrenIndex].split("'")[1];
          } catch (error) {
            nodeName = item.nodeName[childrenIndex];
          }
          arr.push({
            name: nodeName,
            color: this.getEleColor(childrenIndex + 1, len),
            // describe: childrenItem.match(/\(([^)]*)\)/)[1] ,
            describe: childrenItem.split("_")[1] || "",
          });
        });
        item.children = arr;
        item.leader = leaderName;
      });
      // let str = this.formInline.type == "1" ? "推荐人数" : "领取率";
      let str = "领取率";
      list.map((item) => {
        let number = item.numberTwo || 0;
        let num = (number * 100).toFixed(2) + "%";
        // this.formInline.type == "1"
        //   ? number
        //   : (number * 100).toFixed(2) + "%";
        // item.info = "（" + str + "" + num + "）";
        item.info =
          "（" + str + "：" + num + "，推荐人数：" + item.count + "）";
      });
      // 按照数量 降序
      // list.sort((a, b) => b.count - a.count);
      // let Max = list[0].count; // 最大数量
      // list.forEach((item) => {
      //   console.log(item.count / Max);
      //   item.Height = 19 + (item.count / Max).toFixed(2) * 30;
      // });

      let all = [];
      list.forEach((item, index) => {
        let array = list.filter((fItem) => fItem.leader == item.leader);
        let nowArray = all.filter((fItem) => {
          return fItem.name.indexOf(item.leader) != -1;
        });
        let order_num = 0,
          order_rate = 0;
        let numArr = array.sort((a, b) => b.count - a.count);
        let rateArr = array.sort((a, b) => b.numberTwo - a.numberTwo);
        order_num = numArr[0].count;
        order_rate = rateArr[0].numberTwo;
        if (nowArray.length == 0) {
          all.push({
            color: this.getColor(index),
            name: item.leader,
            result: array,
            count: order_num,
            rate: order_rate,
          });
        }
      });
      this.allList = all;
      this.sortDown("numberTwo");
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
.menu-right {
  min-width: 225px;
}
.menu-right .menu-btn {
  display: flex !important;
}
.map-container {
  min-height: 500px;
  padding: 0 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.relation-container {
  //   width: 100%;
  padding: 10px 0;
  flex: 1;
}
.realtion-item-left {
  flex: 1;
}
.relation-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  width: 100%;
  user-select: none;
  box-sizing: border-box;
  padding-left: 100px;
  position: relative;
  .relation-header {
    font-size: 14px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 170, 255);
    // background-color: #62bd97;
    box-shadow: 0 0 4px 2px #7fd7f7;
    border-radius: 10px;
    width: 80px;
    cursor: default;
    position: absolute;
    height: 100%;
    left: 0px;
  }
  .relation-line {
    background-color: #56717d;
    position: relative;
    // opacity: 0.6;
    // padding: 5px 0;
    cursor: default;
    // &:last-child {
    //   width: 100%;
    // }
    // width: calc(100% - 80px);
    // line-height: 80px;
    // text-align: center;
  }
  .relation-item {
    width: 100%;
    display: flex;
    margin-top: 25px;
    &:last-child {
      margin-bottom: 20px;
    }
    .realtion-cur {
      display: flex;
      margin-top: 20px;
      position: relative;
      &:nth-child(1) {
        margin-top: 0;
      }
    }
    .relation-name {
      cursor: default;
      color: #666;
      border-radius: 20px;
      display: flex;
      align-items: center;
      padding: 10px;
      box-shadow: 0 0 4px 2px #999;
      font-size: 13px;
      width: 60px;
      justify-content: center;
      word-break: break-all;
      // max-width: 60px;
      // min-width:
    }
  }
  .relation-left {
    // line-height: 80px;
    flex: 1;
    display: flex;
    align-items: center;
    position: relative;
    .relation-line {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .relation-data-info {
      position: absolute;
      top: -15px;
      right: 10px;
      color: #000;
      font-size: 12px;
      white-space: nowrap;
    }
  }
  .relation-ele {
    border-radius: 10px;
    min-width: 80px;
    padding: 0 10px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    color: #333;
    position: relative;
    z-index: 30;
    // line-height: 80px;
    text-align: center;
    cursor: default;
    box-shadow: inset 0 0 5px 0px #999;
    // box-shadow: inset 0 0 5px 0px #eee;
    max-width: 100px;
  }
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
.checkbox-btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.product-text {
  border: 1px solid #eee;
  padding: 0 20px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  // color: #606266;
  color: #b4bccc;
  width: 200px;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  cursor: pointer;
}
.checkbox-product .el-checkbox.is-bordered + .el-checkbox.is-bordered {
  margin-bottom: 20px;
  margin-left: 0;
}
.checkbox-product .el-checkbox.is-bordered {
  &:nth-child(5n + 1) {
    margin-left: 0;
  }
}
.type-form-box {
  width: 100%;
}
.type-line {
  text-align: right;
}
.combo-menu {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  .combo-title::before {
    content: "";
    position: absolute;
    right: -10px;
    top: 0;
    height: 20px;
    width: 2px;
    background-color: #aaa;
  }
  .un-combo::before {
    display: none;
  }
  .combo-info {
    cursor: pointer;
    &:nth-child(2n) {
      margin: 0 20px;
    }
  }
  .combo-title {
    // padding-bottom: 10px;
    padding: 0 10px 10px;
    position: relative;
  }
  .combo-title::after {
    content: "";
    width: 0;
    height: 4px;
    background-color: #409eff;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .line-active {
    font-weight: bold;
    transform: scale(1.1);
  }
  .line-active::before {
    transform: scale(1);
  }
  .line-active::after {
    content: "";
    width: 100%;
    transition: 0.5s;
    transform: scale(1);
  }
}
.to-right {
  opacity: 0;
  animation: mymove 2s infinite;
  position: relative;
}
@keyframes mymove {
  0% {
    opacity: 0;
    left: 0;
  }
  50% {
    opacity: 0.8;
    left: 20px;
  }
  100% {
    opacity: 0;
    left: 0;
  }
}

.pass-wrapper {
  position: absolute;
  width: 100%;
  height: 20px;
  background-color: #56717d;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  .pass-contain {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    .dot {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 4px 4px #eee;
      animation: moveToRight 1.2s linear;
      animation-iteration-count: infinite;
      -webkit-animation: moveToRight 1.2s linear;
      -webkit-animation-iteration-count: infinite;
    }
  }
}

@keyframes moveToRight {
  0% {
    left: 0;
  }

  100% {
    left: 100%;
  }
}
</style>