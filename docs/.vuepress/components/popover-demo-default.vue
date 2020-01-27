<template>
  <div>
    <g-popover position="top">
      <template #content>
        <div>上方内容</div>
      </template>
      <g-button>上面</g-button>
    </g-popover>
    <g-popover position="left">
      <template #content>
        <div>左侧内容</div>
      </template>
      <g-button>左面</g-button>
    </g-popover>
    <g-popover position="right">
      <template #content>
        <div>右侧内容</div>
      </template>
      <g-button>右面</g-button>
    </g-popover>
    <g-popover position="bottom">
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