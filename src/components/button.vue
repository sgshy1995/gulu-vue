<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <g-icon class="icon" :name="icon"></g-icon>
        <div class="icon-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        name: 'buttonOne',
        props: {
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    return !(value !== 'left' && value !== 'right')
                }
            }
        }
    }
</script>

<style lang="scss">
    .g-button {
        padding:0 1em;
        font-size: var(--font-size);
        height: var(--button-height);
        line-height: var(--font-size);
        background: var(--button-background);
        border-color: var(--border-color);
        color: var(--color);
        border-radius: var(--border-radius);
        border: var(--border);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
            cursor: pointer;
        }

        &:active {
            background: var(--button-active-background);
        }

        &:focus {
            outline: none;
        }

        > .icon {
            order: 1;
            margin-left: 0;
            margin-right: .4em;
        }

        > .icon-content {
            order: 2
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .4em;
                margin-right: 0;
            }

            > .icon-content {
                order: 1
            }
        }
    }
</style>