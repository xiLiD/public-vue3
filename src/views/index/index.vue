<template>
  <div class="pageContent">
    <el-row :gutter="20" class="Mb-20">
      <el-col :span="8">
        <div class="twoTool2 box-start size-header">
          <div class="W50 box-v-start">
            <div>当天实时携入用户数</div>
            <div class="box-center size-max font-bold Mt-16">
              <span>20</span>
              <i class="el-icon-right font-bold nocolor"></i>
              <span>25</span>
            </div>
          </div>
          <div class="W50 box-v-start">
            <div>当天实时携出用户数</div>
            <div class="box-center size-max font-bold Mt-16">
              <span>20</span>
              <i class="el-icon-right font-bold nocolor"></i>
              <span>25</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="twoTool3 box-start size-header">
          <div class="W50 box-v-start">
            <div>当月实时携入用户数</div>
            <div class="box-center size-max font-bold Mt-16">
              <span>20</span>
              <i class="el-icon-right font-bold nocolor"></i>
              <span>25</span>
            </div>
          </div>
          <div class="W50 box-v-start">
            <div>当月实时携出用户数</div>
            <div class="box-center size-max font-bold Mt-16">
              <span>20</span>
              <i class="el-icon-right font-bold nocolor"></i>
              <span>25</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="twoTool4 box-start size-header">
          <div class="W50 box-v-start">
            <div>累计实时携入用户数</div>
            <div class="box-center size-max font-bold Mt-16">
              <span>20</span>
              <i class="el-icon-right font-bold nocolor"></i>
              <span>25</span>
            </div>
          </div>
          <div class="W50 box-v-start">
            <div>累计实时携出用户数</div>
            <div class="box-center size-max font-bold Mt-16">
              <span>20</span>
              <i class="el-icon-right font-bold nocolor"></i>
              <span>25</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="Mb-20">
      <el-col :span="8">
        <div class="threeTool">
          <div class="W100 bb1px">
            <p class="Mb-6 font-bold">实时日指标</p>
          </div>
          <div class="W100 box-start headerTitle">
            <div style="width: 70%">名称</div>
            <div style="width: 10%; text-align: center">上次</div>
            <div style="width: 10%; text-align: center">本次</div>
            <div style="width: 10%; text-align: center">对比</div>
          </div>
          <div
            class="W100 box-start itemTitle gray-medium"
            v-for="(item, index) in dateArr"
            :key="index"
          >
            <div style="width: 70%">{{ item.name }}</div>
            <div style="width: 11%; text-align: center">{{ item.last }}</div>
            <div style="width: 11%; text-align: center">{{ item.now }}</div>
            <div style="width: 8%; text-align: center">
              <i
                v-show="item.contrast === 'up'"
                class="el-icon-top upcolor"
              ></i>
              <i
                v-show="item.contrast === 'dowm'"
                class="el-icon-right nocolor"
              ></i>
              <i
                v-show="item.contrast === 'no'"
                class="el-icon-bottom dowmcolor"
              ></i>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="threeTool">
          <div class="W100 bb1px">
            <p class="Mb-6 font-bold">实时月指标</p>
          </div>
          <div class="W100 box-start headerTitle">
            <div style="width: 70%">名称</div>
            <div style="width: 10%; text-align: center">上次</div>
            <div style="width: 10%; text-align: center">本次</div>
            <div style="width: 10%; text-align: center">对比</div>
          </div>
          <div
            class="W100 box-start itemTitle gray-medium"
            v-for="(item, index) in dateArr"
            :key="index"
          >
            <div style="width: 70%">{{ item.name }}</div>
            <div style="width: 11%; text-align: center">{{ item.last }}</div>
            <div style="width: 11%; text-align: center">{{ item.now }}</div>
            <div style="width: 8%; text-align: center">
              <i
                v-show="item.contrast === 'up'"
                class="el-icon-top upcolor"
              ></i>
              <i
                v-show="item.contrast === 'dowm'"
                class="el-icon-right nocolor"
              ></i>
              <i
                v-show="item.contrast === 'no'"
                class="el-icon-bottom dowmcolor"
              ></i>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="threeTool">
          <div class="W100 bb1px">
            <p class="Mb-6 font-bold">实时累计期末指标</p>
          </div>
          <div class="W100 box-start headerTitle">
            <div style="width: 70%">名称</div>
            <div style="width: 10%; text-align: center">上次</div>
            <div style="width: 10%; text-align: center">本次</div>
            <div style="width: 10%; text-align: center">对比</div>
          </div>
          <div
            class="W100 box-start itemTitle gray-medium"
            v-for="(item, index) in dateArr"
            :key="index"
          >
            <div style="width: 70%">{{ item.name }}</div>
            <div style="width: 11%; text-align: center">{{ item.last }}</div>
            <div style="width: 11%; text-align: center">{{ item.now }}</div>
            <div style="width: 8%; text-align: center">
              <i
                v-show="item.contrast === 'up'"
                class="el-icon-top upcolor"
              ></i>
              <i
                v-show="item.contrast === 'dowm'"
                class="el-icon-right nocolor"
              ></i>
              <i
                v-show="item.contrast === 'no'"
                class="el-icon-bottom dowmcolor"
              ></i>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="Mb-40">
      <el-col :span="8">
        <div
          class="threeTool2 Mb-20"
          style="min-height: 361px; border-right: 1px #dadada dashed"
        >
          <div class="W100 chartDiv box-justify">
            <div class="size-title font-bold gray-dark">地市携转分析</div>
            <el-select
              v-model="value"
              placeholder="请选择"
              size="small"
              @change="changeData"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div id="myChart" class="threeTool2"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div
          class="threeTool2"
          style="min-height: 361px; border-right: 1px #dadada dashed"
        >
          <div class="W100 size-title font-bold gray-dark Mb-20">
            易携入预测总览
          </div>
          <div class="W100 box-justify size-medium">
            <div class="box-v-start">
              <div class="size-title font-bold" style="color: red">1087</div>
              <div>易携入用户数</div>
            </div>
            <el-date-picker
              v-model="value2"
              type="month"
              size="small"
              placeholder="选择日期"
            >
            </el-date-picker>
            <!-- <div class="box-v-start">
              <div class=" size-title font-bold" style="color:red" >32</div>
              <div>易携入电信用户数</div>
            </div>
            <div class="box-v-start">
              <div class=" size-title font-bold" style="color:red">11</div>
              <div>易携入联通用户数</div>
            </div> -->
          </div>
          <div class="threeTool2" id="getBackTable"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="threeTool2" style="min-height: 361px">
          <div class="W100 size-title font-bold gray-dark Mb-20">
            易携出预测总览
          </div>
          <div class="W100 box-justify size-medium">
            <div class="box-v-start">
              <div class="size-title font-bold" style="color: red">1087</div>
              <div>易携出用户数</div>
            </div>
            <el-date-picker
              v-model="value3"
              type="month"
              size="small"
              placeholder="选择日期"
            >
            </el-date-picker>
            <!-- <div class="box-v-start">
              <div class=" size-title font-bold" style="color:red" >32</div>
              <div>易携出电信用户数</div>
            </div>
            <div class="box-v-start">
              <div class=" size-title font-bold" style="color:red">11</div>
              <div>易携出联通用户数</div>
            </div> -->
          </div>
          <div class="threeTool2" id="getBackTable2"></div>
        </div>
      </el-col>
    </el-row>
    <!-- <el-row :gutter="30" class="Mb-40">
      <el-col :span="12">
        <div  class="threeTool">
          <div class="W100 size-title font-bold gray-dark Mb-20">
            易携入预测总览
          </div>
          <div class="W100 box-justify size-medium" >
            <div class="box-v-start">
              <div class=" size-title font-bold" style="color:red" >1087</div>
              <div>易携入用户数</div>
            </div>
            <div class="box-v-start">
              <div class=" size-title font-bold" style="color:red" >32</div>
              <div>易携入电信用户数</div>
            </div>
            <div class="box-v-start">
              <div class=" size-title font-bold" style="color:red">11</div>
              <div>易携入联通用户数</div>
            </div>
          </div>
          <div class="threeTool" id="getBackTable" ></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div  class="threeTool">
          <div class="W100 size-title font-bold gray-dark Mb-20">
            易携出预测总览
          </div>
          <div class="W100 box-justify size-medium" >
            <div class="box-v-start">
              <div class=" size-title font-bold" style="color:red" >1087</div>
              <div>易携出用户数</div>
            </div>
            <div class="box-v-start">
              <div class=" size-title font-bold" style="color:red" >32</div>
              <div>易携出电信用户数</div>
            </div>
            <div class="box-v-start">
              <div class=" size-title font-bold" style="color:red">11</div>
              <div>易携出联通用户数</div>
            </div>
          </div>
          <div class="threeTool" id="getBackTable2" ></div>
        </div>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import echarts from "echarts";
import api from "@/api/axios";
export default {
  name: "Index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      value2: null,
      value3: null,
      dateArr: [
        // {
        //   name: '当天实时携入用户数',
        //   last: 20,
        //   now: 25,
        //   contrast: 'up'
        // },
        {
          name: "当天实时携入用户数-联通",
          last: 20,
          now: 25,
          contrast: "dowm",
        },
        {
          name: "当天实时携入用户数-电信",
          last: 20,
          now: 25,
          contrast: "no",
        },
        // {
        //   name: '当天实时携出用户数',
        //   last: 20,
        //   now: 25,
        //   contrast: 'up'
        // },
        {
          name: "当天实时携出用户数-联通",
          last: 20,
          now: 25,
          contrast: "up",
        },
        {
          name: "当天实时携出用户数-电信",
          last: 20,
          now: 25,
          contrast: "up",
        },
        {
          name: "当天实时携出授权码申请用户数",
          last: 20,
          now: 25,
          contrast: "up",
        },
        {
          name: "当天实时携出授权码申请成功用户数",
          last: 20,
          now: 25,
          contrast: "dowm",
        },
        {
          name: "当天实时携出授权码申请失败用户数",
          last: 20,
          now: 25,
          contrast: "up",
        },
        {
          name: "当天实时携出授权码申请次数",
          last: 20,
          now: 25,
          contrast: "no",
        },
        {
          name: "当天实时携出授权码申请成功次数",
          last: 20,
          now: 25,
          contrast: "up",
        },
        {
          name: "当天实时携出授权码申请失败次数",
          last: 20,
          now: 25,
          contrast: "up",
        },
        {
          name: "当天实时携出销户用户数",
          last: 20,
          now: 25,
          contrast: "up",
        },
        {
          name: "当天实时携出授权码成功下发量",
          last: 20,
          now: 25,
          contrast: "up",
        },
        {
          name: "当天实时携出条件查询用户数",
          last: 20,
          now: 25,
          contrast: "up",
        },
        {
          name: "当天实时携出条件查询次数",
          last: 20,
          now: 25,
          contrast: "up",
        },
      ],
      options: [
        {
          value: "携出客户数",
          label: "携出客户数",
        },
        {
          value: "携入客户数",
          label: "携入客户数",
        },
      ],
      value: "携出客户数",
      myChart: null,
      myChart1: null,
      myChart2: null,
      chartOption: {
        // title: { text: '地市携转分析' },
        tooltip: {},
        xAxis: {
          data: [
            "长沙市",
            "岳阳市",
            "益阳市",
            "常德市",
            "张家界市",
            "湘西",
            "怀化市",
            "娄底市",
            "湘潭市",
            "株洲市",
            "邵阳市",
            "衡阳市",
            "永州市",
            "郴州市",
          ],
          axisLabel: {
            interval: 0,
            formatter: function (value) {
              return value.split("").join("\n");
            },
          },
        },
        yAxis: {},
        series: [
          {
            name: "数量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 20, 36],
            itemStyle: {
              normal: {
                label: {
                  show: true, // 开启显示
                  position: "top", // 在上方显示
                  textStyle: {
                    // 数值样式
                    color: "#c19178",
                    fontSize: 14,
                  },
                },
              },
            },
          },
        ],
      },
      peiOption: {
        tooltip: {},
        legend: {
          data: ["原因分布"],
          top: 10,
          left: 10,
        },
        radar: {
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5],
            },
          },
          indicator: [
            { name: "资费不适配", max: 6500 },
            { name: "网络不满意", max: 16000 },
            { name: "宽带不满意", max: 30000 },
            { name: "合约到期", max: 38000 },
          ],
          radius: 80,
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "原因分布",
              },
            ],
          },
        ],
      },
      // peiOption: {
      //   color: ['#EF684A', '#57CDE6', '#A24AE2', '#1957F8', '#F5A622',
      //     '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
      //     '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
      //     '#6699FF', '#ff6666', '#3cb371', '#b8860b', '#30e0e0'],
      //   tooltip: {
      //     trigger: 'item',
      //     formatter: '{a} <br/>{b}:数量 {c} ({d}%)'
      //   },
      //   legend: {
      //     orient: 'vertical',
      //     x: 'right',
      //     y: 'bottom',
      //     data: ['异网高价值', '异网易触发', '异网不满意']
      //   },
      //   series: [
      //     {
      //       name: '携入原因',
      //       type: 'pie',
      //       radius: ['50%', '70%'],
      //       avoidLabelOverlap: true,
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: 'outer'
      //           },
      //           labelLine: {
      //             show: true
      //           }
      //         },
      //         emphasis: {
      //           label: {
      //             show: true,
      //             position: 'center',
      //             textStyle: {
      //               fontSize: '30',
      //               fontWeight: 'bold'
      //             }
      //           },
      //           labelLine: {
      //             show: true
      //           }
      //         }
      //       },
      //       data: [
      //         { value: 1, name: '异网高价值' },
      //         { value: 2, name: '异网易触发' },
      //         { value: 3, name: '异网不满意' }
      //       ]
      //     }
      //   ]
      // },
      peiOption2: {
        tooltip: {},
        legend: {
          data: ["原因分布"],
          top: 10,
          left: 10,
        },
        radar: {
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5],
            },
          },
          indicator: [
            { name: "资费不适配", max: 6500 },
            { name: "网络不满意", max: 16000 },
            { name: "宽带不满意", max: 30000 },
            { name: "合约到期", max: 38000 },
          ],
          radius: 80,
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "原因分布",
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    this.drawLine();
    this.drawPei();
    this.getData();
  },
  methods: {
    getData() {
      let params = {
        name: "张三",
        age: "李四",
      };
      api.getToken({ data: params });
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      this.myChart.setOption(this.chartOption);
    },
    drawPei() {
      this.myChart1 = echarts.init(document.getElementById("getBackTable"));
      this.myChart1.clear();
      this.myChart1.setOption(this.peiOption);
      this.myChart2 = echarts.init(document.getElementById("getBackTable2"));
      this.myChart2.clear();
      this.myChart2.setOption(this.peiOption2);
    },
    changeData() {
      this.chartOption.series[0].data = this.chartOption.series[0].data.sort(
        this.randomNumber
      );
      this.myChart.setOption(this.chartOption, true);
    },
    randomNumber() {
      // randomNumber(a,b) 返回的值大于 0 ，则 b 在 a 的前边；
      // randomNumber(a,b) 返回的值等于 0 ，则a 、b 位置保持不变；
      // randomNumber(a,b) 返回的值小于 0 ，则 a 在 b 的前边。
      return 0.5 - Math.random();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.threeTool {
  background-color: white;
  min-height: 250px;
  border-radius: 5px;
  box-sizing: border-box;
  /* box-shadow: 0px 10px 12px 3px rgba(0,0,0,0.05); */
  padding: 10px 20px;
  width: 100%;
}
.threeTool2 {
  background-color: white;
  min-height: 250px;
  box-sizing: border-box;
  /* box-shadow: 0px 10px 12px 3px rgba(0,0,0,0.05); */
  padding: 10px 20px;
  width: 100%;
}
.twoTool2 {
  position: relative;
  color: white;
  height: 120px;
  border-radius: 5px;
  padding: 10px;
  background: -webkit-linear-gradient(
    left,
    #6bc8fd,
    #3eb4fa
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    #6bc8fd,
    #3eb4fa
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    #6bc8fd,
    #3eb4fa
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to right,
    #6bc8fd,
    #3eb4fa
  ); /* 标准的语法（必须放在最后） */
  filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#6bc8fd", endColorstr="#3eb4fa", gradientType="1");
}
.twoTool3 {
  position: relative;
  color: white;
  height: 120px;
  border-radius: 5px;
  padding: 10px;
  background: -webkit-linear-gradient(
    left,
    #accc67,
    #99c143
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    #accc67,
    #99c143
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    #accc67,
    #99c143
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to right,
    #accc67,
    #99c143
  ); /* 标准的语法（必须放在最后） */
  filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#accc67", endColorstr="#99c143", gradientType="1");
}
.twoTool4 {
  position: relative;
  color: white;
  height: 120px;
  border-radius: 5px;
  padding: 10px;
  background: -webkit-linear-gradient(
    left,
    #f556a8,
    #e40077
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    #f556a8,
    #e40077
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    #f556a8,
    #e40077
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to right,
    #f556a8,
    #e40077
  ); /* 标准的语法（必须放在最后） */
  filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#f556a8", endColorstr="#e40077", gradientType="1");
}
.pageContent {
  /* margin-top: 20px; */
  padding: 20px 15px 0px;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
}
.pageContent::-webkit-scrollbar {
  display: none;
}
.headerTitle {
  height: 40px;
  border-bottom: 1px solid #f3f0f0;
}
.itemTitle {
  height: 30px;
  border-bottom: 1px solid #f3f0f0;
}
.upcolor {
  color: lightgreen;
}
.dowmcolor {
  color: red;
}
.nocolor {
  color: lightblue;
}
.chartDiv {
  height: 50px;
  /* padding: 0px 10px; */
  box-sizing: border-box;
}
</style>
