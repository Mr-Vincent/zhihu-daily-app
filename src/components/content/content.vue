<template>
  <div class="content">
    <Swiper :headerData="swiperData"></Swiper>
    <News :newsList="newsList"></News>
  </div>
</template>
<script>
import homeData from "../../mock/home.js";
import Swiper from "./swiper/swiper.vue";
import News from "./theme-news/news.vue";
export default {
  components: { Swiper ,News},
  data(){
    return {
      swiperData:homeData.top_stories,
      newsList:homeData.stories
    }
  },
  mounted() {
    //this.$store.dispatch("getHomeData");
  }
};
</script>

<style scoped>
</style>
