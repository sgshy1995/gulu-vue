<template>
  <svg v-if="name" class="g-icon">
    <use :xlink:href="`#i${name}`" />
  </svg>
</template>

<script>
import "../svg";
export default {
  name: "GIcon",
  props: ["name"]
};
</script>

<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
}
</style>