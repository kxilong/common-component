<template>
  <div id="app">
    <!-- <router-view/> -->
    <split-pane :value="offset"></split-pane>
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
      offset: 0.5
    };
  },
  mounted() {
    const fromData = [
      {
        key: 1,
        num: 0,
        status: 1
      },
      {
        key: 1,
        num: 0,
        status: 2
      },
      {
        key: 1,
        num: 0,
        status: 3
      }
    ];
    const toData = [
      {
        num: 40,
        status: 1
      },
      {
        num: 10,
        status: 2
      }
    ];
    console.log(this.formatData(fromData, toData));
  },
  methods: {
    handleInput(value) {
      console.log(value);
    },
    formatData(fromData, toData) {
      let newData = fromData;
      newData = fromData.map(from => {
        const value = toData.find(item => item.status == from.status);
        console.log(value,from)
        if(value){
          from.num = value.num;
        }
      });
      return newData;
    }
  }
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
