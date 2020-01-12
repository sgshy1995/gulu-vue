<template>
  <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]" 
  :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
  <div style="border:1px solid black;height:100%">
    <slot />
  </div>
  </div>
</template>

<script>
export default {
  name: "GCol",
  data(){
      return{
          gutter: 0
      }
  },
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 50px;
  width: 50%;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>