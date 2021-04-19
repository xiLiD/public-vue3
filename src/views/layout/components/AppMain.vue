<template>
  <div class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive :include="cachedViews"> -->
      <router-view ref="currentView" />
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>
<script>
export default {
  name: "AppMain",
  methods: {
    refresh() {
      this.$refs.currentView.refresh();
    },
  },
};
</script>
<style scoped>
/* .app-main {
  height: calc(100vh);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
} */
</style>
