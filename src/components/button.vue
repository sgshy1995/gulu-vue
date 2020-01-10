<template>
  <button
    class="g-button"
    :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('update:loading',!loading)"
  >
    <g-icon v-if="!loading" class="icon" :name="icon" />
    <g-icon v-if="loading" class="spin icon" name="loading" />

    <div class="icon-content">
      <slot />
    </div>
  </button>
</template>

<script>
import Icon from './icon'
export default {
  name: "buttonOne",
  components:{
      'g-icon':Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value !== "left" && value !== "right");
      }
    }
  }
};
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.g-button {
  padding: 0 1em;
  font-size: var(--font-size);
  height: var(--button-height);
  line-height: var(--font-size);
  background: var(--button-background);
  border-color: var(--border-color);
  color: var(--color);
  border-radius: var(--border-radius);
  border: var(--border);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: var(--border-color-hover);
    cursor: pointer;
  }

  &:active {
    background: var(--button-active-background);
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-left: 0;
    margin-right: 0.4em;
  }

  > .icon-content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.4em;
      margin-right: 0;
    }

    > .icon-content {
      order: 1;
    }
  }

  > .spin {
    animation: spin 3s infinite linear;
  }
}
</style>