<template>
    <div >

        <div class="category">
            <ul class="d-flex " v-for="(item,index) of category" :key="index">
                <li v-on:click="clickUI(t,item)" :class="{'active':isActive(t,i,item),}" class="p-y-1 ml-3"
                    v-for="(t,i) of item.list" :key="t.index">
                    <span> {{t.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            category: {
                type: Object,
                required: true,
            }
        },
        methods: {
            isActive(i, index, item) {
                if (item.curIndex === i.index) {
                    return true;
                } else {
                    return false;
                }
                // console.log("选中");
                // if(item["ar"])
                // if (item.id === this.curIndexObj.) {
                //     return true;
                // }
                // return false;
            },
            clickUI(i, item) {
                item.curIndex = i.index;
                this.$emit("category",i);
            }
        },
        data() {
            return {
                curIndexObj: {
                    "area": 0,
                    "genre": 0,
                    "index": 0,
                    "sex": 0,
                }
            }
        },
        watch: {
            category() {
                console.log(this.category);
                for (let key in this.category) {
                    let value = this.category[key];
                    this.category[key] = {
                        curIndex: 0,
                        list: value.map((t, i) => {
                            return {value: t.id, name: t.name,index:i,key:key}
                        })
                    }
                }
            }
        }
    };
</script>
<style>
    .category > ul {
        /*弹性模型 内容占不下的时候 换行*/
        flex-wrap: wrap;
        margin-top: 20px;
        flex-direction: row;
        justify-content: flex-start;
    }

    .category > ul > li:hover {
        cursor: pointer;
    }

    .active {
        background-color: #4ab6e8;
        border-radius: 10%;
        text-align: center;

    }

    .active > span {
        padding: 5px 8px;
    }
</style>
