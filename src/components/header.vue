<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GHeader'
}
</script>

<style lang="scss" scoped>
.header{
    height: 100px;
    background: #999;
}
</style>