<template>
  <div>
    <g-input value="错误提示" error="姓名不可以为空"></g-input>
    <br>
    <br>
    <g-input value="友情提示" info="你可以输入中文"></g-input>
  </div>
</template>

<script>
import Input from "../../../src/components/input";
export default {
  components: {
    "g-input": Input
  }
};
</script>

<style lang="scss" scoped>
</style>