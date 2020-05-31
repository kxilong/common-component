<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{width:`${leftOffsetPercent}`}"></div>

    <div
      class="trigger-icon"
      :style="{width:`${triggerWidth}px`,left:`${triggerLeft}`}"
      @mousedown="handleMOuseDown"
    ></div>

    <div class="pane pane-right" :style="{left:`${leftOffsetPercent}`}"></div>
  </div>
</template>
<script>
export default {
  name: "SplitPane",
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    maxLength: {
      type: Number,
      default: 0.8
    },
    minLength: {
      type: Number,
      default: 0.2
    }
  },
  data() {
    return {
      mouseDown: false,
      initOffest: 0
    };
  },
  computed: {
    leftOffsetPercent() {
      return `${this.value * 100}%`;
    },
    // 滑块各占一半
    triggerLeft() {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`;
    }
  },
  methods: {
    handleMOuseDown(event) {
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("mouseup", this.handleMouseUp);
      this.mouseDown = true;
      // 获取鼠标距离滑块最左侧距离
      this.initOffest =
        event.pageX - event.srcElement.getBoundingClientRect().left;
    },
    handleMouseMove(event) {
      if (!this.mouseDown) return;
      const outer = this.$refs.outer.getBoundingClientRect();
      let offsetPercent =
        (event.pageX - outer.left - this.initOffest + this.triggerWidth / 2) /
        outer.width;
      if (offsetPercent > this.maxLength) offsetPercent = this.maxLength;
      if (offsetPercent < this.minLength) offsetPercent = this.minLength;
      // this.$emit('update:value',offsetPercent)
    },
    handleMouseUp() {
      this.mouseDown = false;
      document.removeEventListener(
        "mousemove",
        function() {
          console.log("--mousemove监听被移除");
        },
        false
      );
      document.removeEventListener(
        "mouseup",
        function() {
          console.log("--mouseup监听被移除");
        },
        false
      );
    }
  }
};
</script>
<style scoped>
.split-pane-wrapper {
  position: relative;
  width: 400px;
  height: 200px;
  background-color: palegoldenrod;
}
.pane {
  height: 100%;
  position: absolute;
  top: 0;
}
.pane-left {
  background-color: peru;
}
.pane-right {
  right: 0;
  background-color: blue;
}
.trigger-icon {
  position: absolute;
  height: 100%;
  background-color: red;
  position: absolute;
  top: 0;
  z-index: 100;
  cursor: col-resize;
}
</style>>
