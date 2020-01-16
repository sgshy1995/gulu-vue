<template>
  <div class="tabs-panel" :class="tabsClasses" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GTabsPanel",
  data() {
    return {
      active: false
    };
  },
  inject: ["eventBus"],
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    tabsClasses() {
      return {
        active: this.active
      };
    }
  },
  created() {
    this.eventBus.$on("update:selected", selected => {
      this.active = this.name === selected;
    });
  }
};
</script>

<style lang="scss" scoped>
.tabs-panel {
  height: 40px;
  &.active {
    background: darkcyan;
  }
}
</style>