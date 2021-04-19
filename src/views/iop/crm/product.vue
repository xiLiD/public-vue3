<template>
  <div class="page-container common-css">
    <div class="page-main">
      <div class="page-menu">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          size="small"
          ref="addruleFormref"
        >
          <div class="menu-left">
            <el-form-item label="查询类别">
              <el-select v-model="formInline.region" placeholder="查询类别">
                <el-option
                  :label="item.name"
                  :value="item.value"
                  v-for="(item, index) in menuOptions"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="formInline.mobile"
                placeholder="请输入号码"
                type="tel"
                maxlength="11"
                @keyup="onKeyUp"
                clearable
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="getSearch" size="small"
                >查询</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
      <el-table
        class="expand-box"
        :data="tableData"
        border
        :header-cell-style="{ background: 'rgb(160,207,255)', color: '#fff' }"
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column prop="pgId" width="150" label="活动ID" />
        <el-table-column prop="pgName" width="400" label="活动名称" />
        <el-table-column prop="startDate" width="220" label="开始时间" />
        <el-table-column prop="endDate" width="220" label="结束时间" />
        <el-table-column prop="listTitle" label="产品列表" />
        <!-- <el-table-column label="产品列表">
          <template slot-scope="scope">
            <div class="show-title">
              {{ getTitle(scope.row.lists) }}
            </div>
            <div class="show-info">
              {{ getRows(scope.row.lists) }}
            </div>
          </template>
        </el-table-column> -->

        <el-table-column type="expand">
          <template slot-scope="props">
            <div class="hidden-box">
              <div
                class="show-title"
                v-for="(item, index) in props.row.lists"
                :key="index"
              >
                {{ item.offerId }} ：{{ item.offerName }}
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        :current-page.sync="queryData.pageNo"
        :page-size="queryData.pageSize"
        :total="queryData.pageTotal"
        @size-change="getChange"
        @current-change="getSearch"
        style="margin-top: 20px; text-align: center"
        :page-sizes="[10, 20, 30, 50, 70, 100]"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
  </div>
</template>

<script>
import apiSend from "@/api/iop/crm/httpRequest";
export default {
  data() {
    return {
      formInline: {
        mobile: "",
        region: "Y001000099",
      },
      menuOptions: [
        { name: "crm弹窗", value: "Y001000099" },
        { name: "目标客户校验", value: "CRM_targetCust" },
      ],
      tableData: [],
      activeNames: ["1"],
      queryData: {
        pageNo: 1,
        pageSize: 10,
        pageTotal: 0,
      },
      detailInfo: {
        id: "",
        data: {},
      },
      expands: [],
    };
  },
  computed: {},
  created() {},
  mounted() {
    // this.getSearch();
  },
  methods: {
    onKeyUp: function () {
      var self = this;
      self.formInline.mobile = self.formInline.mobile.replace(/[^\d]/g, "");
    },
    validatorData() {},
    getRows(list) {
      if (list.length > 0) {
        console.log(list);
        return list.splice(3, list.length - 3);
      }
    },
    getTitle(list) {
      let str = "";
      // let arr = list.splice(0, 3);
      let arrLen = list.length;
      console.log(list);
      list.forEach((item, index) => {
        let strings = index == arrLen - 1 ? "" : "、";
        str += item.offerId + ":" + item.offerName + strings;
      });
      str = str.length > 15 ? str.substr(0, 15) : str;
      str += "..." + "等" + list.length + "个";
      return str;
    },
    handleChange(val) {
      console.log(val);
    },
    getChange(e) {
      this.queryData.pageSize = e;
      this.getSearch();
    },
    getSearch() {
      if (!this.formInline.mobile) {
        this.$message.warning("请输入号码！");
        return;
      }
      let params = {
        eventCode: this.formInline.region,
        msisdn: this.formInline.mobile,
        pageNo: this.queryData.pageNo,
        pageSize: this.queryData.pageSize,
      };
      apiSend
        .findActiveOfferOffInfo({ data: params })
        .then((res) => {
          // this.tableData = res.data.data;
          let data = res.data.data.records;
          // let arr = [];
          // let dataArr = [];
          // data.forEach((item) => {
          //   if (arr.includes(item.pgId)) {
          //     arr.push(item.pgId);
          //     dataArr.forEach((dataItem) => {
          //       if (item.pgId == dataItem.pgId) {
          //         let arrList = item.lists
          //           .concat(dataItem.lists)
          //           .sort((a, b) => a.offerId - b.offerId);
          //         dataItem.lists = arrList;
          //       }
          //     });
          //     console.log("合并", dataArr);
          //   } else {
          //     arr.push(item.pgId);
          //     dataArr.push(item);
          //   }
          // });
          this.tableData = data;
          this.tableData.map((item) => {
            let obj = item;
            item["listTitle"] = this.getTitle(item.lists);
          });
          this.queryData.pageNo = res.data.data.current;
          this.queryData.pageSize = res.data.data.size;
          this.queryData.pageTotal = res.data.data.total;
          // console.log(dataArr);
        })
        .catch((err) => {
          this.$message.error(err.data.msg);
        });
    },
  },
};
</script>
<style lang="less">
.app-main {
  padding: 20px 15px;
}
.menu-right .menu-btn {
  display: flex !important;
}
.page-container {
  box-sizing: border-box;
  width: 100%;
  padding: 30px 20px;
  box-shadow: 0 0 5px #999;
  border-radius: 5px;
  background-color: #fff;
  .menu-right .upload-demo {
    display: inline-block;
    margin: 10px;
  }
}
.export-dialog {
  .dialog-top {
    display: flex;
    justify-content: space-between;
    .dialog-left {
      display: flex;
      .upload-demo {
        margin-right: 10px;
        position: relative;
        .el-upload-list {
          position: absolute;
          top: 30px;
          left: 0;
        }
      }
    }
  }
  .dialog-info {
    margin-top: 50px;
    min-height: 300px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    line-height: 1.5;
  }
  .btn-group {
    text-align: right;
  }
}
.el-message .el-message-box__wrapper {
  z-index: 99999;
}

.expand-box {
  .hidden-box {
    // width: 18.3%;
    // float: right;
    // text-align: left;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .show-title {
    font-size: 13px;
    color: #999;
    line-height: 2;
    box-shadow: 0 0 5px #999;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 8px 5px;
    // margin-top: 5px;
    // &:nth-child(1) {
    //   margin-top: 0;
    // }
  }
  .el-table__expanded-cell {
    padding: 10px 50px;
  }
}
</style>