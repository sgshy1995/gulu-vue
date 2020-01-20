<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper" class="trigger-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GPopover",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    xxx() {
      this.visible = !this.visible;
      if (this.visible === true) {
        this.$nextTick(() => {
          let content = this.$refs.contentWrapper;
          document.body.appendChild(content);
          let {
            width,
            height,
            top,
            left
          } = this.$refs.triggerWrapper.getBoundingClientRect();
          content.style.top = `${top}px`
          content.style.left = `${left}px`
          let eventHandler = () => {
            this.visible = false;
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  margin: 0 20px;
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  transform: translateY(-100%);
}
</style>