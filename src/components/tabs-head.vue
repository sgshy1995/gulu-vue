<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GTabsHead"
};
</script>

<style lang="scss" scoped>
.tabs-head {
  border: 1px solid red;
  display: flex;
  .actions-wrapper{
    margin-left: auto;
    margin-right: 1em;
  }
}
</style>