<template>
  <div>
    <g-collapse :selected.sync="selectedTabs">
      <g-collapse-item title="标题一" name="one">内容一</g-collapse-item>
      <g-collapse-item title="标题二" name="two">内容二</g-collapse-item>
      <g-collapse-item title="标题三" name="three">内容三</g-collapse-item>
    </g-collapse>
    <br>
    <div>这里可以通过展示数组更新的信息：<span style="color: #3AB982;">{{selectedTabs}}</span></div>
  </div>
</template>

<script>
import Collapse from "../../../src/components/collapse";
import CollapseItem from "../../../src/components/collapse-item";
export default {
  data(){
    return{
      selectedTabs:['one','two']
    }
  },
  components: {
    "g-collapse": Collapse,
    "g-collapse-item": CollapseItem
  }
};
</script>

<style lang="scss" scoped>
</style>