<template>
    <div>
        <category :category="category" @category="categoryClick"></category>
        <singer-list :arg="categoryArg" :singer-data="singerData"></singer-list>
    </div>
</template>

<script>
    import category from "./singger-category/singgercategory"
    import singerList from "./singerlist/singerlist"
    import Log from "../../Log.js";

    export default {
        components: {
            category,
            singerList
        },
        data() {
            return {
                category: {},
                categoryArg: [],
                singerData:{}
            }
        },
        methods: {
            async getCategory() {
                const res = await this.$http.get("/singer/category");
                if (res.status === 200 && res.data.result === 100) {
                    this.category = res.data.data;

                } else {
                    Log.error("获取数据失败")
                }
            },
            addAgr(item) {
                let index=-1;
                this.categoryArg.forEach((t,i) => {
                    if (t.key === item.key) {
                        index=i;
                    }
                });
                if(index<0){
                    //包含
                    this.categoryArg.push(item)
                }else {
                    //包含
                    this.categoryArg[index]=item;
                }
            },
            categoryClick(item) {
                this.addAgr(item);
                this.getSingerByCategory(this.categoryArg)
            },
            async getSingerByCategory(arg) {
                console.log(arg);
                let argStr = arg.map(t => {
                    return `${t.key}=${t.value}`
                }).join("&");
                console.log(argStr);
                this.$http.get("/singer/list?" + argStr).then(res=>{
                    console.log(res);
                    if(res.data.result===100){
                        this.singerData=res.data.data;
                    }else {
                        this.singerData={
                            err:"获取数据错误"
                        }
                    }

                }).catch(t=>{
                    Log.error(t);
                    this.singerData={
                        err:"获取数据错误"
                    }
                });
            }
        },
        created() {
            this.getCategory();
        }

    }
</script>

<style>

</style>
