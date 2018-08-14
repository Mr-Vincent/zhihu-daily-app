<template>
  <div class="content">
    <Swiper></Swiper>
  </div>
</template>
<script>
import homeData from "../../mock/home.js";
import Swiper from "./swiper/swiper.vue";
export default {
  components: { Swiper },
  mounted() {
    //this.$store.dispatch("getHomeData");
  }
};
</script>

<style scoped>
</style>
