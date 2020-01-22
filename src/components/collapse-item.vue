<template>
  <div class="collapse-item">
    <div class="title" @click="open=!open">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GCollapseItem",
  data() {
    return {
      open: false
    };
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
$grey: #bbb;
$border-radius: 4px;
.collapse-item {
  &:first-child {
    .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  .title {
    padding: 0.5em;
    cursor: pointer;
    border: 1px solid $grey;
    margin: -1px;
    min-height: 3em;
    display: flex;
    align-items: center;
  }
  .content {
    padding: 0.5em;
    min-height: 4em;
    display: flex;
    align-items: center;
  }
}
</style>    