<template>
  <div>
    <div class="waterfall px-container clearfix" v-cloak>
      <ul
        class="px-waterfall left"
        v-for="(el, i) in newWaterfallData"
        :key="i"
      >
        <li v-for="(item, index) in el" :key="index">
          <div style="position: relative">
            <div class="essay-top">
              <div class="essay-publisher">
                <div class="pub-logo"></div>
                <div class="pub-info"></div>
              </div>
              <div class="essay-title"></div>
            </div>
            <!-- <router-link to="/goodsdetail/1">
              <img v-lazy="item.e_img" class="bg-img" alt="" v-loading="true" />
              
            </router-link> -->
            <img shape="square" :size="100" fit="contain" :src="item.e_img" />
            <!-- <div class="px-hot-tag" v-if="item.u_img">
              <img :src="item.u_img" alt="" />
            </div> -->

            <div class="essay-info">
              <div class="essay-title"></div>
              <div class="essay-describe"></div>
            </div>
            <div class="essay-other">
              <div class="suppots line-after">
                <i class="iconfont icon-zan"></i>
                <span>2424</span>
              </div>
              <div class="commemts line-after">
                <i class="iconfont icon-pinglun"></i>
                <span>12</span>
              </div>
              <div class="person line-after">
                <i class="iconfont icon-wo"></i>
                <span>12</span>
              </div>
              <div class="country">
                <span>USA</span>
              </div>
            </div>
            <!-- <h3 class="font22 color-fff fh" v-if="item.e_intro">
              {{ item.e_intro }}
            </h3> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newWaterfallData: "",
      waterfallDataNumber: "",
    };
  },
  created() {
    let [...waterfallData] = this.waterfallData;
    let [...newWaterfallData] = [[], []];
    waterfallData.forEach((el, i) => {
      switch (i % 2) {
        case 0:
          newWaterfallData[0].push(el);
          break;
        case 1:
          newWaterfallData[1].push(el);
          break;
        // case 2:
        //   newWaterfallData[2].push(el);
        //   break;
      }
    });
    this.newWaterfallData = newWaterfallData;
  },
  props: ["waterfallData"],
};
</script>
<style lang="less">
.px-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.clearfix {
  zoom: 1;
}
.left {
  float: left;
}
.font22 {
  font-size: 22px;
}
.color-fff {
  color: #fff;
}
.fh {
  overflow: hidden;
}
[v-cloak] {
  display: none !important;
}
.waterfall {
  margin-top: 20px;
}
.px-waterfall {
  width: calc(250px);
  overflow: hidden;
  border-radius: 8px;
  &:nth-child(3n + 2) {
    margin: 0 30px;
  }
  img.bg-img {
    border-radius: 8px;
  }
  h3 {
    text-overflow: ellipsis;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 30px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
  li {
    background: #fff;
    border-radius: 8px;
    margin-bottom: 20px;
  }
}

.px-hot-tag {
  position: absolute;
  top: 0;
  border-radius: 8px;
  width: 71px;
  height: 30px;
  img {
    border-radius: 8px 0 8px 0;
  }
}
.photo {
  position: relative;
  height: 25px;
  .keywordbox {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 25px;
  }
}
.keyword {
  height: 25px;
  line-height: 25px;
  padding: 0 22px;
  text-align: center;
  .color-666-line {
    border-bottom: 2px solid #666666;
  }
  .red-line {
    border-bottom: 2px solid #f65050;
  }
}
.essay-other {
  display: flex;
  color: #424242;
  font-size: 12px;
  justify-content: space-between;
  padding: 0 20px;
  border-top: 1px solid #cdcdcd;
  margin-top: 10px;
  //   margin: 10px 0;
  > div {
    display: flex;
    align-items: center;
    padding: 10px 0;
    position: relative;
  }
  .line-after::after {
    content: "";
    width: 1px;
    height: 100%;
    background: #cdcdcd;
    // position: absolute;
    // right: -10px;
    margin-left: 10px;
  }
}
.essay-top {
}
ul li {
  box-shadow: 0 0 5px 0px #cdcdcd;
  border-radius: 5px;
  overflow: hidden;
  span {
    margin-left: 5px;
  }
}
</style>