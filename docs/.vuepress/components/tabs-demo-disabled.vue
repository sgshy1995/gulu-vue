<template>
  <div>
    <g-tabs selected="Vue" style="border:1px solid #2c3e50;border-radius:4px">
      <g-tabs-head>
        <template #actions>
          <button>设置</button>
        </template>
        <g-tabs-item name="jQuery" disabled>jQuery</g-tabs-item>
        <g-tabs-item name="Vue">Vue</g-tabs-item>
        <g-tabs-item name="React">React</g-tabs-item>
        <g-tabs-item name="Angular">Angular</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-panel name="jQuery">Still use jQuery now?</g-tabs-panel>
        <g-tabs-panel name="Vue">The Progressive JavaScript Framework.</g-tabs-panel>
        <g-tabs-panel name="React">A JavaScript library for building user interfaces.</g-tabs-panel>
        <g-tabs-panel name="Angular">A platform for building mobile and desktop web applications. </g-tabs-panel>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import Tabs from "../../../src/components/tabs";
import TabsHead from "../../../src/components/tabs-head";
import TabsBody from "../../../src/components/tabs-body";
import TabsItem from "../../../src/components/tabs-item";
import TabsPanel from "../../../src/components/tabs-panel";
export default {
  components: {
    "g-tabs": Tabs,
    "g-tabs-head": TabsHead,
    "g-tabs-body": TabsBody,
    "g-tabs-item": TabsItem,
    "g-tabs-panel": TabsPanel
  }
};
</script>

<style lang="scss" scoped>
</style>