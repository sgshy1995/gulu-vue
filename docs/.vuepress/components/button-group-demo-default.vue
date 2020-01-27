<template>
  <div>
    <g-button-group>
    <g-button icon="left">上一页</g-button>
    <g-button>首页</g-button>
    <g-button icon="right" iconPosition="right">下一页</g-button>
    </g-button-group>
  </div>
</template>

<script>
import Button from "../../../src/components/button";
import ButtonGroup from '../../../src/components/button-group'
export default {
  components: {
    "g-button": Button,
    'g-button-group':ButtonGroup
  }
};
</script>

<style lang="scss" scoped>
</style>