<template>
<div class="">
    <scroll :list="newSongs" :top="$config.top" >
        <div>
            <el-carousel class="mt-3" indicator-position="outside">
                <el-carousel-item class="el-carousel-item" v-for="(item,index) in banners" :key="index">
                    <img :src="item.picUrl" class="image" v-on:click="clickEl(item.h5Url)"/>
                </el-carousel-item>
            </el-carousel>
            <div>
                <ul>
                    <li v-for="(item) in newSongs" :key="item.id" v-on:click="elCardClick(item)">
                        <el-card v-bind:key="item.id">
                            <img :src="item.picurl"/>
                            <div class="pl-3">
                                <span class="text-sm">{{item.mvtitle}}</span>
                                <span class="text-xs text-weight-1">{{item.mvdesc}}</span>
                            </div>
                        </el-card>


                    </li>
                </ul>
            </div>
        </div>
    </scroll>
</div>

</template>
<script>
    import scroll from "../components/Scroll/Scroll.vue"
    import * as Log from "../Log";

    export default {
        data() {
            return {
                banners: [],
                perOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    // ...
                },
                newSongs: [],
            }
        },
        mounted() {
            // console.log('Current Swiper instance object', this.mySwiper)
            // this.mySwiper.slideTo(3, 1000, false)
        },
        methods: {
            async fetHotSong() {
                const res = await this.$http.get("/recommend/banner?type=1");
                if (res.status === 200) {
                    this.banners = res.data.data
                }
            },
            /**
             * 获取最新的歌单
             * @returns {Promise<void>}
             */
            async getNewSongs() {
                const res = await this.$http.get("/new/mv");
                console.log(res);
                this.newSongs = res.data.data.list;
            },
            clickEl(path) {
                Log.info(path)
            },
            elCardClick(item) {
                Log.info(item)
                // alert("弹出")
            }

        },
        created() {
            this.fetHotSong();
            this.getNewSongs();
        },
        components: {
            scroll
        },


    }
</script>
<style>
    .image {
        width: 100%;
        height: 100%;
        border-radius: 2%;
    }

    .el-carousel-item {
        height: 100px;
    }

    .el-card {
        margin: 10px 5px;
    }

    .el-card:hover {
        cursor: pointer;
    }

    .el-card img {
        width: 100px;
        height: 100px;
    }

    .el-card > div {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .el-card span {
        margin: 10px 0;
        display: block;
    }

    /*.el-text{*/
    /*width: 200px;*/
    /*}*/

    /*li image {*/

    /*}*/

    /*li {*/
    /*padding: 10px;*/

    /*}*/

    /*li div {*/
    /*flex: 1;*/
    /*padding-left: 20px;*/
    /*}*/

    /*li span {*/
    /*display: block;*/
    /*}*/

</style>
