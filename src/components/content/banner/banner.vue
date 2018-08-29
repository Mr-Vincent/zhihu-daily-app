<template>
  <div class="theme">
    <img :src="data.image" :alt="data.description">
    <div class="desc">{{data.description}}</div>
  </div>
</template>

<script>
import News from "../theme-news/news.vue";

export default {
  components: { News },
  methods: {
    getStatus(urlStr) {
      var urlStrArr = urlStr.split("/");
      return urlStrArr[urlStrArr.length - 1];
    }
  },
  data() {
    return {
      id:-1,
      data: {
        image: "http://pic3.zhimg.com/da1fcaf6a02d1223d130d5b106e828b9.jpg",
        description: "为你发现最有趣的新鲜事，建议在 WiFi 下查看"
      }
    };
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      this.id = this.getStatus(this.$route.path);
      console.log(this.id)
      if (this.id) {
        this.$store.dispatch("getThemeData", this.id);
      }
      // this.data = this.$store.getters.themeData["'" + this.id + "'"];
    }
  }
};
</script>

<style scoped>
.theme {
  position: relative;
}
.desc {
  color: #e9e9e9;
  position: absolute;
  top: 55%;
  text-align: left;
  font-size: 22px;
  padding: 16px;
}
</style>

