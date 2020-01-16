<template>
  <div class="tabs-panel" :class="tabsClasses" v-if="active" :data-name="name">
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
    if (this.eventBus) {
      this.eventBus.$on("update:selected", selected => {
        this.active = this.name === selected;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs-panel {
  height: 40px;
  &.active {
    padding: 1em;
  }
}
</style>