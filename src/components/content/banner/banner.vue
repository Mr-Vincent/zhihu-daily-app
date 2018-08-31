<template>
  <div class="theme">
    <img :src="headImgData.image" :alt="headImgData.description">
    <div class="desc">{{headImgData.description}}</div>
    <div class="loading" v-if="showLoading"><img src="../../../assets/loading.gif"></div>
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
  mounted() {
    this.$store.dispatch("getThemeData", this.id).then(res => {
      this.loading = false;
      this.data = res;
    });
    this.idCache.push(this.id);
  },
  data() {
    return {
      loading: true,
      idCache: [],
      id: this.$route.params.id,
      data: {
        image: "http://pic3.zhimg.com/da1fcaf6a02d1223d130d5b106e828b9.jpg",
        description: "biu....biu....biu"
      }
    };
  },
  computed: {
    headImgData() {
      var key = this.id;
      return this.data;
    },
    showLoading() {
      return this.loading;
    }
  },
  watch: {
    $route(to, from) {
      this.loading = true;
      // 对路由变化作出响应...
      let currentId = this.getStatus(this.$route.path);
      this.id = this.getStatus(this.$route.path);
      if (this.idCache.indexOf(currentId) !== -1) {
        // 存在这个id 直接赋值
        var key = this.id;
        this.data = this.$store.getters.themeData[key];
        this.loading = false;
      } else {
        this.$store.dispatch("getThemeData", this.id).then(res => {
          this.loading = false;
          this.data = res;
        });
        this.idCache.push(this.id);
      }
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
.loading img {
  width: 100px;
  height: 100px;
}
</style>

