<template>
  <div class="yh-tab-group">
    <el-badge
      :value="item.badge"
      v-for="(item, index) in tabs"
      class="yh-tab-button"
      :class="{ 'yh-badge-check': item.check, 'yh-badge-char': item.charBadge }"
      :key="index"
    >
      <button
        :class="{
          'yh-selected': selectedIndex === index,
          'yh-primary': selectedIndex === index,
          'yh-closable': closable,
        }"
        class="yh-button"
        @click="onTabClicked(index, $event)"
      >
        {{ item.title }}
        <span
          v-if="closable"
          class="yh-tab-close"
          @click="onCloseClicked(index, $event)"
          >X</span
        >
      </button>
    </el-badge>
  </div>
</template>
<script>
function _create_tab(tab, bf) {
  var t = { data: tab };
  if (typeof tab == "string") {
    t.title = tab;
  } else {
    t.title = tab.title;
    var badge = tab[bf || "badge"];
    if (badge == "check") {
      t.badge = "✓";
      t.check = true;
      t.charBadge = true;
    } else if (badge == "cross") {
      t.badge = "✕";
      t.charBadge = true;
    } else {
      t.badge = badge;
    }
  }
  return t;
}

export default {
  name: "TabGroup",
  data() {
    return {
      selectedIndex: -1,
      tabs: [],
    };
  },
  props: ["options", "default", "selectable", "closable", "badgeField"],
  /*watch : {
		 options : function() {
			 this.onOptionUpdated();
		 }
	 },*/
  methods: {
    addTab(tab, select) {
      this.tabs.push(_create_tab(tab, this.badgeField));
      if (select) {
        this.selectedIndex = this.tabs.length - 1;
      }
    },
    onTabClicked(index, e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.selectable !== false) {
        this.selectedIndex = index;
        this.$emit("select", index, this.tabs[index].data);
      }
    },
    onCloseClicked(index, e) {
      e.preventDefault();
      e.stopPropagation();
      this.$emit("close", index, this.tabs[index].data);
    },
    select(index) {
      this.selectedIndex = index;
    },
    selectWith(key, value) {
      var i = this.tabIndex(key, value);
      if (i >= 0) {
        this.select(i, to);
      }
    },
    tabAt(index) {
      if (index >= 0 && index < this.tabs.length) {
        return this.tabs[index].data;
      }
    },
    tabWith(key, value) {
      var i = this.tabIndex(key, value);
      if (i >= 0) {
        return this.tabs[i].data;
      }
    },
    tabIndex(key, value) {
      var tabs = this.tabs;
      for (var i = 0; i < tabs.length; ++i) {
        var d = tabs[i].data;
        if (d && d[key] == value) {
          return i;
        }
      }
      return -1;
    },
    moveTabAt(i, to) {
      var tabs = this.tabs;
      if (
        i >= 0 &&
        i < tabs.length &&
        to >= 0 &&
        to <= tabs.length &&
        to != i &&
        to != i + 1
      ) {
        var e = tabs[i];
        if (to < i) {
          for (var j = i; j > to; --j) {
            tabs[j] = tabs[j - 1];
          }
        } else {
          if (to == tabs.length) {
            to = tabs.length - 1;
          }
          for (var j = i; j < to; ++j) {
            tabs[j] = tabs[j + 1];
          }
        }
        this.$set(tabs, to, e);
      }
    },
    moveTabWith(key, value, to) {
      var i = this.tabIndex(key, value);
      if (i >= 0) {
        this.moveTabAt(i, to);
      }
    },
    removeWith(key, value) {
      var i = this.tabIndex(key, value);
      if (i >= 0) {
        this.remove(key, value);
      }
    },
    remove(index, select) {
      var tabs = this.tabs;
      var item;
      var n = tabs.length;
      if (index >= 0 && index < n) {
        item = tabs.splice(index, 1);
        --n;
        if (n == 0) {
          this.selectedIndex = -1;
        } else if (select >= 0 && select < n) {
          this.selectedIndex = select;
        }
      }
      return item;
    },
    clear() {
      this.tabs = [];
      this.selectedIndex = -1;
    },
    updateTab(opt) {
      debugger;
      var i = this.options.indexOf(opt);
      if (i >= 0) {
        tabs[i] = _create_tab(opt, this.badgeField);
      }
    },
    onOptionUpdated() {
      var tabs = [];
      var opts = this.options;
      var bf = this.badgeField;
      if (opts) {
        opts.forEach(function (opt) {
          tabs.push(_create_tab(opt, bf));
        });
      }
      this.tabs = tabs;
    },
  },
  created() {
    this.$watch(
      "options",
      function () {
        this.onOptionUpdated();
      },
      { deep: true }
    );
    this.onOptionUpdated();
    if (this.default >= 0) {
      this.selectedIndex = this.default;
    }
  },
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>