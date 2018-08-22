<template>
  <div class="content">
    <Swiper v-if="swiperData" :headerData="swiperData"></Swiper>
    <News v-if="newsList" :newsList="newsList"></News>
    <div class="loading" v-if="showLoading"><img src="../../assets/loading.gif"></div>
  </div>
</template>
<script>
import homeData from "../../mock/home.js";
import Swiper from "./swiper/swiper.vue";
import News from "./theme-news/news.vue";
export default {
  components: { Swiper, News },
  computed: {
    swiperData() {
      return this.$store.getters.headerData;
    },
    newsList() {
      return this.$store.getters.newsList;
    },
    showLoading() {
      return this.$store.getters.showLoading;
    }
  },
  data() {
    return {
      id: parseInt(this.$route.params.id)
    };
  },
  mounted() {
    this.$store.dispatch("getHomeData");
  }
};
</script>

<style scoped>
.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  transform: translate(-50px, -50px);
  border-radius: 4px;
}
img {
  width: 100px;
  height: 100px;
}
</style>
