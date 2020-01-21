<template>
  <div class="popover" ref="popover">
    <div
      class="content-wrapper"
      ref="contentWrapper"
      v-if="visible"
      :class="[`position-${position}`]"
    >
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
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      }
    }
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", this.onClick);
    } else {
      this.$refs.popover.addEventListener("mouseenter", this.onOpen);
      this.$refs.popover.addEventListener("mouseleave", this.onClose);
    }
  },
  destroyed() {
    if (this.trigger === "click") {
      this.$refs.popover.removeEventListener("click", this.onClick);
    } else {
      this.$refs.popover.removeEventListener("mouseenter", this.onOpen);
      this.$refs.popover.removeEventListener("mouseleave", this.onClose);
    }
  },
  methods: {
    positionContent() {
      const { contentWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      const {
        width,
        height,
        top,
        left
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      const heightContent = contentWrapper.getBoundingClientRect().height;
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + window.scrollY + height,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - heightContent) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - heightContent) / 2,
          left: left + window.scrollX + width
        }
      };
      contentWrapper.style.top = positions[this.position].top + "px";
      contentWrapper.style.left = positions[this.position].left + "px";
    },
    onClickDocument(e) {
      if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target ||
          this.$refs.contentWrapper.contains(e.target))
      ) {
        return;
      }
      this.onClose();
    },
    onOpen() {
      this.visible = true;
      setTimeout(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    onClose() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        if (this.visible === true) {
          this.onClose();
        } else {
          this.onOpen();
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
  border: 1px solid #333;
  border-radius: 4px;
  background: white;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));
  padding: 0.5em 1em;
  word-break: break-word;
  max-width: 20em;
  &::after,
  &::before {
    content: "";
    border: 10px solid transparent;
    display: block;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before {
      border-top-color: #333;
      border-bottom: none;
      top: 100%;
      left: 1em;
    }
    &::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
      left: 1em;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-bottom-color: #333;
      border-top: none;
      bottom: 100%;
      left: 1em;
    }
    &::after {
      border-bottom-color: white;
      border-top: none;
      bottom: calc(100% - 1px);
      left: 1em;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before {
      border-left-color: #333;
      border-right: none;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    &::after {
      border-left-color: white;
      border-right: none;
      left: calc(100% - 1px);
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before {
      border-right-color: #333;
      border-left: none;
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    &::after {
      border-right-color: white;
      border-left: none;
      right: calc(100% - 1px);
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>