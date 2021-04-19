<template>
  <div class="page-content">
    <el-col :span="4" v-if="menuList.length > 0">
      <!-- <h5>默认颜色</h5> -->
      <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="setMenuIndex"
      >
        <el-menu-item
          :index="menuIndex.toString()"
          v-for="(menuItem, menuIndex) in menuList"
          :key="menuIndex"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ menuItem.class1Name }}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20" v-if="menuList.length > 0">
      <el-table
        :data="productData"
        style="width: 100%"
        @expand-change="getExpand"
        :expand-row-keys="expands"
        row-key="codeKey"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table :data="props.row.children" row-key="index">
              <el-table-column label="客户群 ID" prop="tagId">
              </el-table-column>
              <el-table-column label="客户群名称">
                <template slot-scope="prop">
                  <a
                    @click="openLink"
                    :data-link="prop.row.url"
                    target="_blank"
                    >{{ prop.row.tagName }}</a
                  >
                </template>
              </el-table-column>
              <el-table-column label="引用到期时间" prop="endDate">
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column label="产品 ID" prop="campnProdCode">
        </el-table-column>
        <el-table-column label="产品名称" prop="campnProdName">
        </el-table-column>
        <el-table-column label="被引客户群数">
          <template slot-scope="props">
            <span style="color: rgb(140, 197, 255); font-weight: bold">{{
              props.row.counts
            }}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </div>
</template>
<script>
import apiSend from "@/api/iop/crm/httpRequest";
export default {
  data() {
    return {
      tableData: [],
      menuList: [],
      menuClassId: "",
      productId: "",
      productData: [],
      expands: [],
    };
  },
  mounted() {
    this.getMenu();
  },
  methods: {
    openLink(e) {
      let url = e.target.getAttribute("data-link");
      //   window.open(url);
      // console.log(url);
      window.open(url, "_blank");
      // window.location.href = url;
    },
    setMenuIndex(e) {
      this.menuClassId = this.menuList[e].class1Id;
      this.getProducts();
    },
    getMenu() {
      apiSend
        .findTdCaCrmCampnConfigInfo()
        .then((res) => {
          this.menuList = res.data.data;
          this.menuClassId = this.menuList[0].class1Id;
          this.getProducts();
        })
        .catch((err) => {
          this.$message.error(err.data.msg);
        });
    },
    getProducts() {
      let params = {
        class1Id: this.menuClassId,
      };
      apiSend
        .findTdCaCrmCampnConfigProdInfo({ data: params, showLoading: true })
        .then((res) => {
          res.data.data.map((item, index) => {
            let obj = item;
            obj["codeKey"] = item.campnProdCode + "_" + index;
            return obj;
          });
          this.productData = res.data.data;
          this.expands = [];
        })
        .catch((err) => {
          this.$message.error(err.data.msg);
        });
    },
    getExpand(row, expanded) {
      let index = this.productData.findIndex((item) => {
        // console.log(item.campnProdCode, row.campnProdCode);
        return item.codeKey == row.codeKey;
      });
      if (expanded.length > 0) {
        let params = {
          resourceId: row.campnProdCode,
        };
        if (expanded.length > 1) {
          this.expands = [];
        }
        apiSend
          .findTCkmSegmentInfo({ data: params, showLoading: true })
          .then((res) => {
            res.data.data.map((item, index) => {
              let obj = item;
              obj["index"] = index;
              return obj;
            });
            this.children = res.data.data;
            this.productData[index].children = res.data.data;
            this.expands.push(row.codeKey);
          })
          .catch((err) => {
            this.$message.error(err.data.msg);
          });
      } else {
        this.expands = [];
      }
    },
  },
};
</script>
<style scoped>
.page-content {
  width: 100%;
  padding: 20px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.el-menu-vertical-demo {
  height: calc(100vh - 40px);
  width: 16.3%;
  box-sizing: border-box;
  overflow-y: scroll;
  position: fixed;
  left: 16px;
  top: 20px;
}
::-webkit-scrollbar {
  width: 4px;
  background-color: rgb(84, 92, 100);

  border-radius: 3px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
a {
  color: #409eff;
  cursor: pointer;
}
</style>