<template>
<div class="tabs-panel">
    <slot></slot>
</div>
</template>

<script>
export default {
    name:'GTabsPanel',
    inject:['eventBus'],
    created(){
        this.eventBus.$on('update:selected',(data)=>{
            console.log(data)
        })
    }
}
</script>

<style lang="scss" scoped>

</style>