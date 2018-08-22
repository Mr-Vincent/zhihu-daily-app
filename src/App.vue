<template>
  <div id="app">
    <Header :index="2"></Header>
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/header/header.vue";
import Sidebar from "./components/sidebar/sidebar.vue";
import Content from "./components/content/content.vue";
export default {
  components: {
    Header,Sidebar,Content
  },
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
@import "./assets/font-icon/style.css";

#app{
  font-family: Avenir,Helvetica,Arial,sans-serif;
}
</style>
