<template>
  <div>
    <g-layout>
      <g-header>Header</g-header>
      <g-layout>
        <g-sider show>Sider</g-sider>
        <g-content>Content</g-content>
      </g-layout>
      <g-footer>Footer</g-footer>
    </g-layout>
  </div>
</template>

<script>
import Layout from "../../../src/components/layout";
import Header from "../../../src/components/header";
import Content from "../../../src/components/content";
import Sider from "../../../src/components/sider";
import Footer from "../../../src/components/footer";
export default {
  components: {
    "g-layout": Layout,
    "g-header": Header,
    "g-sider": Sider,
    "g-content": Content,
    "g-footer": Footer
  }
};
</script>

<style lang="scss" scoped>
</style>