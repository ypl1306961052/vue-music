<template>
  <div >
    <div>
      <div class="title text-primary text-lg text-weight-7 text-center pt-2">{{title}}</div>
      <div class="full-w">
        <ul class="d-flex jc-around mt-4 text-sm text-gray2 " >
          <li class=""
              v-for="(k,index) in list"
              :key="index"
              :class="{'nav-active':isActive(k.path),'cur-pointer':true}"
              @click="navClick(k.path)"
          >{{k.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Funcation Music"
    }
  },
  methods:{
    navClick(path){
      this.$emit('nav-click',path);
    },
    isActive(path){
      // if(path==="/recommend"||this.$route.path==="/"){
      //   return true;
      // }
      if(path===this.$route.path){
        return true
      }
      if(path==="/recommend"&&this.$route.path==="/"){
        return true
      }
      return false
    }
  },
  data() {
    return {
      list: [
        { name: "推荐", path: "/recommend" },
        { name: "歌手", path: "/singer" },
        { name: "排行", path: "/rank" },
        { name: "搜索", path: "/search" }
      ]
    };
  }
};
</script>

<style>

</style>
