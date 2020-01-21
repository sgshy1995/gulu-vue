<template>
  <div class="popover" @click="onClick" ref="popover">
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
      top: 100%;
      left: 1em;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
      left: 1em;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-bottom-color: #333;
      bottom: 100%;
      left: 1em;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
      left: 1em;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before {
      border-left-color: #333;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before {
      border-right-color: #333;
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>