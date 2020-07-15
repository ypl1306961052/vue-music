<template>
    <div class="singerlist">

        <div v-if="singerData.err">
            加载数据失败
        </div>
        <div v-else>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="singerData">
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
