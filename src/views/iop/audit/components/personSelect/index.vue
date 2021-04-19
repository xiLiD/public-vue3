<template>
  <div class="person-wrapper">
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
      >全选</el-checkbox
    >
    <div></div>
    <el-form
      class="depart-container"
      v-for="(item, index) in persons"
      :key="index"
    >
      <div class="depart">{{ item.depart }}</div>
      <el-checkbox-group
        class="depart-group"
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
        <el-checkbox v-for="city in item.persons" :label="city" :key="city">{{
          city
        }}</el-checkbox>
      </el-checkbox-group>
    </el-form>
  </div>
</template>
<script>
const cityOptions = ["张三", "李四", "广州", "深圳"];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      persons: [
        {
          depart: "工程交付部",
          persons: ["张三", "李四", "王五", "赵六", "钱七"],
        },
        {
          depart: "大数据运维部",
          persons: ["刘三元", "李四成", "王五村", "赵六远", "钱七文"],
        },
        {
          depart: "业务集成部",
          persons: ["张一三", "李二四", "王仨五", "赵奇六", "钱七七"],
        },
      ],
      isIndeterminate: true,
      personAll: [],
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    getAll() {
      let personAll = [];
      this.persons.forEach((item) => {
        personAll = [...new Set(personAll.concat(item.persons))];
      });
      this.personAll = personAll;
    },
    handleCheckAllChange(val) {
      console.log(val);
      this.checkedCities = val ? this.personAll : [];
      console.log(this.checkedCities);
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.personAll.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.personAll.length;
    },
  },
};
</script>
<style scoped lang="less">
.person-wrapper {
  padding: 15px 0px;
  margin-top: 20px;
  box-sizing: border-box;
  // box-shadow: 0 0 5px #999;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  // border-radius: 5px;
  .depart-container {
    padding: 15px 0 0;
    .depart-group {
      margin: 10px 0;
    }
  }
}
</style>