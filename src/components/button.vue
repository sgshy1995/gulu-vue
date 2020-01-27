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
  name: "GButton",
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

<style lang="scss" scoped>
$font-size:14px;
$border:1px solid;
$button-height:32px;
$button-background:white;
$button-background-active:#eee;
$border-radius:4px;
$color:#333;
$border-color:#999;
$border-color-hover:#666;
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
  font-size: $font-size;
  height: $button-height;
  line-height: $font-size;
  background: $button-background;
  border-color: $border-color;
  color: $color;
  border-radius: $border-radius;
  border: $border;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: $border-color-hover;
    cursor: pointer;
  }

  &:active {
    background: $button-background-active;
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