<template>
  <div class="theme">
    <img :src="headImgData.image" :alt="headImgData.description">
    <div class="desc">{{headImgData.description}}</div>
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
    },
    promise(resolve, reject) {
      var timeOut = 1;
      setTimeout(function() {
        if (timeOut == 1) {
          resolve("200 OK");
        } else {
          reject("timeout in " + timeOut + " seconds.");
        }
      }, timeOut * 1000);
    }
  },
  mounted() {
    console.log(this.id);
    this.$store.dispatch("getThemeData", this.id);
  },
  data() {
    return {
      id: this.$route.params.id,
      data: {
        image: "http://pic3.zhimg.com/da1fcaf6a02d1223d130d5b106e828b9.jpg",
        description: "为你发现最有趣的新鲜事，建议在 WiFi 下查看"
      }
    };
  },
  computed: {
    headImgData() {
      var key = this.id;
      console.log(key);
      return this.data;
    }
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      this.id = this.getStatus(this.$route.path);
      console.log("检测到url发生变化了：" + this.id);
      if (this.id) {
        this.$store.dispatch("getThemeData", this.id);
      }
      var key = this.id;
      new Promise((resolve, reject) => {
        if (this.$store.getters.themeData[key] == undefined) {
          reject("数据未就位");
        } else {
          resolve("数据到位了");
        }
      })
        .then(result => {
          this.data = this.$store.getters.themeData[key];
          console.log(result + ":" + this.data);
        })
        .catch(reason => {
          console.log("失败：" + reason);
        });
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

