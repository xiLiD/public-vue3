<template>
  <div
    class="crosswise-scroll"
    @DOMMouseScroll.prevent="mouseTranslate"
    @mousewheel.prevent="mouseTranslate"
  >
    <div
      class="crosswise-content"
      ref="crosswiseContent"
      :style="'transform: translateX(' + translateX + 'px);'"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      translateX: 0, //滚动的距离
      maxTranslateX: 0, //最大滚动距离
    };
  },
  methods: {
    // 鼠标滚轮滑动事件
    mouseTranslate(event) {
      if (!this.maxTranslateX) this.countMaxTranslateX();
      const delta = event.deltaY || event.detail;
      let x = this.translateX;
      if (delta > 0) {
        x =
          Math.abs(x - 100) >= this.maxTranslateX
            ? -this.maxTranslateX
            : x - 100;
      } else {
        x = x + 100 >= 0 ? 0 : x + 100;
      }
      this.translateX = x;
    },
    //计算最大滚动距离
    countMaxTranslateX() {
      if (!this.crosswiseContent) {
        this.crosswiseContent = this.$refs.crosswiseContent;
      }
      this.maxTranslateX =
        this.crosswiseContent.scrollWidth - this.crosswiseContent.offsetWidth;
      if (Math.abs(this.translateX) >= this.maxTranslateX) {
        this.translateX = -this.maxTranslateX;
      }
    },
  },
  created() {
    //计算最大滚动距离
    // this.$nextTick(() => {
    //   this.countMaxTranslateX();
    // });
  },
  mounted() {
    window.addEventListener("resize", this.countMaxTranslateX, false);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.countMaxTranslateX, false);
  },
};
</script>
<style lang="less" scoped>
.crosswise-scroll {
  overflow-x: hidden;
  .crosswise-content {
    transition: transform 0.1s;
  }
}
</style>