<template>
  <div class="turnContent box-start">
    <div class="leftMenu">
      <div
        class="menuItem box-v-center Mt-16 bt1px"
        :class="{ activeMenu: activeIndex === 1 }"
        @click="goMenu(1)"
      >
        携转资格查询日通报
      </div>
      <div
        class="menuItem box-v-center"
        :class="{ activeMenu: activeIndex === 2 }"
        @click="goMenu(2)"
      >
        携转资格查询月通报
      </div>
      <div
        class="menuItem box-v-center"
        :class="{ activeMenu: activeIndex === 3 }"
        @click="goMenu(3)"
      >
        携入情况日通报
      </div>
      <div
        class="menuItem box-v-center"
        :class="{ activeMenu: activeIndex === 4 }"
        @click="goMenu(4)"
      >
        携入情况月通报
      </div>
      <div
        class="menuItem box-v-center"
        :class="{ activeMenu: activeIndex === 5 }"
        @click="goMenu(5)"
      >
        携转高危修复日通报
      </div>
      <div
        class="menuItem box-v-center"
        :class="{ activeMenu: activeIndex === 6 }"
        @click="goMenu(6)"
      >
        携转高危修复月通报
      </div>
    </div>
    <div class="rightContent">
      <div class="W100 H100">
        <table1 v-show="activeIndex === 1" />
        <table2 v-show="activeIndex === 2" />
        <table3 v-show="activeIndex === 3" />
        <table4 v-show="activeIndex === 4" />
        <table5 v-show="activeIndex === 5" />
        <table6 v-show="activeIndex === 6" />
      </div>
    </div>
  </div>
</template>

<script>
import table1 from "@/components/table1";
import table2 from "@/components/table2";
import table3 from "@/components/table3";
import table4 from "@/components/table4";
import table5 from "@/components/table5";
import table6 from "@/components/table6";
export default {
  name: "TurnNotification",
  components: { table1, table2, table3, table4, table5, table6 },
  data() {
    return {
      activeIndex: 1,
    };
  },
  methods: {
    goMenu(index) {
      this.activeIndex = index;
    },
  },
  mounted() {
    // this.$httpLoading.show();
    // let self = this;
    // setTimeout(() => {
    //   self.$httpLoading.close();
    // }, 1000);
  },
};
</script>

<style scoped>
.turnContent {
  height: 100%;
  width: 100%;
}
.leftMenu {
  width: 200px;
  min-width: 200px;
  height: 96%;
  position: relative;
  border-radius: 0px 10px 10px 0px;
  background-color: white;
  /* animation: bouncelnLeft2 .8s forwards;
  -webkit-animation: bouncelnLeft2 .8s forwards; */
}
@keyframes bouncelnLeft2 {
  0% {
    /* opacity: 0; */
    -webkit-transform: translate3d(-100%, 0, 0);
    -ms-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    /* opacity: 1; */
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}
.menuItem {
  height: 40px;
  color: #333333;
  font-size: 15px;
  border-bottom: 1px solid #eaeaea;
  cursor: pointer;
}
.menuItem:hover {
  background-color: #f5f5fc;
}
.activeMenu {
  background-color: #f5f5fc;
  color: black;
  font-weight: 600;
}
.rightContent {
  background-color: white;
  height: 96%;
  margin-left: 20px;
  width: calc(100vw - 220px) !important;
  /* width: 1000px; */
  border-radius: 10px 0px 0px 10px;
  /* animation: bouncelnRight2 .8s forwards;
  -webkit-animation: bouncelnRight2 .8s forwards; */
}
@keyframes bouncelnRight2 {
  0% {
    /* opacity: 0; */
    -webkit-transform: translate3d(0, -100%, 0);
    -ms-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    /* opacity: 1; */
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}
</style>
