<template>
  <div>
    <g-button @click.native="showToastTop">展示顶部</g-button>
    <g-button @click.native="showToastMiddle">展示中间</g-button>
    <g-button @click.native="showToastBottom">展示底部</g-button>
  </div>
</template>

<script>
import Vue from "vue";
import Button from "../../../src/components/button";
import Toast from "../../../src/components/toast";
import plugin from "../../../src/plugin";
Vue.use(plugin);
export default {
  methods: {
    showToastTop() {
      this.$toast("长时间提示", {
        position:"top",
        autoClose: 5
      });
    },
    showToastMiddle() {
      this.$toast("<strong>加粗提示</strong>", {
        position:"center",
        enableHtml: true,
      });
    },
    showToastBottom() {
      this.$toast("默认提示", {
        position:"bottom"
      });
    }
  },
  components: {
    "g-button": Button,
    "g-toast": Toast
  }
};
</script>

<style lang="scss" scoped>
</style>