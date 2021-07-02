<template>
  <div>
    <button class="btn-back" @click="back">返回</button>
    <split-pane :value.sync="offset"></split-pane>
  </div>
</template>

<script>
import SplitPane from "@/components/Splitpane";
export default {
  components: {
    SplitPane
  },
  data() {
    return {
      // 初始大小
      offset: 0.5
    };
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
};
</script>

<style>
</style>
