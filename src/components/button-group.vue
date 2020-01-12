<template>
    <div class="g-button-group">
        <slot/>
    </div>
</template>

<script>
    export default {
        name:'GButtonGroup',
        mounted() {
            for(let node of this.$el.children){
                let name = node.nodeName.toLowerCase()
                if (name !== 'button') {
                    console.warn(`g-button-group 的子元素期望都是 button，你这里使用 ${name} 是不理想的，可能会导致样式的问题。`)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-button-group{
        vertical-align: middle;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        > .g-button{
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
        }
    }
</style>