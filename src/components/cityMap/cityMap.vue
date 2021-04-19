<template>
  <div>
    <!-- <h3 class="market_map_title">全国地图</h3> -->
    <!-- <div class="back_btn" onclick="back_china()">返回全国地图</div> -->
    <div id="charts"></div>
  </div>
</template>

<script>
import "./js/echarts-all2.js";
import areaData from "./js/area.js";
export default {
  data() {
    return {
      cityValues: [
        { name: "长沙市", value: "430100", cityId: 18411 },
        { name: "岳阳市", value: "50", cityId: 17861 },
        { name: "益阳市", value: "300", cityId: 19127 },
        { name: "常德市", value: "160", cityId: 17608 },
        { name: "张家界市", value: "200", cityId: 23674 },
        { name: "湘西土家族苗族自治州", value: "260", cityId: 18961 },
        { name: "怀化市", value: "170", cityId: 17233 },
        { name: "娄底市", value: "100", cityId: 22090 },
        { name: "湘潭市", value: "170", cityId: 19875 },
        { name: "株洲市", value: "430200", cityId: 19247 },
        { name: "邵阳市", value: "250", cityId: 18353 },
        { name: "衡阳市", value: "330", cityId: 17527 },
        { name: "永州市", value: "140", cityId: 19860 },
        { name: "郴州市", value: "340", cityId: 16328 },
      ],
      option: {
        //左下角lengend
        dataRange: {
          show: false,
          x: "left",
          y: "bottom",
          splitList: [
            { start: 10, end: 60, color: "rgba(250,128,128,0.5)" }, //当值为5时，区域背景
            { start: 60, end: 120, color: "rgba(250,128,144,0.5)" }, //当值为10时，区域背景
            { start: 120, end: 180, color: "rgba(255,127,80,0.5)" }, //当值为15时，区域背景
            { start: 180, end: 240, color: "rgba(255,99,71,0.5)" }, //当值为5时，区域背景
            { start: 240, end: 300, color: "rgba(255,69,0,0.5)	" }, //当值为10时，区域背景
            { start: 430200, end: 431200, color: "rgba(255,0,0,0.5)" }, //当值为15时，区域背景
          ],
          //左下值域文字样式
          textStyle: {
            color: "#ff6300", // 值域文字颜色
          },
        },
        // //鼠标悬浮tip
        // tooltip: {
        // 	show: true,
        // 	trigger: 'item',
        // 	"confine": true,//是否一直在画布内
        // 	showContent: false,//是否显示内容区区
        // 	"formatter": '{b}',//tip里显示的内容
        // },
        // 缩放漫游组件，仅对地图有效
        // roamController: {
        // 	// 显示策略，可选为：true（显示） | false（隐藏）
        // 	show: true,
        // 	// 水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        // 	x: 'right',
        // 	// 垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
        // 	y: '50%',
        // 	// 指定宽度，决定4向漫游圆盘大小，可指定 {number}（宽度，单位px）
        // 	width: 50,
        // 	// 指定高度，缩放控制键默认会在指定高度的最下方最大化显示，可指定 {number}（高度，单位px）
        // 	height: 80,
        // 	// 缩放漫游组件背景颜色，默认透明
        // 	backgroundColor: 'rgba(0,0,0,0.1)',
        // 	// 漫游组件文字填充颜色
        // 	fillerColor: '#000',
        // 	// 控制手柄主体颜色
        // 	handleColor: '#e3655a',
        // 	// 4向漫游移动步伐，单位px
        // 	step: 10,
        // 	// 必须，指定漫游组件可控地图类型
        // 	mapTypeControl: {
        // 		'china': true
        // 	}
        // },
        // 图像样式
        zoom: 1,
        series: [
          {
            name: "市场分布",
            type: "map",
            mapType: "china",
            // hoverable: false, // 禁止hover事件
            roam: false, // 是否开启缩放和平移漫游
            itemStyle: {
              // 区域样式
              // 普通样式
              normal: {
                label: {
                  show: true,
                  formatter: "{a}",
                },
                borderWidth: 0.5, // 区域边框宽度
                borderColor: "#0550c3", // 区域边框颜色
                areaColor: "#4ea397", // 区域颜色
              },
              // hover样式
              emphasis: {
                label: { show: true },
                borderColor: "#4b0082",
                areaColor: "#ece39e",
              },
            },
            data: [],
          },
        ],
        animation: false,
      },
      mycharts: null,
      nowCityList: [],
      provArr: ["湖南"],
      Max: 0,
      oldSeries: [],
    };
  },
  mounted() {
    let self = this;
    self.mycharts = echarts.init(document.getElementById("charts"));
    console.log(self.mycharts);
    // var nowCityList = []; // 当前城市列表

    // var provArr = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];//获取的省份，有可能是从后台获取
    // var provArr = ["湖南"];
    self.option.series[0].data = self.provArr; //将拼接好的数组赋给参数集合
    console.log(self.option);
    self.mycharts.setOption(self.option); //跟新图表
    //鼠标滑过事件
    // var testStr = "," + provArr.join(",") + ",";
    // this.mycharts.on('hover', function (param) {
    // 	if (testStr.indexOf("," + param.name + ",") != -1) {//如果滑到选中省份
    // 		if (option.tooltip.showContent == false) {//如果tip显示为false
    // 			option.tooltip.showContent = true;
    // 			this.mycharts.setOption(option);
    // 		}
    // 	} else {
    // 		if (option.tooltip.showContent == true) {
    // 			option.tooltip.showContent = false;
    // 			// param.value = 15;
    // 			this.mycharts.setOption(option);
    // 		}
    // 	}
    // });
    self.enter_provence("湖南");
    //点击事件
    self.mycharts.on("click", function (params) {
      //点击事件
      if (self.option.series[0].mapType === "china") {
        // 点击省份
        console.log(params.name);
        self.enter_provence(params.name);
      } else {
        // 点击城市
        self.enter_provence("湖南");
        var newArr = self.option.series[0].data.filter(function (item) {
          return item.name === params.name;
        });
        self.mycharts.setOption(self.option); // 跟新图表
        // console.log(self.option);
        console.log("城市名称：" + params.name, "城市id:" + newArr[0].id);
      }
      // select_province(params.name);
      // console.log(params)
    });
    this.setCityColor();
  },
  methods: {
    //初始化省颜色
    ini_province() {
      var ini_len = this.option.series[0].data.length;
      for (var i = 0; i < ini_len; i++) {
        //初始化颜色
        // option.series[0].data[i].value = 15;
        // console.log(this.option.series[0].data[i].name);
        // cityValues 为 后端获取的 地市 数据数量
        this.cityValues.forEach((cityItem) => {
          if (cityItem.name == this.option.series[0].data[i].name) {
            this.option.series[0].data[i].value = cityItem.value;
          }
        });
        this.mycharts.setOption(this.option);
      }
    },
    //选中省颜色
    enter_provence(name) {
      var len = this.option.series[0].data.length;

      for (var i = 0; i < len; i++) {
        console.log(this.option.series[0].data[i], name);
        if (this.option.series[0].data[i] == name) {
          //如果匹配正确
          // 便利省份
          for (let item in areaData.areaArr) {
            if (areaData.areaArr[item].name.indexOf(name) > -1) {
              let olist = areaData.areaArr[item].items;
              this.nowCityList = [];
              for (let item2 in olist) {
                let str2 = {
                  name: olist[item2].name,
                  value: 15,
                  id: olist[item2].id,
                }; // 拼接对象数组
                this.nowCityList.push(str2);
                this.oldSeries.push(str2);
              }

              this.option.series[0].data = this.nowCityList; // 将拼接好的数组赋给参数集合
            }
          }
          //进入子图
          this.option.series[0].mapType = name;
          this.mycharts.setOption(this.option);
        } else {
          console.log(name);
        }
      }
    },
    // 初始化地图色块颜色
    setCityColor() {
      this.ini_province();
      var Max = this.cityValues.sort((a, b) => b.value - a.value)[0].value;
      this.Max = Max;
      let Len = this.option.dataRange.splitList.length;
      //   this.oldSeries = this.option.series[0].data;
      this.option.dataRange.splitList.forEach((item, index) => {
        if (index == 0) {
          item.start = 0;
          item.end = parseInt((1 / Len).toFixed(2) * Max);
        } else if (index != Len) {
          console.log(index, Len);
          item.start = parseInt((index / Len).toFixed(2) * Max);
          item.end = parseInt(((index + 1) / Len).toFixed(2) * Max);
        }
      });
      console.log(this.option);
      this.mycharts.setOption(this.option);
    },
    // 回到全国地图
    back_china() {
      this.option.series[0].mapType = "china";
      this.option.series[0].data = this.provArr;
      this.mycharts.setOption(this.option);
    },
  },
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  color: #333333;
}

h3,
h4,
h5,
h6 {
  font-weight: normal;
}

.clear {
  clear: both;
}

body {
  font-family: "微软雅黑";
}

a {
  text-decoration: none;
  color: #333;
}

#charts {
  width: 800px;
  height: 600px;
  margin: 0 auto;
}

.market_map_title {
  font-size: 32px;
  text-align: left;
  padding-left: 50px;
}

.back_btn {
  display: table;
  font-size: 0.67rem;
  padding: 0.2rem 0.4rem;
  border-radius: 0.2rem;
  margin: 0 auto;
  color: #333;
  background: #ccc;
}
</style>