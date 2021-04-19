<template>
  <div class="page-container common-css">
    <div class="page-main">
      <div class="page-menu">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          size="small"
        >
          <div class="menu-left">
            <el-form-item>
              <el-input
                v-model="formInline.search"
                placeholder="活动编码或名称"
                clearable
                size="small"
              >
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </el-form-item>
            <el-button
              type="primary"
              @click="findTable"
              size="small"
              icon="el-icon-search"
              >搜索</el-button
            >
            <el-button type="info" size="small" icon="el-icon-refresh" plain
              >重置</el-button
            >
            <el-button type="primary" size="small" icon="el-icon-arrow-down"
              >高级搜索
            </el-button>
          </div>
        </el-form>
        <el-form
          :inline="true"
          :model="formInline"
          class="search-form"
          size="small"
        >
          <div class="menu-left group-input">
            <el-form-item label="活动类型" label-width="80px">
              <el-select
                size="small"
                v-model="formInline.type"
                placeholder="请选择"
              >
                <el-option
                  :label="item.name"
                  :value="item.value"
                  v-for="(item, index) in menuOptions"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="状态" label-width="80px">
              <el-select
                size="small"
                v-model="formInline.status"
                placeholder="请选择"
              >
                <el-option
                  :label="item.name"
                  :value="item.value"
                  v-for="(item, index) in menuOptions"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="归属区域" label-width="80px">
              <el-select
                size="small"
                v-model="formInline.area"
                placeholder="请选择"
              >
                <el-option
                  :label="item.name"
                  :value="item.value"
                  v-for="(item, index) in menuOptions"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="menu-left group-input">
            <el-form-item label="开始时间" label-width="80px">
              <el-date-picker
                v-model="formInline.startTime"
                type="date"
                placeholder="选择日期"
                size="small"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间" label-width="80px">
              <el-date-picker
                v-model="formInline.endTime"
                type="date"
                placeholder="选择日期"
                size="small"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="创建人" label-width="80px">
              <el-input
                v-model="formInline.creater"
                placeholder="请选择"
                clearable
                size="small"
                disabled
              >
              </el-input>
            </el-form-item>
          </div>
          <div class="menu-left">
            <el-form-item
              label="渠道"
              label-width="80px"
              @click.native="getSelet"
              data-type="渠道"
            >
              <el-input
                v-model="formInline.cannel"
                placeholder="请选择"
                clearable
                size="small"
                disabled
              >
                <template slot="append"> 选择 </template>
              </el-input>
            </el-form-item>
            <el-form-item
              label="运营位"
              label-width="80px"
              @click.native="getSelet"
              data-type="运营位"
            >
              <el-input
                v-model="formInline.motion"
                placeholder="请选择"
                clearable
                size="small"
                disabled
              >
                <template slot="append">选择</template>
              </el-input>
            </el-form-item>
            <el-form-item
              label="销售品"
              label-width="80px"
              @click.native="getSelet"
              data-type="销售品"
            >
              <el-input
                v-model="formInline.sale"
                placeholder="请选择"
                clearable
                size="small"
                disabled
              >
                <template slot="append">选择</template>
              </el-input>
            </el-form-item>
            <el-form-item
              label="事件"
              label-width="80px"
              @click.native="getSelet"
              data-type="事件"
            >
              <el-input
                v-model="formInline.events"
                placeholder="请选择"
                clearable
                size="small"
                disabled
              >
                <template slot="append">选择</template>
              </el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="search-header">
        <div class="header-title">活动列表</div>
        <div class="header-operate">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
              <el-button type="primary" icon="el-icon-plus" size="small"
                >新增</el-button
              >
            </el-form-item>
            <el-form-item>
              <el-button type="warning" icon="el-icon-download" size="small"
                >导入</el-button
              >
            </el-form-item>
            <el-form-item>
              <el-button type="success" icon="el-icon-upload2" size="small"
                >导出</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
      <el-table
        :data="tableData"
        border
        :height="getHeight"
        :header-cll-style="{ background: 'rgb(160,207,255)', color: '#fff' }"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="名称">
          <template slot-scope="prop">
            <a @click="openLink" :data-link="prop.row.link" target="_blank">{{
              prop.row.name
            }}</a>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="活动类型" />
        <el-table-column prop="level" label="优先级" />
        <el-table-column prop="startTime" label="开始日期" />
        <el-table-column prop="endTime" label="结束日期" />
        <el-table-column prop="updateTime" label="修改日期" />
        <el-table-column prop="creater" label="创建人" />
        <el-table-column prop="status" label="状态" />
        <el-table-column prop="area" label="归属区域" />
        <el-table-column prop="iopType" label="IOP类型" />
        <el-table-column label="操作" class="btn-operate">
          <template>
            <!-- <i class="icon-operate">
              <img src="./images/edit.png" title="编辑" fit="contain" />
            </i>
            <i class="icon-operate">
              <img src="./images/publish.png" title="发布" fit="contain" />
            </i>
            <i class="icon-operate">
              <img src="./images/delete.png" title="删除" fit="contain" />
            </i>
            <i class="icon-operate">
              <img src="./images/spread.png" title="展开" fit="contain" />
            </i> -->
            <i class="el-icon-edit-outline" title="编辑"></i>
            <i class="el-icon-s-promotion" title="发布"></i>
            <i class="el-icon-delete" title="删除"></i>
            <i class="el-icon-rank" title="展开"></i>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page.sync="queryData.pageNo"
        :page-size="queryData.pageSize"
        :total="queryData.total"
        style="margin-top: 20px; text-align: center"
        :page-sizes="[10, 20, 30, 50, 70, 100]"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <active-components
      ref="activeComponens"
      :dialogInfo="dialogInfo"
      @selectClick="selectOptions"
    ></active-components>
  </div>
</template>

<script>
import apiSend from "@/api/axios.js";

import base from "@/api/baseUrl";
import { mapState } from "vuex";
import ActiveComponents from "./components/select.vue";
export default {
  components: {
    ActiveComponents,
  },
  data() {
    return {
      queryData: {
        total: 0,
        pageSize: 10,
        pageNo: 1,
      },
      formInline: {
        type: "",
        status: 0,
        area: "",
        startTime: "",
        endTime: "",
        creater: "",
        events: "",
      },
      searchGather: [],
      menuOptions: [
        { name: "产品编码", value: 0 },
        { name: "产品名称", value: 1 },
      ],
      tableData: [
        {
          name: "测试",
          type: "入网类",
          level: "50",
          startTime: "2020-10-10",
          endTime: "2021-01-01",
          updateTime: "2021-03-01",
          creater: "610092",
          status: "草稿",
          area: "湖南省",
          iopType: "省级策划省级执行",
          link: "www.baidu.com",
        },
        {
          name: "测试",
          type: "入网类",
          level: "50",
          startTime: "2020-10-10",
          endTime: "2021-01-01",
          updateTime: "2021-03-01",
          creater: "610092",
          status: "草稿",
          area: "湖南省",
          iopType: "省级策划省级执行",
          link: "www.baidu.com",
        },
        {
          name: "测试",
          type: "入网类",
          level: "50",
          startTime: "2020-10-10",
          endTime: "2021-01-01",
          updateTime: "2021-03-01",
          creater: "610092",
          status: "草稿",
          area: "湖南省",
          iopType: "省级策划省级执行",
          link: "www.baidu.com",
        },
        {
          name: "测试",
          type: "入网类",
          level: "50",
          startTime: "2020-10-10",
          endTime: "2021-01-01",
          updateTime: "2021-03-01",
          creater: "610092",
          status: "草稿",
          area: "湖南省",
          iopType: "省级策划省级执行",
          link: "www.baidu.com",
        },
        {
          name: "测试",
          type: "入网类",
          level: "50",
          startTime: "2020-10-10",
          endTime: "2021-01-01",
          updateTime: "2021-03-01",
          creater: "610092",
          status: "草稿",
          area: "湖南省",
          iopType: "省级策划省级执行",
          link: "www.baidu.com",
        },
        {
          name: "测试",
          type: "入网类",
          level: "50",
          startTime: "2020-10-10",
          endTime: "2021-01-01",
          updateTime: "2021-03-01",
          creater: "610092",
          status: "草稿",
          area: "湖南省",
          iopType: "省级策划省级执行",
          link: "www.baidu.com",
        },
        {
          name: "测试",
          type: "入网类",
          level: "50",
          startTime: "2020-10-10",
          endTime: "2021-01-01",
          updateTime: "2021-03-01",
          creater: "610092",
          status: "草稿",
          area: "湖南省",
          iopType: "省级策划省级执行",
          link: "www.baidu.com",
        },
        {
          name: "测试",
          type: "入网类",
          level: "50",
          startTime: "2020-10-10",
          endTime: "2021-01-01",
          updateTime: "2021-03-01",
          creater: "610092",
          status: "草稿",
          area: "湖南省",
          iopType: "省级策划省级执行",
          link: "www.baidu.com",
        },
      ],
      dialogInfo: {
        title: "",
      },
      optionsObject: {
        cannel: {
          data: [],
          select: [],
        },
        motion: {
          data: [],
          select: [],
        },
        sale: {
          data: [],
          select: [],
        },
        events: {
          data: [],
          select: [],
        },
      },
    };
  },
  computed: {
    getHeight() {
      return window.innerHeight - 400;
    },
  },
  created() {
    // this.findTable();
  },
  methods: {
    getSelet(e) {
      console.log(e);
      if (!e.target.className.includes("el-input-group__append")) {
        return;
      }
      let type = e.currentTarget.getAttribute("data-type");
      this.$refs["activeComponens"].setShow(true);
      this.dialogInfo.title = type;
    },
    findTable() {
      // debugger
      let params = {
        pageNo: this.queryData.pageNo,
        pageSize: this.queryData.pageSize,
      };
      let key = this.formInline.region == 0 ? "prodCode" : "prodName";
      let key2 = key == "prodCode" ? "prodName" : "prodCode";
      params[key] = this.formInline.search;
      params[key2] = "";
      apiSend.prodFindProdInfo({ data: params }).then((res) => {
        let arr = [];

        if (res.data.data.records) {
          res.data.data.records.forEach((item) => {
            let {
              operationtime, // eslint-disable-line no-unused-vars
              operationuser, // eslint-disable-line no-unused-vars
              stat, // eslint-disable-line no-unused-vars
              ...result
            } = item;
            arr.push(result);
          });
          this.tableData = arr;
        }
        this.setrowspans();
        this.queryData.total = res.data.data.total;

        // this.getColSpanData("prodcode", this.tableData);
      });
    },
    openLink(e) {
      let url = e.target.getAttribute("data-link");
      //   window.open(url);
      // console.log(url);
      window.open(url, "_blank");
      // window.location.href = url;
    },
    selectOptions(data) {
      console.log(data);
      var keyName = "";
      switch (data.title) {
        case "渠道":
          keyName = "cannel";
        case "运营位":
          keyName = "motion";
        case "销售位":
          keyName = "sale";
        case "事件":
          keyName = "events";
          break;
      }
      this.optionsObject[keyName] = data.data;
      console.log(this.optionsObject);
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
  .menu-right .upload-demo {
    display: inline-block;
    margin: 10px;
  }
  .page-menu {
    // text-align: right;
    .demo-form-inline {
      justify-content: flex-end;
    }
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
.el-input-group__append {
  cursor: pointer;
}
.group-input .el-form-item__content .el-input {
  width: 270px;
}
.el-table {
  // height: calc(100vh - 400px);
  // overflow-y: scroll;
  .icon-operate {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: 5px;
    &:nth-child(1) {
      margin-left: 0;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  i {
    font-size: 20px;
    margin-left: 5px;
    cursor: pointer;
    &:nth-child(1) {
      margin-left: 0;
    }
  }
  .el-icon-edit-outline,
  .el-icon-s-promotion,
  .el-icon-rank {
    color: #409eef;
  }
  .el-icon-delete {
    color: #f56c6c;
  }
  a {
    color: #409eff;
    cursor: pointer;
  }
}
.search-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid #ddd;
  .header-title {
    padding-left: 10px;
    position: relative;
  }
  .header-title::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    border-left: 3px solid #f56c6c;
  }
  .el-form-item {
    margin-bottom: 0;
  }
}
</style>