<template>
  <div>
    <g-tabs selected="CSS" style="border:1px solid #2c3e50;border-radius:4px">
      <g-tabs-head>
        <template #actions>
          <button>设置</button>
        </template>
        <g-tabs-item name="JavaScript">JavaScript</g-tabs-item>
        <g-tabs-item name="Html">Html</g-tabs-item>
        <g-tabs-item name="CSS">CSS</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-panel name="JavaScript">JavaScript is a cool language.</g-tabs-panel>
        <g-tabs-panel name="Html">Html is be used for create a website.</g-tabs-panel>
        <g-tabs-panel name="CSS">CSS can control the style.</g-tabs-panel>
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