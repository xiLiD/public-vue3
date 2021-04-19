<template>
  <div class="wpbox">
    <div class="bnt">
      <h1 class="tith1 fl">移动资产大数据分析</h1>
    </div>

    <div class="mrbox">
      <div class="mrbox_topmidd">
        <div
          class="amiddboxttop"
          @mouseover="setAnimation('runLeftAuto', false)"
          @mouseleave="setAnimation('runLeftAuto', true)"
        >
          <h2 class="tith2 pt1">经度调度</h2>
          <ul class="line">
            <li
              v-for="(item, index) in interfaceTabs"
              :key="index"
              :class="[{ active: index == interfaceIndex }]"
              @click="setInterface"
              :data-index="index"
            >
              {{ item.name }}
            </li>
          </ul>
          <el-carousel
            indicator-position="none"
            class="el-carouse1-box"
            :height="'300px'"
            :interval="5000"
            arrow="never"
            :ref="'interfaceCarousel'"
            @change="changeInterface"
            :autoplay="runLeftAuto"
          >
            <el-carousel-item
              class="carousel-item"
              v-for="(interItem, interIndex) in interfaceTabs"
              :key="interIndex"
            >
              <div
                :id="'mainleft' + interIndex"
                class="main-right"
                :style="[{ width: '800px', height: '230px' }]"
              ></div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="amiddboxttop" style="margin-top: 10px">
          <h2 class="tith2 pt1">集群可用性</h2>
          <ul class="line">
            <li
              v-for="(item, index) in colonyTabs"
              :key="index"
              :class="[{ active: index == colonyIndex }]"
              @click="setColony"
              :data-index="index"
            >
              {{ item.name }}
            </li>
          </ul>

          <el-carousel
            indicator-position="none"
            class="el-carouse1-box"
            height="230px"
            :interval="5000"
            arrow="never"
            ref="colonyCarousel"
            @change="changeColony"
          >
            <el-carousel-item
              class="carousel-item"
              v-for="(item, index) in colonyTabs"
              :key="index"
            >
              <div
                class="amiddboxttop_map"
                style="width: 800px; height: 230px"
                :id="'colony' + index"
              ></div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div
        class="mrbox_top_right"
        @mouseover="setAnimation('runAutoplay', false)"
        @mouseleave="setAnimation('runAutoplay', true)"
      >
        <div class="arightboxtop">
          <h2 class="tith2">重点业务调度</h2>
          <div class="bussiness-type">
            <ul class="line">
              <li
                v-for="(item, index) in bussinessTabs"
                :key="index"
                :class="[{ active: index == tabIndex }]"
                @click="setTab"
                :data-index="index"
              >
                {{ item.name }}
              </li>
            </ul>
            <ul class="line" v-show="tabIndex == 0">
              <li
                v-for="(item, index) in dateList"
                :key="index"
                :class="[{ active: index == dateIndex }]"
                @click="setDate"
                :data-index="index"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <!-- <crosswise-scroll>
            
          </crosswise-scroll> -->
          <ul class="line">
            <li
              v-for="(item, index) in bussinessModule.data"
              :key="index"
              :class="[{ active: index == childrenIndex }]"
              @click="setChildren"
              :data-index="index"
            >
              {{ item.name }}
            </li>
          </ul>
          <el-carousel
            indicator-position="none"
            class="el-carouse1-box"
            :height="carouselIndex == 0 ? '150px' : '300px'"
            :interval="5000"
            arrow="never"
            :ref="'bussinessCarousel' + carouselIndex"
            :id="'bussinessCarousel' + carouselIndex"
            @change="changeBussiness"
            v-for="(carouselItem, carouselIndex) in bussinessTabs"
            :key="carouselIndex"
            v-show="carouselIndex == tabIndex"
            :autoplay="runAutoplay"
          >
            <el-carousel-item
              class="carousel-item"
              v-for="(item, index) in bussinessModule.data"
              :key="index"
            >
              <div
                :id="'mainright' + carouselIndex + '_' + index"
                class="main-right"
                :style="[{ width: '600px', height: getHeight(carouselIndex) }]"
              ></div>
            </el-carousel-item>
          </el-carousel>
          <div class="app-container" v-if="tabIndex == 0">
            <h3 class="app-title">应用</h3>
            <ul>
              <li>
                <i class="el-icon-c-scale-to-original"></i>
                <span>O域大屏</span>
              </li>
              <li>
                <i class="el-icon-s-cooperation"></i>
                <span>可视工具</span>
              </li>
              <li>
                <i class="el-icon-s-cooperation"></i>
                <span>自助取数</span>
              </li>
              <li>
                <i class="el-icon-s-promotion"></i>
                <span>交互查询</span>
              </li>
              <li>
                <i class="el-icon-s-platform"></i>
                <span>xx平台</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="arightboxbott">
          <h2 class="tith2">告警监控</h2>
          <div class="early-box">
            <ul class="early-warning warn-head">
              <li>告警专题</li>
              <li>主机IP</li>
              <li>告警时间</li>
              <li>告警负责人</li>
              <li>告警级别</li>
            </ul>
            <vue-seamless-scroll
              :data="listData"
              :class-option="optionSingleHeightTime"
              class="seamless-warp"
            >
              <ul class="item">
                <li v-for="(item, index) in listData" :key="index">
                  <ul class="early-warning">
                    <li>{{ item.title }}</li>
                    <li>{{ item.ip }}</li>
                    <li>{{ item.date }}</li>
                    <li>{{ item.person }}</li>
                    <li>{{ item.level }}</li>
                  </ul>
                </li>
              </ul>
            </vue-seamless-scroll>
          </div>
        </div>
      </div>
    </div>
    <div class="notice-box">
      <div class="notice">
        <vue-seamless-scroll
          :data="listData"
          :class-option="optionLeft"
          class="notice-scroll"
        >
          <ul class="item early-warning">
            <li v-for="(item, index) in listData" :key="index">
              <!-- <ul class="">
                <li>{{ item.title }}</li>
              </ul> -->
              {{ item.title }}
            </li>
          </ul>
        </vue-seamless-scroll>
        <div class="btn-more" @click="showMore">
          <span>查看更多</span>
          <i class="el-icon-d-arrow-right"></i>
        </div>
      </div>
    </div>
    <el-dialog title="预警信息" :visible.sync="earlyWarn.visible" width="70%">
      <el-table
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%"
      >
        <el-table-column label="出现日期" prop="date"> </el-table-column>
        <el-table-column label="描述" prop="name"> </el-table-column>
        <el-table-column>
          <template slot="header" slot-scope="scope"> 状态 </template>
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.status == 0 ? 'info' : 'success'"
              effect="dark"
            >
              {{ scope.row.status == 0 ? "未解决" : "已解决" }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
            />
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
import optionResult from "./js/options.js";
import echarts from "echarts";
import CrosswiseScroll from "@/components/crosswiseScroll/index.vue";
import option from "../knowledgeMap/knowledgeMap.js";
export default {
  components: {
    CrosswiseScroll,
  },
  data() {
    return {
      pieData: [
        //第一个圆环图
        {
          name: "彩信通报",
          label: {
            normal: {
              show: true,
            },
          },
          data: [
            {
              name: "运行成功",
              value: "37",
            },
            {
              name: "运行失败",
              value: "5",
            },
            {
              name: "运行中",
              value: "24",
            },
            {
              name: "未运行",
              value: "15",
            },
          ],
        },
        //第二个圆环图
        {
          name: "一经前区",
          label: {
            normal: {
              show: true,
            },
          },
          data: [
            {
              name: "运行成功",
              value: "37",
            },
            {
              name: "运行失败",
              value: "5",
            },
            {
              name: "运行中",
              value: "24",
            },
            {
              name: "未运行",
              value: "15",
            },
          ],
        },
        //第三个圆环图
        {
          name: "网格前区",
          label: {
            normal: {
              show: true,
            },
          },
          data: [
            {
              name: "运行成功",
              value: "37",
            },
            {
              name: "运行失败",
              value: "5",
            },
            {
              name: "运行中",
              value: "24",
            },
            {
              name: "未运行",
              value: "15",
            },
          ],
        },
        {
          name: "重点报表",
          label: {
            normal: {
              show: true,
            },
          },
          data: [
            {
              name: "运行成功",
              value: "37",
            },
            {
              name: "运行失败",
              value: "5",
            },
            {
              name: "运行中",
              value: "24",
            },
            {
              name: "未运行",
              value: "15",
            },
          ],
        },
      ],
      colonyTabs: [
        {
          name: "长沙集群HDFS使用率",
          all: "100T",
          use: "86T",
          count: "1009",
          size: "1.5M",
          rate: 86,
        },
        {
          name: "长沙集群文件情况",
          all: "100T",
          use: "86T",
          count: "1009",
          size: "1.5M",
          rate: 86,
        },
      ],
      earlyWarn: {
        visible: false,
      },
      bussinessTabs: [
        {
          name: "调度整体运行情况",
          data: [
            {
              name: "总调度",
              all: "1500T",
              use: "1000T",
              count: "44523",
              size: "1.7M",
              rate: 75,
            },
            {
              name: "普通接口",
              all: "100T",
              use: "86T",
              count: "1009",
              size: "1.5M",
              rate: 86,
            },
            {
              name: "重点接口",
              all: "1560T",
              use: "863T",
              count: "1244",
              size: "2.0M",
              rate: 8,
            },
            {
              name: "模型",
              all: "1003T",
              use: "262T",
              count: "1209",
              size: "3.5M",
              rate: 24,
            },
            {
              name: "标签",
              all: "2000T",
              use: "1800T",
              count: "12342",
              size: "2.5M",
              rate: 90,
            },
            {
              name: "普通指标",
              all: "1500T",
              use: "1000T",
              count: "44523",
              size: "1.7M",
              rate: 75,
            },
            {
              name: "普通报表",
              all: "1500T",
              use: "1000T",
              count: "44523",
              size: "1.7M",
              rate: 75,
            },
            {
              name: "普通同步",
              all: "1500T",
              use: "1000T",
              count: "44523",
              size: "1.7M",
              rate: 75,
            },
            {
              name: "集市同步",
              all: "1500T",
              use: "1000T",
              count: "44523",
              size: "1.7M",
              rate: 75,
            },
            {
              name: "出库接口",
              all: "1500T",
              use: "1000T",
              count: "44523",
              size: "1.7M",
              rate: 75,
            },
            {
              name: "入库接口",
              all: "1500T",
              use: "1000T",
              count: "44523",
              size: "1.7M",
              rate: 75,
            },
          ],
        },
        {
          name: "业务运行情况",
          data: [
            {
              name: "业务发展彩信通报",
              all: "1500T",
              use: "1000T",
              count: "44523",
              size: "1.7M",
              rate: 75,
            },
            {
              name: "季度销售彩信通报",
              all: "1500T",
              use: "1000T",
              count: "44523",
              size: "1.7M",
              rate: 75,
            },
            {
              name: "一经前驱调度",
              all: "1500T",
              use: "1000T",
              count: "44523",
              size: "1.7M",
              rate: 75,
            },
            {
              name: "手机经分调度",
              all: "1500T",
              use: "1000T",
              count: "44523",
              size: "1.7M",
              rate: 75,
            },
          ],
        },
      ],
      interfaceTabs: [
        {
          name: "上报接口",
          data: [
            {
              name: "9点前日",
              data: [
                {
                  name: "异常",
                  value: "15",
                },
                {
                  name: "已上报但未反馈校验",
                  value: "24",
                },
                {
                  name: "未上报",
                  value: "15",
                },

                // {
                //   name: "已上报且记录级校验成功",
                //   value: "37",
                // },
                // {
                //   name: "已上报且文件级校验成功",
                //   value: "5",
                // },
              ],
            },
            {
              name: "12点前日",
              data: [
                {
                  name: "异常",
                  value: "15",
                },
                {
                  name: "已上报但未反馈校验",
                  value: "24",
                },
                {
                  name: "未上报",
                  value: "15",
                },
                // {
                //   name: "已上报且记录级校验成功",
                //   value: "37",
                // },
                // {
                //   name: "已上报且文件级校验成功",
                //   value: "5",
                // },
              ],
            },
            {
              name: "15点前",
              data: [
                {
                  name: "异常",
                  value: "15",
                },
                {
                  name: "已上报但未反馈校验",
                  value: "24",
                },
                {
                  name: "未上报",
                  value: "15",
                },
                // {
                //   name: "已上报且记录级校验成功",
                //   value: "37",
                // },
                // {
                //   name: "已上报且文件级校验成功",
                //   value: "5",
                // },
              ],
            },
            {
              name: "18点前",
              data: [
                {
                  name: "异常",
                  value: "15",
                },
                {
                  name: "已上报但未反馈校验",
                  value: "24",
                },
                {
                  name: "未上报",
                  value: "15",
                },
                // {
                //   name: "已上报且记录级校验成功",
                //   value: "37",
                // },
                // {
                //   name: "已上报且文件级校验成功",
                //   value: "5",
                // },
              ],
            },
            {
              name: "3号前",
              data: [
                {
                  name: "异常",
                  value: "15",
                },
                {
                  name: "已上报但未反馈校验",
                  value: "24",
                },
                {
                  name: "未上报",
                  value: "15",
                },
                // {
                //   name: "已上报且记录级校验成功",
                //   value: "37",
                // },
                // {
                //   name: "已上报且文件级校验成功",
                //   value: "5",
                // },
              ],
            },
            {
              name: "5号前",
              data: [
                {
                  name: "异常",
                  value: "15",
                },
                {
                  name: "已上报但未反馈校验",
                  value: "24",
                },
                {
                  name: "未上报",
                  value: "15",
                },
                // {
                //   name: "已上报且记录级校验成功",
                //   value: "37",
                // },
                // {
                //   name: "已上报且文件级校验成功",
                //   value: "5",
                // },
              ],
            },
            {
              name: "8号前",
              data: [
                {
                  name: "异常",
                  value: "15",
                },
                {
                  name: "已上报但未反馈校验",
                  value: "24",
                },
                {
                  name: "未上报",
                  value: "15",
                },
                // {
                //   name: "已上报且记录级校验成功",
                //   value: "37",
                // },
                // {
                //   name: "已上报且文件级校验成功",
                //   value: "5",
                // },
              ],
            },
            {
              name: "10号前",
              data: [
                {
                  name: "异常",
                  value: "15",
                },
                {
                  name: "已上报但未反馈校验",
                  value: "24",
                },
                {
                  name: "未上报",
                  value: "15",
                },

                // {
                //   name: "已上报且记录级校验成功",
                //   value: "37",
                // },
                // {
                //   name: "已上报且文件级校验成功",
                //   value: "5",
                // },
              ],
            },
            {
              name: "15号前",
              data: [
                {
                  name: "异常",
                  value: "15",
                },
                {
                  name: "已上报但未反馈校验",
                  value: "24",
                },
                {
                  name: "未上报",
                  value: "15",
                },
                // {
                //   name: "已上报且记录级校验成功",
                //   value: "37",
                // },
                // {
                //   name: "已上报且文件级校验成功",
                //   value: "5",
                // },
              ],
            },
          ],
        },
        {
          name: "实时指标响应情况",
          data: [
            {
              name: "实时指标响应情况",
            },
          ],
        },

        {
          name: "批量短信取数情况",
          data: [
            {
              name: "批量短信取数情况",
            },
          ],
        },
      ],
      option: optionResult["mainright"],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
      tabIndex: 0,
      colonyIndex: 0,
      childrenIndex: 0,
      dateIndex: 0,
      interfaceIndex: 0,
      interfaceChildrenIndex: 0,
      dateList: ["当日", "当月"],
      runLeftAuto: true,
      runAutoplay: true,
      listData: [
        {
          title: "远程用户登录",
          ip: "10.154.123.112",
          date: "2017-12-16",
          person: "华为-XX",
          level: 5,
        },
        {
          title: "远程用户登录",
          ip: "10.154.123.112",
          date: "2017-12-16",
          person: "华为-XX",
          level: 5,
        },
        {
          title: "远程用户登录",
          ip: "10.154.123.112",
          date: "2017-12-16",
          person: "华为-XX",
          level: 5,
        },
        {
          title: "远程用户登录",
          ip: "10.154.123.112",
          date: "2017-12-16",
          person: "华为-XX",
          level: 5,
        },
        {
          title: "远程用户登录",
          ip: "10.154.123.112",
          date: "2017-12-16",
          person: "华为-XX",
          level: 5,
        },
        {
          title: "远程用户登录",
          ip: "10.154.123.112",
          date: "2017-12-16",
          person: "华为-XX",
          level: 5,
        },
        {
          title: "远程用户登录",
          ip: "10.154.123.112",
          date: "2017-12-16",
          person: "华为-XX",
          level: 5,
        },
        {
          title: "远程用户登录",
          ip: "10.154.123.112",
          date: "2017-12-16",
          person: "华为-XX",
          level: 5,
        },
        {
          title: "远程用户登录",
          ip: "10.154.123.112",
          date: "2017-12-16",
          person: "华为-XX",
          level: 5,
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "远程用户登录1",
          address: "上海市普陀区金沙江路 1518 弄",
          status: 0,
        },
        {
          date: "2016-05-04",
          name: "远程用户登录2",
          address: "上海市普陀区金沙江路 1517 弄",
          status: 0,
        },
        {
          date: "2016-05-01",
          name: "远程用户登录3",
          address: "上海市普陀区金沙江路 1519 弄",
          status: 1,
        },
        {
          date: "2016-05-03",
          name: "远程用户登录4",
          address: "上海市普陀区金沙江路 1516 弄",
          status: 1,
        },
      ],
      search: "",
    };
  },
  computed: {
    swiper() {
      if (this.isPreview && this.json.isAnimation == "true") {
        return this.$refs.NSwiper.swiper;
      }
    },
    Index() {
      return this.isIndex;
    },
    bussinessModule() {
      return this.bussinessTabs[this.tabIndex];
    },
    // interfaceData() {
    //   if (this.interfaceIndex == 1) {
    //     return this.interfaceTabs[this.interfaceIndex].data;
    //   } else {
    //     return [];
    //   }
    // },
    optionSingleHeightTime() {
      return {
        singleHeight: 27,
        waitTime: 2500,
      };
    },
    optionLeft() {
      return {
        direction: 2,
        limitMoveNum: 2,
      };
    },
  },
  mounted() {
    this.getChartData();
    this.initColony();
    this.initInterface();
    this.initBussiness();
  },
  methods: {
    showMore() {
      this.earlyWarn.visible = true;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    getHeight(index) {
      return index == 0 ? "200px" : "300px";
    },
    setAnimation(key, boolean) {
      this[key] = boolean;
      // this.runAutoplay = boolean;
      // console.log(boolean);
    },
    changeColony(index) {
      this.colonyIndex = index;
    },
    setDate(e) {
      let index = e.target.getAttribute("data-index");
      this.dateIndex = index;
    },
    // setInterfaceChildren(e) {
    //   let index = e.target.getAttribute("data-index");
    //   let key = "interfaceCarousel" + this.interfaceIndex;
    //   this.$refs[key][0].setActiveItem(index);
    //   this.interfaceChildrenIndex = index;
    // },
    changeBussiness(index) {
      this.childrenIndex = index;
    },
    changeInterface(index) {
      console.log(index);
      this.interfaceIndex = index;
    },
    setChildren(e) {
      let index = e.target.getAttribute("data-index");
      console.log(index);
      let key = "bussinessCarousel" + this.tabIndex;
      console.log(this.$refs[key]);
      this.$refs[key][0].setActiveItem(index);
      this.childrenIndex = index;
    },
    setColony(e) {
      let index = e.target.getAttribute("data-index");
      this.$refs.colonyCarousel.setActiveItem(index);
      this.colonyIndex = index;
    },
    setInterface(e) {
      let index = e.target.getAttribute("data-index");
      let key = "interfaceCarousel";
      console.log(this.$refs[key]);
      this.$refs[key].setActiveItem(index);
      this.interfaceIndex = index;
    },
    setTab(e) {
      let index = e.target.getAttribute("data-index");
      this.childrenIndex = 0;
      this.tabIndex = index;
    },
    initBussiness() {
      let data = this.bussinessTabs;
      let bussinessOption = this.option;
      let bussinessRight = optionResult["bussinessRight"];
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].data.length; j++) {
          var c = echarts.init(
            document.getElementById("mainright" + i + "_" + j)
          );
          if (i == 0) {
            c.setOption(bussinessOption);
          } else {
            c.setOption(bussinessRight);
          }
        }
      }
    },
    initInterface() {
      // 实时指标，上报接口，批量短信
      let data = this.interfaceTabs;
      this.getTarget();
      console.log(optionResult);
      for (var i = 0; i < data.length; i++) {
        var c = echarts.init(document.getElementById("mainleft" + i));
        if (i == 0) {
          c.setOption(optionResult["interface"]);
        } else if (i == 1) {
          c.setOption(optionResult["target"]);
        } else {
          c.setOption(optionResult["message"]);
        }
      }
    },
    initColony() {
      let colonyTabs = this.colonyTabs;
      // let colonyOptions = optionResult["colony"];
      let colonyOptions = "";
      for (var i = 0; i < colonyTabs.length; i++) {
        var c = echarts.init(document.getElementById("colony" + i));
        if (i == 0) {
          colonyOptions = optionResult["colonyRate"];
        } else {
          colonyOptions = optionResult["fileState"];
        }
        c.setOption(colonyOptions);
      }
    },
    getChartData() {
      // 图例legend数据
      let legendData = [];
      //this.pieData为后台返回数据
      if (this.pieData) {
        for (let i = 0; i < this.pieData[0].data.length; i++) {
          legendData.push(this.pieData[0].data[i].name);
        }
        this.option.legend.data = legendData;
        // this.option.color = [];
        var center;
        for (var i in this.pieData) {
          center = 18;
        }
        let gridList = this.pieData.map((item) => {
          return {
            type: "text",
            left: "center",
            top: "45%",
            style: {
              text: this.pieData[0].name,
              textAlign: "center",
              fill: "#000",
              fontSize: 28,
            },
          };
        });
        let titleList = this.pieData.map((item, index) => {
          return {
            text: item.name,
            left: center * Number(index * 1.2 + 0.65) + "%",
            top: "30%",
            // center: [center * Number(index * 1.2 + 0.9) + "%", "35%"],
            textStyle: {
              color: "#fff",
              fontSize: 12,
              align: "center",
            },
          };
        });
        for (var i = 0; i < this.pieData.length; i++) {
          this.option.series[i] = {
            name: this.pieData[i].name,
            type: "pie",
            center: [center * Number(i * 1.2 + 0.9) + "%", "35%"], //每个圆环图的位置，动态计算
            //第一个是内径。第二个是外径。内劲变大就是圆环
            radius: ["30%", "45%"], //每个圆环图的大小，动态计算
            avoidLabelOverlap: false,
            label: {
              //  饼图图形上的文本标签
              normal: {
                // normal 是图形在默认状态下的样式
                show: true,
                position: "inner",
                color: "#fff",
                fontSize: 11,
                formatter(params) {
                  return params.value + "个";
                }, // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
              },
              emphasis: {
                show: true,
                position: "top",
              },
            },

            labelLine: {
              normal: {
                show: true,
              },
            },
            data: [],
          };
          this.option.series[i].data = this.pieData[i].data;
        }
        // this.option.graphic = gridList; // 为环形 中间添加文字
        this.option.title = titleList;
        console.log(this.option);
        // this.pieData.foreach((item, i) => {
        //   console.log(i);
        // });
      } else {
        this.option.legend.data = [];
        this.option.series[0].data = [];
      }
    },
    getTarget() {
      // 图例legend数据
      let legendData = [];
      //this.pieData为后台返回数据
      let data = this.interfaceTabs[0].data;
      console.log(data);
      if (data) {
        // for (let i = 0; i < data.length; i++) {
        //   console.log(data[i]);
        //   if (legendData.length == 0) {
        //   }
        // }
        var center = 18;
        let len = data[0].data.length;
        for (var j = 0; j < len; j++) {
          legendData.push(data[0].data[j].name);
        }
        let titleList = data.map((item, index) => {
          index = Number(index) || index;
          let top = index <= 4 ? "30%" : "70%";
          let left =
            index <= 4
              ? center * Number(index * 1 + 0.65) + "%"
              : center * Number((index - 5) * 1 + 1.15) + "%";
          return {
            text: item.name,
            left: left,
            top: top,
            // center: [center * Number(index * 1.2 + 0.9) + "%", "35%"],
            textStyle: {
              color: "#fff",
              fontSize: 12,
              align: "center",
            },
          };
        });

        let options = optionResult["interface"];
        options.legend.data = legendData;

        for (var i = 0; i < data.length; i++) {
          let top = i <= 4 ? "35%" : "75%";
          let left =
            i <= 4
              ? center * Number(i * 1 + 0.8) + "%"
              : center * Number((i - 5) * 1 + 1.3) + "%";
          options.series[i] = {
            name: data[i].name,
            type: "pie",
            center: [left, top], //每个圆环图的位置，动态计算
            //第一个是内径。第二个是外径。内劲变大就是圆环
            radius: ["30%", "45%"], //每个圆环图的大小，动态计算
            avoidLabelOverlap: false,
            label: {
              //  饼图图形上的文本标签
              normal: {
                // normal 是图形在默认状态下的样式
                show: true,
                position: "inner",
                color: "#fff",
                fontSize: 11,
                formatter: "{c}个", // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
              },
              emphasis: {
                show: true,
                position: "center",
              },
            },
            labelLine: {
              normal: {
                show: true,
              },
            },
            data: [],
          };
          options.series[i].data = data[i].data;
        }
        options.title = titleList;
        console.log(options);
        // this.pieData.foreach((item, i) => {
        //   console.log(i);
        // });
      } else {
        options.legend.data = [];
        options.series[0].data = [];
      }
    },
    drawPie() {
      this.getChartData();
      // 基于准备好的dom，初始化echarts实例
      let pieChart = this.$echarts.init(document.getElementById("pieChart"));
      // 绘制图表
      console.log(this.option);
      pieChart.setOption(this.option);
    },
  },
};
</script>

<style lang="less" scoped>
@import "css/style.css";
ul.line {
  display: flex;
  padding: 10px 15px;
  padding-top: 5px !important;
  white-space: nowrap;
  flex-wrap: wrap;
  li {
    margin-left: 10px;
    font-size: 12px;
    cursor: pointer;
    padding: 0 5px 10px;
    position: relative;
    &:nth-child(1) {
      margin-left: 0px;
    }
    &:nth-child(10),
    &:nth-child(11) {
      margin-top: 10px;
    }
    &:nth-child(10) {
      margin-left: 0px;
    }
  }
  li::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 3px;
    background-color: #fff;
  }
  li.active {
    color: rgb(255, 141, 26);
  }
  li.active::after {
    width: 100%;
    background-color: rgb(255, 141, 26);
    transition: 0.5s linear;
  }
}
.mrbox_top_right .arightboxtop {
  // > ul > li {
  //   padding-bottom: 0 !important;
  // }
}
.el-carouse1-box {
  width: auto;
  height: auto;
}
.app-container {
  padding: 0px 10px 15px;
  box-sizing: border-box;
  .app-title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .app-title::before {
    content: "";
    position: absolute;
    left: 5%;
    border-top: 1px dotted #fff;
    height: 1px;
    width: 40%;
    top: 50%;
    transform: translateY(-50%);
  }
  .app-title::after {
    content: "";
    position: absolute;
    right: 5%;
    border-top: 1px dotted #fff;
    height: 1px;
    top: 50%;
    transform: translateY(-50%);
    width: 40%;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 10px 15px;
    li {
      width: 30%;
      margin-top: 10px;
      cursor: pointer;
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: 0;
      }
      span {
        margin-left: 10px;
      }
    }
    li:hover {
      i {
        color: red;
      }
      color: red;
    }
  }
}
.colony-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .colony-left {
    > div {
      margin-top: 10px;
      font-size: 14px;
      &:nth-child(1) {
        margin-top: 0;
      }
    }
  }
  .colony {
    width: 100%;
    height: 200px;
  }
}
.colony-top {
  display: flex;
  justify-content: space-between;
}
.bussiness-type {
  display: flex;
  justify-content: space-between;
  .line {
    padding: 0px 15px;
    padding-top: 10px !important;
  }
}
.seamless-warp {
  height: 162px;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.5;
  box-sizing: border-box;
}
// .arightboxbott {
//   padding: 10px 15px;
// }
.early-box {
  padding: 0px 15px 10px;
  .early-warning {
    display: flex;
    justify-content: space-between;

    li {
      width: 20%;
      text-align: center;
    }
  }
  .warn-head {
    background-color: rgb(202, 130, 101);
  }
  .item {
    font-size: 13px;
    line-height: 2;
    > li {
      // border: 1px solid #fff;

      li {
        box-sizing: border-box;
        height: 27px;
        line-height: 27px;
        border-right: 1px solid #fff;
        // border-right: 1px solid #fff;
        border-bottom: 1px solid #fff;
        &:first-child {
          border-left: 1px solid #fff;
        }
      }
    }
  }
}

/deep/ .el-carouse1-box .el-carousel__item {
  overflow: hidden;
}
.notice-box {
  position: fixed;
  top: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 65px;
  white-space: nowrap;
  color: #fff;
  width: 30%;
  min-width: 400px;
  overflow: hidden;
  .notice {
    position: relative;
    height: 100%;
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      line-height: 2;
      li {
        float: left;
        margin-right: 10px;
        width: 450px;
        text-align: center;
      }
    }
  }
}
.notice-scroll {
  ul > li {
    width: 100%;
  }
}
.btn-more {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  right: 30px;
  cursor: pointer;
}
</style>