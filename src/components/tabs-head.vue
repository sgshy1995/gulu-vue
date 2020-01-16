<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GTabsHead",
  inject:['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected',(selected,vm)=>{
      let {height,width,top,left}=vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left=`${left}px`
    })
  }
};
</script>

<style lang="scss" scoped>
.tabs-head {
  display: flex;
  justify-content: flex-start;
  position: relative;
  $blue:#0078CF;
  .actions-wrapper{
    height: 100%;
    margin-left: auto;
    margin-right: 1em;
  }
  .line{
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 0.3s;
    border-radius: 1px;
  }
}
</style>