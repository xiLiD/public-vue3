<template>
  <div class="dialog-left">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date1"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="form.date2"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-upload
        class="upload-demo"
        action="#"
        ref="upload"
        :limit="1"
        :http-request="httpRequest"
      >
        <el-button type="warning" icon="el-icon-upload" size="small"
          >选择文件</el-button
        >
      </el-upload>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

    <!-- <el-button
      type="primary"
      size="small"
      @click.native="importTable"
      :disabled="!checkPass"
      >确定</el-button
    > -->
  </div>
</template>
<script>
import apiSend from "@/api/axios";
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      file: "",
    };
  },
  methods: {
    httpRequest(data) {
      console.log(data);
      let params = {
        excelFile: data.file,
      };
      this.file = data.file;
      // var blob = new Blob([data.file]);
      // console.log(blob);
      // console.log(params);
      var formData = new FormData();
      let form = this.form;
      form.file = data.file;
      // for (var i in form) {
      //   formData.append(i, form[i]);
      // }
      // formData.append("file", data.file);
      console.log(form);
      apiSend.getNode({ data: form }).then((res) => {});
    },
    onSubmit() {
      console.log("submit!");
    },
    // let file = data.file;
    //   this.fileData = {
    //     excelFile: data.file,
    //   };
    //   this.checkPass = false;
    //   apiSend
    //     .prodCheckProdInfo({
    //       data: this.fileData,
    //     })
    //     .then((res) => {
    //       this.$refs.upload.clearFiles();
    //       let arr = [];
    //       // let result = res.data.data
    //       let { code, ...result } = res.data.data;
    //       if (code == "0") {
    //         this.checkPass = true;
    //         arr.push(result.msg);
    //       } else {
    //         Object.keys(result).forEach((key) => {
    //           arr.push(result[key]);
    //         });
    //       }
    //       this.notice = arr;
    //     })
    //     .catch((err) => {
    //       this.$message.error(err.data.msg);
    //     });
  },
};
</script>
<style lang="less"></style>