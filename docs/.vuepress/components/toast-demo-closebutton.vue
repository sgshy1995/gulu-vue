<template>
  <div>
    <g-button @click.native="showToast">展示中间</g-button>
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
    showToast() {
      this.$toast("你喜欢我吗？", {
        position:"center",
        autoClose: 4,
        closeButton:{
          text:"当然喜欢",
          callback(){
            console.log("后台也觉得喜欢")
          }
        }
      });
    },
  },
  components: {
    "g-button": Button,
    "g-toast": Toast
  }
};
</script>

<style lang="scss" scoped>
</style>