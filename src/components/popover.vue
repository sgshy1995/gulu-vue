<template>
  <div class="popover" @click="onClick" ref="popover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
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
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {
        width,
        height,
        top,
        left
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`;
      this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`;
    },
    listenToDocument() {
      let eventHandler = e => {
        if (
          this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target ||
            this.$refs.contentWrapper.contains(e.target))
        ) {
          return;
        }
        this.visible = false;
        document.removeEventListener("click", eventHandler);
      };
      document.addEventListener("click", eventHandler);
    },
    onClick(e) {
      this.visible = !this.visible;
      if (this.$refs.triggerWrapper.contains(e.target)) {
        if (this.visible === true) {
          setTimeout(() => {
            this.positionContent();
            this.listenToDocument();
          });
        }
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