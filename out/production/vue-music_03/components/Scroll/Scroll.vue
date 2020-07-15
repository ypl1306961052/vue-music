<template>
    <div ref="wrapper" class="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        props: {
            top:{
              type:Number,
              default: 200,
            },
            list: {
                type: Array,
                required: true
            }, refreshDelay: {
                type: Number,
                default: 20
            }
        },
        methods: {
            initScroll() {
                if (!this.$refs.wrapper) {
                    return
                }
                this.$refs.wrapper.style.top=this.top+'px';
                this.scroll = new BScroll(this.$refs.wrapper, {});
            }
        },
        mounted() {
            this.initScroll();
        },
        watch: {
            // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
            list() {
                // console.log(this.list);
                // console.log("数据发生改变")
                // setTimeout(() => {
                //     this.scroll.refresh()
                // },this.refreshDelay)
                this.$nextTick(()=>{
                    this.scroll.refresh();
                })
            }
        }

    };
</script>
<style>
    .wrapper {
        position: absolute;
        margin: 0;
        padding: 0;
        overflow: hidden;
        top: 0;
        left: 0;
        bottom: 0;

    }
</style>
