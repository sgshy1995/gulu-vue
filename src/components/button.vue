<template>
    <button class="g-button">按钮</button>
</template>

<script>
    export default {
        name:'buttonOne'
    }
</script>

<style lang="scss">
    .g-button {
        padding: 0 1em;
        font-size: var(--font-size);
        height: var(--button-height);
        background: var(--button-background);
        border-color: var(--border-color);
        color: var(--color);
        border-radius: var(--border-radius);
        &:hover{
            border-color: var(--border-color-hover);
            cursor: pointer;
        }
        &:active{
            background: var(--button-active-background);
        }
        &:focus{
            outline: none;
        }
    }
</style>