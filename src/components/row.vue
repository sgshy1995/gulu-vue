<template>
    <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
        <slot />
    </div>
</template>

<script>
export default {
    name:'GRow',
    props:{
        gutter:{
            type:[Number,String]
        }
    },
    mounted(){
        console.log(this.$children)
        this.$children.forEach((vm)=>{
            console.log(vm)
            vm.gutter = this.gutter
        })
    }
}
</script>

<style lang="scss" scoped>
.row{
    display: flex;
    overflow: hidden;
}
</style>