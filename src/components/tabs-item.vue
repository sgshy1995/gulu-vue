<template>
  <div class="tabs-item" @click="xxx" :class="tabsClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GTabsItem",
  data() {
    return {
      active: false
    };
  },
  inject: ["eventBus"],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
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
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs-item {
  height: 40px;
  padding: 0.2em 2em;
  cursor: pointer;
  &.active {
    background: gray;
  }
}
</style>