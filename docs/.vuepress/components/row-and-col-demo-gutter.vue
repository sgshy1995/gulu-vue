<template>
  <div>
    <g-row gutter="10">
      <g-col span="8">
        <div class="col-one">1</div>
      </g-col>
      <g-col span="8">
        <div class="col-two">2</div>
      </g-col>
      <g-col span="8">
        <div class="col-one">3</div>
      </g-col>
    </g-row>
    <br>
    <g-row gutter="10">
      <g-col span="6">
        <div class="col-one">1</div>
      </g-col>
      <g-col span="6">
        <div class="col-two">2</div>
      </g-col>
      <g-col span="6">
        <div class="col-one">3</div>
      </g-col>
      <g-col span="6">
        <div class="col-two">4</div>
      </g-col>
    </g-row>
  </div>
</template>

<script>
import Row from "../../../src/components/row";
import Col from "../../../src/components/col";
export default {
  components: {
    "g-row": Row,
    "g-col": Col
  }
};
</script>

<style lang="scss" scoped>
.col-one,.col-two{
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col-one{
  background: #3AB982;
}
.col-two{
  background: #34495F;
}
</style>