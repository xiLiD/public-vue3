<template>
  <el-dialog
    :title="'选择' + dialogInfo.title + ':(注: 选择结果以选择项为主)'"
    :visible.sync="dialogVisible"
    width="60%"
    class="active-dialog"
  >
    <el-transfer
      filterable
      :filter-method="filterMethod"
      filter-placeholder="请输入城市拼音"
      :titles="['可选项', '已选项']"
      v-model="value"
      :data="data"
      class="active-content"
      @change="getTransfer"
    >
    </el-transfer>

    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false" size="small"
        >取 消</el-button
      >
      <el-button type="primary" @click="submitDialog" size="small"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogInfo: {
      type: Object,
    },
  },
  data() {
    const generateData = (_) => {
      const data = [];
      const cities = ["上海", "北京", "广州", "深圳", "南京", "西安", "成都"];
      const pinyin = [
        "shanghai",
        "beijing",
        "guangzhou",
        "shenzhen",
        "nanjing",
        "xian",
        "chengdu",
      ];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index],
        });
      });
      return data;
    };
    return {
      dialogVisible: false,
      data: generateData(),
      value: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
    };
  },
  methods: {
    setShow(params) {
      this.dialogVisible = params;
    },
    submitDialog() {
      let data = this.data.filter((item) => {
        // console.log("value", this.value);
        return this.value.includes(item.key);
      });
      console.log("data", data);
      this.$emit("selectClick", {
        title: this.dialogInfo.title,
        data: data,
      });
    },
    getTransfer(e) {
      console.log(e);
      console.log(this.data);
      console.log(this.value);
    },
  },
};
</script>
<style lang="less" scoped>
.active-dialog {
}
</style>