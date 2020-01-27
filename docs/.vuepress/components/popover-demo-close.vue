<template>
  <div>
    <g-popover position="top">
      <template #content="{close}">
        <div>上方内容</div>
        <br>
        <g-button @click.native="close">关闭</g-button>
      </template>
      <g-button>上面</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template #content="{close}">
        <div>下方内容</div>
        <br>
        <g-button @click.native="close">关闭</g-button>
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