<template>
  <div class="news">
    <div class="theme">
      <span v-show="true">今日热文</span>
    </div>
    <div class="news-container">
      <div class="news-item" v-for="(item,index) in newsList" :key="index">
        <p class="title" :class="{noImg:!item.images}">{{item.title}}</p>
        <img :src="item.images[0]" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    newsList:{
      type:Array,
      required:true
    }
  },
  methods:{
    
  },
  data() {
    return {
    };
  }
};
</script>
<style scoped>
img {
  height: 80px;
  width: 80px;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0px;
}
.news {
  background-color: rgb(243, 243, 243);
}
.theme {
  width: 95%;
  margin: 10px auto;
  height: 45px;
  text-align: left;
  display: table;
}
.theme span {
  color: rgb(123, 123, 123);
  display: table-cell;
  vertical-align: middle;
  font-weight: 320;
}
.news-item {
  width: 95%;
  height: 100px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  margin: 10px auto;
  position: relative;
}
.title {
  padding: 10px 90px 10px 10px;
  font-size: 20px;
  font-weight: 300;
}
.noImg{
  padding-right: 5px;
}
</style>
