<template>
  <div class="container">
    <div style="display: flex">
      <div class="item-wrap" v-for="(item, index) in steps" :key="index">
        <div class="item"></div>
        <div
          class="dot"
          :style="{
            'border-size': lineLength + 'px',
            'border-color': getBorder,
          }"
        ></div>
        <div class="item"></div>
        <div class="tp">2020-12-12 <br />10:52:23</div>
        <div class="bt">{{ item.desc }}</div>
      </div>
      <!-- <div class="item-wrap">
        <div class="item"></div>
        <div class="dot"></div>
        <div class="item"></div>
        <div class="tp">2020-12-12 <br />10:52:23</div>
        <div class="bt">手术申请</div>
      </div>
      <div class="item-wrap">
        <div class="item"></div>
        <div class="dot"></div>
        <div class="item"></div>

        <div class="tp">2020-12-12 12:30:30</div>
        <div class="bt">手术申请</div>
      </div>
      <div class="item-wrap">
        <div class="item"></div>
        <div class="dot"></div>
        <div class="item"></div>
        <div class="tp">2020-12-12 12:30:30</div>
        <div class="bt">手术放弃</div>
      </div>
      <div class="item-wrap">
        <div class="item"></div>
        <div class="dot"></div>
        <div class="item"></div>
        <div class="tp">2020-12-12</div>
        <div class="bt">手术安排</div>
      </div>
      <div class="item-wrap">
        <div class="item"></div>
        <div class="dot"></div>
        <div class="item"></div>
        <div class="tp">2020-12-12 12:30:30</div>
        <div class="bt">手术开始</div>
      </div>
      <div class="item-wrap">
        <div class="item"></div>
        <div class="dot"></div>
        <div class="item"></div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "timeLine",
  data() {
    return {
      left_button_active: true,
      left_button_disabled: false,
      right_button_disabled: true,
      steps: [
        {
          text: "步骤一",
          desc: "描述信息",
          inactiveIcon: "location-o",
          activeIcon: "success",
        },
        {
          text: "步骤二",
          desc: "描述信息",
          inactiveIcon: "like-o",
          activeIcon: "plus",
        },
        {
          text: "步骤三",
          desc: "描述信息",
          inactiveIcon: "star-o",
          activeIcon: "cross",
        },
        {
          text: "步骤四",
          desc: "描述信息",
          inactiveIcon: "phone-o",
          activeIcon: "fail",
        },
      ],
      activeIndex: 1,
      lineLength: 5,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped >
.container {
  width: 100%;
  max-width: 445px;
  height: 50px;
  //   height: 200px;
  padding: 70px 0;
  //   overflow: auto;

  .item-wrap {
    font-size: 13px;
    position: relative;
    flex: 1;
    display: flex;
    .tp {
      position: absolute;
      width: 100%;
      bottom: 20px;
      text-align: center;
    }

    .bt {
      position: absolute;
      width: 100%;
      top: 20px;
      text-align: center;
    }
  }

  .dot {
    border: 2px solid #07c160;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background: #07c160; //white;
    margin: auto;
    margin-bottom: -4px;
    position: relative;
  }
  .dotsx {
    background: #07c160;
  }

  .item {
    //flex:1;
    width: 50px;
    border-bottom: 1px solid #d84c29;
  }
  .active {
  }
  .inactive-color {
    color: #969799;
  }
}
</style>