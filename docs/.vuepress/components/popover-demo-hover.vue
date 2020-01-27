<template>
  <div>
    <g-popover position="top" trigger="hover">
      <template #content>
        <div>上方内容</div>
      </template>
      <g-button>上面</g-button>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <template #content>
        <div>下方内容</div>
      </template>
      <g-button>下面</g-button>
    </g-popover>
  </div>
</template>

<script>
import Popover from "../../../src/components/popover";
import Button from "../../../src/components/button";
export default {
  components: {
    "g-popover": Popover,
    "g-button": Button
  }
};
</script>

<style lang="scss" scoped>
</style>