<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GLayout',
    data(){
        return{
            layoutClass:{
                hasSider: false
            }
        }
    },
    mounted(){
        this.$children.forEach((vm)=>{
            if(vm.$options.name==='GSider'){
                this.layoutClass.hasSider = true
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.layout{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 150px;
    overflow: hidden;
    color: white;
    &.hasSider{
        flex-direction: row;
    }
}
</style>