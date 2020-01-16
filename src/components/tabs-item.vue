<template>
  <div class="tabs-item" @click="onClick" :class="tabsClasses">
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
        active: this.active,
        disabled: this.disabled
      };
    }
  },
  created() {
    this.eventBus.$on("update:selected", selected => {
      this.active = this.name === selected;
    });
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs-item {
  $blue: #0078cf;
  $grey: #d0d0d0;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0.2em 1.5em;
  cursor: pointer;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $grey;
    cursor: not-allowed;
  }
}
</style>