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
    background: #3AB982;
    min-height: 30px;
    display: flex;
    align-items: center;
}
</style>