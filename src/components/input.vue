<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" 
    @change="$emit('change',$event)" 
    @input="$emit('input',$event)" 
    @focus="$emit('focus',$event)" 
    @blur="$emit('blur',$event)" />
    <template v-if="error">
      <g-icon name="error" class="error-icon"></g-icon>
      <span class="error-message">{{error}}</span>
    </template>
    <template v-if="info">
      <g-icon name="info" class="info-icon"></g-icon>
      <span class="info-message">{{info}}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "GInput",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    },
    info:{
      type: String
    }
  },
  components: {
    "g-icon": Icon
  }
};
</script>

<style lang="scss" scoped>
/* 
--border: 1px solid;
--button-height: 32px;
--font-size: 14px;
--button-background: white;
--button-active-background: #eee;
--border-radius: 4px;
--color: #333;
--border-color: #999;
--border-color-hover: #666; 
*/
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-color-focus: rgba(102, 102, 102, 1);
$border-color-disabled: #bbb;
$border-color-error: rgb(212, 67, 59);
$border-color-error-hover: #f1453d;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$box-shadow-color-error: rgb(238, 68, 59);
$border-radius: 4px;
$color: #333;
$color-disabled: #bbb;
$font-size: 12px;
$background: #ffffff;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  > *:not(:last-child){
      margin-right: .5em;
  }
  > input {
    height: $height;
    padding: 0 8px;
    font-size: inherit;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    background: $background;
    color: $color;
    &:hover {
      border: 1px solid $border-color-hover;
    }
    &:focus {
      outline: none;
      border: 1px solid $border-color-focus;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &:disabled {
      border: 1px solid $border-color-disabled;
      color: $color-disabled;
      cursor: not-allowed;
    }
    &:read-only {
      cursor: default;
    }
  }
  &.error {
    > input {
      border: 1px solid $border-color-error;
      &:hover {
        border: 1px solid $border-color-error-hover;
      }
      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color-error;
      }
    }
  }
  .error-icon{
      fill: $border-color-error;
      width: 1em;
      height: 1em;
  }
  .error-message{
      color: $border-color-error;
  }
}
</style>