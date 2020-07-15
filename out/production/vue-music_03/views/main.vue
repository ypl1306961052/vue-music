<template>
  <div class="main">
    <MainHead title="Funcation Msic" @nav-click="toPath" ></MainHead>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHead from "@/components/MainHead";
export default {
  components: {
    MainHead
  },
  methods:{
    toPath(path){
      console.log(path)
      this.$router.push(path)

    }
  }
};
</script>

<style>
.main{
  /* max-width: 400px;
  min-width: 200px; */
}
</style>
