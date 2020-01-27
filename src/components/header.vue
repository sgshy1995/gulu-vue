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
    min-height: 30px;
    background: #3AB982;
    display: flex;
    align-items: center;
}
</style>