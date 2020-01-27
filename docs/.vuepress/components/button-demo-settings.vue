<template>
  <div>
    <g-button :loading.sync="loading1">默认加载</g-button>
    <g-button :loading.sync="loading2">点击加载</g-button>
    <g-button :loading.sync="loading3" icon="praise">点击加载</g-button>
  </div>
</template>

<script>
import Button from "../../../src/components/button";
export default {
  data(){
    return{
      loading1: true,
      loading2: false,
      loading3: false
    }
  },
  components: {
    "g-button": Button
  }
};
</script>

<style lang="scss" scoped>
</style>