<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="hide" :class="{trans}" v-if="show">隐 藏</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GSider",
  data() {
    return {
      visible: true,
      trans: false
    };
  },
  props:{
    show:{
      type: Boolean,
      default:false
    }
  },
  methods:{
      hide(){
          this.visible = !this.visible
          this.trans = !this.trans
      }
  }
};
</script>

<style lang="scss" scoped>
.sider {
  width: 150px;
  background: rgb(68, 97, 128);
  position: relative;
  > button {
    position: absolute;
    top: 2%;
    right: 2%;
    padding: 0.5em 1em;
    border: 1px solid black;
    border-radius: 4px;
    background: white;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &.trans{
        position: fixed;
        top: 50%;
        left: 0%;
    }
  }
}
.slide-enter-active, .slide-leave-active{
    transition: all 0.5s;
}
.slide-enter, .slide-leave-to{
    margin-left: -150px;
}
</style>