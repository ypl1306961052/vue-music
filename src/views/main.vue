<template>
  <main class="main ">
    <MainHead title="Funcation Msic" @nav-click="toPath" ></MainHead>
    <div class="d-flex jc-center full-h" >
      <router-view></router-view>
    </div>
  </main>
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
</style>
