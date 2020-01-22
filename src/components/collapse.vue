<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GCollapse"
};
</script>

<style lang="scss" scoped>
$grey:#bbb;
$border-radius:4px;
.collapse{
    border: 1px solid $grey;
    border-radius: $border-radius;
}
</style>        