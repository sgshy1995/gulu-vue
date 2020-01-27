<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: "GRow",
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: [String],
      validator(value) {
        return ["left", "right", "center"].indexOf(value) >= 0;
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  },
  computed: {
    rowStyle() {
      const { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px"
      };
    },
    rowClass() {
      const { align } = this;
      return [align && `align-${align}`];
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: nowrap;
  &.align-right {
    justify-content: flex-end;
  }
  &.align-left {
    justify-content: flex-start;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>