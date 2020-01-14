<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:'GToast'
}
</script>

<style lang="scss" scoped>
.toast{
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.75);
    color: white;
    padding: 0 .4em;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.8;
    height: 30px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
}
</style>