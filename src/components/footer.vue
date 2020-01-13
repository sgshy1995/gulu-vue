<template>
    <div class="footer">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GFooter'
}
</script>

<style lang="scss" scoped>
.footer{
    background: #ccc;
    height: 100px;
}
</style>