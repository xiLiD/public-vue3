<template>
  <div>
    <!-- <navbar ref="navbar"
            @refreshPage="refreshPage" /> -->
    <app-main ref="appMain" />
  </div>
</template>
<script>
import { Navbar, AppMain } from "./components";
export default {
  name: "Layout",
  components: {
    Navbar,
    AppMain,
  },
  methods: {
    refreshPage() {
      this.$refs.appMain.refresh();
    },
  },
};
</script>
