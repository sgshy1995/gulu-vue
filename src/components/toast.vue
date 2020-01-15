<template>
  <div class="toast" ref="toast" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  name: "GToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: () => {}
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "center"].indexOf(value) >= 0;
      }
    }
  },
  mounted() {
    this.setStyles();
    this.executeAutoClose();
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      };
    }
  },
  methods: {
    setStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    executeAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 0 0.8em;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.8;
  min-height: 30px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  text-align: center;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes slide-down {
    0% {
      transform: translate(-50%,-100%);
    }
    100%{
      transform: translate(-50%,0%);
    }
  }
  @keyframes slide-up {
    0%{
      transform: translate(-50%,100%)
    }
    100%{
      transform: translate(-50%,0%)
    }
  }
  &.position-top {
    top: 0;
    transform: translateX(-50%);
    animation: slide-down 0.5s;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
    animation: slide-up 0.5s;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  &.position-center {
    top: 50%;
    transform: translate(-50%, -50%);
    animation: fade-in 0.5s;
  }
  .message {
    padding: 0.3em 0;
  }
  .line {
    border-left: 1px solid #666;
    height: 100%;
    margin-left: 0.8em;
  }
  .close {
    padding-left: 0.8em;
    cursor: pointer;
    flex-shrink: 0;
  }
}
</style>