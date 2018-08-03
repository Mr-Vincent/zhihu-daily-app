<template>
  <div id="app">
    <Header :index="2"></Header>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Header from "./components/header/header.vue";
import Sidebar from "./components/sidebar/sidebar.vue";
export default {
  components: {
    Header,Sidebar
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
