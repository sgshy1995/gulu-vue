<template>
  <div class="tabs-item" @click="onClick" :class="tabsClasses" :data-name="name">
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
      if(this.eventBus){
          this.eventBus.$on("update:selected", selected => {
            this.active = this.name === selected;
          });
      }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
      this.$emit('click',this)
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
  padding: 0.2em 1em;
  @media (max-width:576px) {
    padding: 0.2em 0.5em;
  }
  cursor: pointer;
  &.active {
    color: $blue;
  }
  &.disabled {
    color: $grey;
    cursor: not-allowed;
  }
}
</style>