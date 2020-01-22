<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">{{title}}</div>
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
  },
  inject:['eventBus'],
  methods:{
      toggle(){
          if(this.open){
              this.open = false
          }else{
              this.open = true
              this.eventBus && this.eventBus.$emit('update:selected',this)
          }
      },
      close(){
          this.open = false
      }
  },
  mounted(){
      this.eventBus && this.eventBus.$on('update:selected',(vm)=>{
          if(vm!==this){
              this.close()
          }
      })
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