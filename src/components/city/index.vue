 <template>
  <div class="echarts">
    <div :style="{ height: '55vh', width: '100%' }" ref="myEchart"></div>
  </div>
</template> 
<script>
import echarts from "echarts";
import "../../node_modules/echarts/map/js/city/mianyang"; // 引入绵阳地图数据，若无该js文件，先执行第六步生成js文件并复制到此处
export default {
  name: "map",
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.chinaConfigure();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    chinaConfigure() {
      let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
      window.onresize = myChart.resize;
      window.addEventListener("resize", myChart.resize);
      myChart.setOption({
        // 进行相关配置
        backgroundColor: "transparent",
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        geo: {
          // 这个是重点配置区
          map: "绵阳", // 地区名
          roam: true, //平移或缩放
          label: {
            normal: {
              show: true,
              color: "rgba(255, 255, 255, 0.5)",
            },
            emphasis: {
              color: "#fff",
            },
          },
          itemStyle: {
            normal: {
              areaColor: "#226DA4",
              borderColor: "rgba(255, 255, 255, 0.5)",
            },
            emphasis: {
              areaColor: "#188FFE",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      });
    },
  },
};
</script>