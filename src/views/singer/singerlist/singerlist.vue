<template>
    <div class="singerlist mt-4 ml-3" style="min-width: 1020px">

        <div v-if="singerData.err">
            加载数据失败
        </div>
        <div v-else>
            <div v-for="(item,index) in singerData.list" :key="index" class="mb-4 d-flex ai-center">
                <img :src="item.singer_pic" class="circle" onerror="this.src='http://y.gtimg.cn/music/photo_new/T001R150x150M00000067r4p0wBDDN.webp'"/>
                <span class="ml-4 text-gray2">{{item.singer_name}}</span>
            </div>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="singerData.total">
            </el-pagination>
        </div>

    </div>
</template>

<script>

    export default {
        props: {
            //参数
           singerData:{
               type:Object,
               required:true
           }
        },
        methods: {

        }
    };
</script>
<style>
    .el-pagination {
        display: flex;
        justify-content: center;
    }
</style>
