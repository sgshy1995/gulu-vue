<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
    <div class="hrline"></div>
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
  $grey:#D0D0D0;
  .actions-wrapper{
    margin-left: auto;
    margin-right: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    > button{
      padding: 0.2em 1em;
      border-radius: 4px;
      cursor: pointer;
      border: 1px solid $blue;
      color: $blue;
      &:focus{
        outline: none;
      }
    }
  }
  .line{
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 0.3s;
    border-radius: 1px;
  }
  .hrline{
    position: absolute;
    bottom: -1px;
    border-bottom: 1px solid $grey;
    width: 100%;
  }
}
</style>