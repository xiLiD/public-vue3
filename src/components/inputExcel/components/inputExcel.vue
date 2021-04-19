<template>
  <div class="page-container common-css">
    <div class="btn">
      <input
        class="input-file"
        type="file"
        @change="exportData"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        style="display: none"
      />
      <el-button @click="btnClick" type="success" size="small"
        >导入EXCEL</el-button
      >
    </div>
    <div class="page-main">
      <!-- <el-table
        :data="excleTable"
        style="width: 100%"
        class="table-data"
        stripe
        border
        :height="Height"
      >
        <template slot-scope="scope">
          <div v-for="item in 3" :key="item">
            {{ scope }}
          </div>
        </template>
        <el-table-column
          :label="item.header"
          :prop="item.key"
          v-for="(item, index) in headerTable"
          :key="index"
          min-width="170px"
        >
        </el-table-column>
      </el-table> -->
      <div class="table-box road_table">
        <table v-if="excleTable.length > 0">
          <thead>
            <tr>
              <th v-for="(item, index) in headerTable" :key="index">
                {{ item.header }}
              </th>
            </tr>
            <!-- <tr
              v-for="(item, index) in outTimeTable"
              :key="index"
              class="warn-time"
            >
              <td
                v-for="(headerItem, headerIndex) in headerTable"
                :key="headerIndex"
              >
                {{ item[headerItem.key] }}
              </td>
            </tr> -->
          </thead>
          <tbody :style="{ height: Height + 'px', 'overflow-y': 'scroll' }">
            <tr
              v-for="(item, index) in outTimeTable"
              :key="index + 'a'"
              class="warn-time"
            >
              <td
                v-for="(headerItem, headerIndex) in headerTable"
                :key="headerIndex"
                style="
                  height: 25px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                "
                :title="item[headerItem.key]"
              >
                {{ item[headerItem.key] }}
              </td>
            </tr>
            <tr v-for="(item, index) in bodyTable" :key="index">
              <td
                v-for="(headerItem, headerIndex) in headerTable"
                :key="headerIndex"
                :result="headerItem"
                :title="item[headerItem.key]"
                style="
                  height: 25px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                "
              >
                {{ item[headerItem.key] }}
              </td>
            </tr>
          </tbody>
        </table>
        <!-- <ul>
          <li v-for="(item, index) in headerTable" :key="index">
            {{ item.header }}
          </li>
        </ul> -->
        <!-- <div class="table-container">
          <ul>
            <li v-for="(item, index) in excleTable" :key="index">
              {{ item[getItem(index)] }}
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import XLSX from "xlsx";

export default {
  name: "HelloWorld",
  data() {
    return {
      headerTable: [],
      excleTable: [],
      bodyTable: [],
      day: [
        "2021-01-01",
        "2021-01-02",
        "2021-01-03",
        "2021-02-11",
        "2021-02-12",
        "2021-02-13",
        "2021-02-14",
        "2021-02-15",
        "2021-02-16",
        "2021-02-17",
        "2021-04-03",
        "2021-04-04",
        "2021-04-05",
        "2021-05-01",
        "2021-05-02",
        "2021-05-03",
        "2021-05-04",
        "2021-05-05",
        "2021-06-12",
        "2021-06-13",
        "2021-06-14",
        "2021-09-19",
        "2021-09-20",
        "2021-09-21",
        "2021-10-01",
        "2021-10-02",
        "2021-10-03",
        "2021-10-04",
        "2021-10-05",
        "2021-10-06",
        "2021-10-07",
      ],
      work: [
        "2021-02-07",
        "2021-02-20",
        "2021-04-25",
        "2021-05-08",
        "2021-09-18",
        "2021-09-26",
        "2021-10-09",
      ],
      Height: 0,
      timeName: "",
    };
  },
  computed: {
    outTimeTable() {
      // if (this.excleTable.length == 0) {
      //   return [];
      // }
      // console.log(this.timeName);
      // console.log("excleTable", this.excleTable);
      let data = this.excleTable
        .filter((item) => {
          console.log(item[this.timeName]);
          return item[this.timeName] > 0;
        })
        .sort((a, b) => {
          return b[this.timeName] - a[this.timeName];
        });
      // this.Height = this.Height - data.length * 40;
      return data;
    },
  },
  props: {
    type: String,
    default: "选择excel文件",
  },
  mounted() {
    let that = this;
    // window.onresize = function () {
    //   that.Height = window.innerHeight - 60 - 30 - 32 - 40 + "px";
    // };
    // console.log(document.body.offsetHeight);
    this.Height = document.body.offsetHeight - 60 - 30 - 32 - 36;
  },
  methods: {
    getItem(index) {
      if (index > 0) {
        return "__EMPTY" + "_" + index;
      } else {
        return "__EMPTY";
      }
    },
    btnClick() {
      document.querySelector(".input-file").click();
    },
    exportData(event) {
      if (!event.currentTarget.files.length) {
        return;
      }
      const that = this;
      // 拿取文件对象
      var f = event.currentTarget.files[0];
      // 用FileReader来读取
      var reader = new FileReader();
      // 重写FileReader上的readAsBinaryString方法
      FileReader.prototype.readAsBinaryString = function (f) {
        var binary = "";
        var wb; // 读取完成的数据
        var outdata; // 你需要的数据
        var reader = new FileReader();
        reader.onload = function (e) {
          // 读取成Uint8Array，再转换为Unicode编码（Unicode占两个字节）
          var bytes = new Uint8Array(reader.result);
          var length = bytes.byteLength;
          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          // 接下来就是xlsx了，具体可看api
          wb = XLSX.read(binary, {
            type: "binary",
          });
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
          // 自定义方法向父组件传递数据
          // window.result = outdata;
          that.setArrayData(outdata);
          console.log("outdata = ", outdata);
          //   that.$emit('getResult', outdata)
        };
        reader.readAsArrayBuffer(f);
      };
      reader.readAsBinaryString(f);
    },
    clearTable() {},
    timestampToTime(timestamp) {
      var date = new Date(Number(timestamp)); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "";
      let strDate = Y + M + D;
      // console.log("strDate", strDate);
      return strDate;
    },
    setArrayData(data) {
      let result = data.map((dataItem, dataIndex) => {
        var key = Object.keys(dataItem)[0];
        let result = dataItem;
        delete result[key];
        return result;
      });
      // console.log("reuslt", result);
      let header = result.filter((item, index) => index == 0);
      let container = result.filter((item, index) => index > 0);
      // console.log(result);
      // console.log(container);

      let tableData = [];
      let keyName = "", // 分配完成时间的位置
        outTimeName = "", // 超时时间的位置
        outTimeNum = "", // 超时天数
        finished = "", // 闭环时间位置
        willOut = ""; // 距离超时剩余
      for (let i in header[0]) {
        let obj = {
          header: header[0][i],
          key: i,
        };
        if (header[0][i] == "需求分配完成时间") {
          keyName = i;
        }
        if (header[0][i] == "当前是否已超时") {
          outTimeName = i;
        }
        if (header[0][i] == "超时天数") {
          outTimeNum = i;
        }
        if (header[0][i] == "需求分析完成时间") {
          // let year = item[finished] / console.log(new Date(item[finished]));

          finished = i;
        }
        if (header[0][i] == "距离超时剩余") {
          // let year = item[finished] / console.log(new Date(item[finished]));
          willOut = i;
        }
        tableData.push(obj);
      }
      console.log(willOut);
      this.timeName = outTimeNum;
      this.willOut = willOut;
      container.forEach((item) => {
        // console.log(this.timestampToTime(item[finished]));
        // console.log("当前结束时间，时间戳", new Date(item[keyName]).getTime());
        let stime = item[keyName];
        // let endtime = item[finished] || this.getNowDate();
        let endtime = item[finished] ? item[finished] : this.getNowDate();
        // console.log("开始时间", stime);
        // console.log("结束时间", endtime);
        let value = this.checkOutTime(stime, endtime)["value"];
        let label = this.checkOutTime(stime, endtime)["label"];
        item[outTimeName] = label;
        // item[outTimeNum] = value;
        item[outTimeNum] = value > 0 ? value : "";
        item[willOut] = value >= 0 ? "" : -value;
        console.log("willOut", item[willOut]);
      });
      var body = container
        .filter((item) => {
          return !item[outTimeNum];
        })
        .sort((a, b) => {
          return a[willOut] - b[willOut];
        })
        .map((item) => {
          let obj = item;
          obj[willOut] = obj[willOut] == 0 ? "不足一天" : obj[willOut];
          return obj;
        });
      // console.log(body);
      this.excleTable = container;
      this.bodyTable = body;
      this.headerTable = tableData;
    },
    getNowDate() {
      let year = new Date().getFullYear();
      let month = new Date().getMonth() + 1;
      let date = new Date().getDate();
      month = month > 9 ? month : "0" + month;
      date = date > 9 ? date : "0" + date;
      return year + "-" + month + "-" + date;
    },
    getWeekend() {
      let date = new Date();
      let year = date.getFullYear();
      let m,
        d,
        day,
        dayNum,
        result = "";
      let weekend = [];
      for (m = 1; m <= 12; m++) {
        switch (m) {
          case 1:
          case 3:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
            dayNum = 31;
            break;
          case 4:
          case 6:
          case 9:
          case 11:
            dayNum = 30;
            break;
          case 2:
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
              dayNum = 29;
            } else {
              dayNum = 28;
            }
            break;
        }

        for (d = 1; d <= dayNum; d++) {
          date.setMonth(m - 1, d);
          day = date.getDay();
          if (day == 0) {
            result +=
              "周日bai" +
              date.getFullYear() +
              "-" +
              (date.getMonth() + 1) +
              "-" +
              date.getDate() +
              "<br/>";
          } else if (day == 6) {
            result +=
              "周六" +
              date.getFullYear() +
              "-" +
              (date.getMonth() + 1) +
              "-" +
              date.getDate() +
              "<br/>";
          }
          if (day == 0 || day == 6) {
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let day = date.getDate();
            month = month > 9 ? month : "0" + month;
            day = day > 9 ? day : "0" + day;
            let item = year + "-" + month + "-" + day;
            weekend.push(item);
          }
        }
      }
      return weekend;
    },
    checkOutTime(stime, etime) {
      // let timestamp = new Date(stime).getTime();
      // let endtstamp = new Date(etime).getTime();
      let dayArr = this.getdiffdate(stime, etime);
      // console.log(dayArr);
      let dataResult = dayArr
        .filter((item) => {
          return new Date(item).getDay() != 0;
        })
        .filter((item) => {
          return new Date(item).getDay() != 6;
        })
        .filter((item) => {
          return !this.day.includes(item);
        })
        .filter((item) => {
          return !this.work.includes(item);
        });
      console.log("dataResult", dataResult);
      let day = dataResult.length - 8;
      if (day > 0) {
        return {
          label: "是",
          value: day,
        };
      } else {
        return {
          label: "否",
          value: day,
        };
      }
    },

    //获取两日期之间日期列表函数
    getdiffdate(stime, etime) {
      //初始化日期列表，数组
      // console.log("开始日期", stime);
      // console.log("结束日期", etime);
      var diffdate = new Array();
      var i = 0;
      //开始日期小于等于结束日期,并循环
      while (stime <= etime) {
        diffdate[i] = stime;

        //获取开始日期时间戳
        var stime_ts = new Date(stime).getTime();
        // console.log("当前日期：" + stime + "当前时间戳：" + stime_ts);

        //增加一天时间戳后的日期
        var next_date = stime_ts + 24 * 60 * 60 * 1000;

        //拼接年月日，这里的月份会返回（0-11），所以要+1
        var next_dates_y = new Date(next_date).getFullYear() + "-";
        var next_dates_m =
          new Date(next_date).getMonth() + 1 < 10
            ? "0" + (new Date(next_date).getMonth() + 1) + "-"
            : new Date(next_date).getMonth() + 1 + "-";
        var next_dates_d =
          new Date(next_date).getDate() < 10
            ? "0" + new Date(next_date).getDate()
            : new Date(next_date).getDate();
        // var next_dates_h =
        //   new Date(next_date).getHours() < 10
        //     ? "0" + new Date(next_date).getHours() + ":"
        //     : new Date(next_date).getHours() + ":";
        // var next_dates_min =
        //   new Date(next_date).getMinutes() < 10
        //     ? "0" + new Date(next_date).getMinutes() + ":"
        //     : new Date(next_date).getMinutes() + ":";
        // var next_dates_s =
        //   new Date(next_date).getSeconds() < 10
        //     ? "0" + new Date(next_date).getSeconds()
        //     : new Date(next_date).getSeconds();
        stime = next_dates_y + next_dates_m + next_dates_d;

        //增加数组key
        i++;
      }
      console.log(diffdate);
      return diffdate;
    },
  },
};
</script>

<style lang="less" scoped>
.page-container {
  height: 100%;
  padding: 18px 15px;
  .btn {
    text-align: right;
  }
  .page-main {
    margin-top: 15px;
    // height: calc(100% - 40px - 15px);
    // box-sizing: border-box;
    // overflow-y: scroll;
  }
}
.table-data {
  // height: 100%;
  // overflow-y: scroll;
}
.table-box {
  ul {
    display: flex;
    justify-content: space-between;
    flex: 1;
    li {
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
    }
  }
}

body {
  font: normal 11px auto "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
  color: #4f6b72;
  background: #e6eae9;
}

a {
  color: #c75f3e;
}

#mytable {
  width: 700px;
  padding: 0;
  margin: 0;
}

caption {
  padding: 0 0 5px 0;
  width: 700px;
  font: italic 11px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
  text-align: right;
}

th {
  font: bold 11px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
  color: #4f6b72;
  border-right: 1px solid #c1dad7;
  border-bottom: 1px solid #c1dad7;
  border-top: 1px solid #c1dad7;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: left;
  padding: 6px 6px 6px 12px;
  background: #cae8ea no-repeat;
}

th.nobg {
  border-top: 0;
  border-left: 0;
  border-right: 1px solid #c1dad7;
  background: none;
}

td {
  border-right: 1px solid #c1dad7;
  border-bottom: 1px solid #c1dad7;
  background: #fff;
  font-size: 11px;
  padding: 6px 6px 6px 12px;
  color: #4f6b72;
}

td.alt {
  background: #f5fafa;
  color: #797268;
}

th.spec {
  border-left: 1px solid #c1dad7;
  border-top: 0;
  background: #fff no-repeat;
  font: bold 10px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
}

th.specalt {
  border-left: 1px solid #c1dad7;
  border-top: 0;
  background: #f5fafa no-repeat;
  font: bold 10px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
  color: #797268;
}

/*---------for IE 5.x bug*/
html > body td {
  font-size: 11px;
}

body,
td,
th {
  font-family: 宋体, Arial;
  font-size: 12px;
}
table {
  border-left: 1px solid #c1dad7;
  border-right: 1px solid #c1dad7;
}

/**表格*/
.road_table thead,
.road_table tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

/*chrome 和Safari----隐藏滚动条*/
.road_table tbody::-webkit-scrollbar {
  width: 0 !important;
}

/*IE 10+*/
.road_table tbody {
  -ms-overflow-style: none;
}

/*Firefox*/
.road_table tbody {
  overflow: -moz-scrollbars-none;
}

.road_table tbody {
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
}
.warn-time td {
  background-color: #ff8800;
  color: #fff;
}

.fixedHead {
  position: sticky;
  top: 0;
}
.page-container {
  // min-height: 100%;
  // height: auto;
}
</style>