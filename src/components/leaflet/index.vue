<template>
  <div>
    <div id="map"></div>
    <div class="my-class"
         style="top: 20px;">
      <div @click="showOrHide('HeatMap',true)">显示热力图</div> | <div @click="showOrHide('HeatMap',false)">删除热力图</div>
    </div>
    <div class="my-class"
         style="top: 50px;">
      <div @click="showOrHide('ColorBlock',true)">显示色块图</div> | <div @click="showOrHide('ColorBlock',false)">删除色块图</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currCity: 0,
      currLayer: ''
    }
  },
  mounted () {
    // 初始化地图
    var clz = new BaseMap({ boxId: 'map', url: 'http://10.154.89.210/4003/arcgis/rest/services/HN_BaseMap/MapServer' });
    map = clz.loadBaseMap();
    window.onload = function () {
      map.on('zoomend', function (e) {
        if (this.currCity === 0) return;
        var zoom = e.target._zoom; // 当前缩放级别
        if (zoom === 0) {
          this.currLayer.hide();
          this.loadColorBlock('0', 'ColorBlock', true);
        }
      });
    }
  },
  methods: {
    loadHeatMap (key, hasShow) {
      var layer = new HeatMap({ baseMap: map, data: heatData, key: key });
      layer.draw();
      if (hasShow) layer.show(); else layer.hide();
    },
    loadColorBlock (ind, key, hasShow) {
      var layer = this.currLayer = new ColorBlock({
        key: key, baseMap: map, showName: true, data: cityDataList[ind],
        level: [[1, 100, 'rgba(177,67,59,0.5)'], [100, 200, 'rgba(57,73,142,0.5)'], [200, 300, 'rgba(59,160,136,0.5)'], [300, 300, 'rgba(173,136,68,0.5)']],
        callback: function (item, e) {
          console.log([e.latlng.lat, e.latlng.lng]);
          console.log(item);
          map.setView(item.center, item.ind ? 2 : map._zoom);
          if (item.ind) {
            layer.hide();
            this.currCity = item.ind;
            loadColorBlock(this.currCity, key, true);
          }
        }
      });
      layer.draw();
      if (hasShow) layer.show(); else layer.hide();
    },
    showOrHide (func, hasShow) {
        switch (func) {
          case 'HeatMap':
            this.loadHeatMap(func, hasShow);
            break;
          case 'ColorBlock':
            this.loadColorBlock('0', func, hasShow);
            break;
        }
      }
  }
}
</script>
 
<style scoped>
@import "./css/leaflet.css";
body {
  margin: 0;
  overflow: hidden;
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

#map {
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

a {
  cursor: pointer;
}

a:hover {
  color: #bababa;
}

.my-class {
  position: absolute;
  right: 20px;
  z-index: 400;
}
</style>