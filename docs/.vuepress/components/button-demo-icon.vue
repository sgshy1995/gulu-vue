<template>
  <div>
    <g-button icon="download">下载按钮</g-button>
    <g-button icon="download" iconPosition="right">下载按钮</g-button>
  </div>
</template>

<script>
import Button from "../../../src/components/button";
export default {
  components: {
    "g-button": Button
  }
};
</script>

<style lang="scss" scoped>
</style>