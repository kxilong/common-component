<template>
  <div id="app">
    <!-- <router-view/> -->
    <split-pane :value.sync="offset"></split-pane>
  </div>
</template>

<script>
import SplitPane from "@/components/Splitpane";
export default {
  name: "App",
  components: {
    SplitPane
  },
  data() {
    return {
      // 初始大小
      offset: 0.5
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
