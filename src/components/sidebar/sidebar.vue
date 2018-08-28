<template>
  <div class="sidebar">
    <transition name="fade" @touchmove.stop.prevent>
      <div class="menu-mask" v-show="isReallShow" @click="hideMenu"></div>
    </transition>

    <transition name="side">
      <div class="menu-content" v-show="isReallShow">
        <div class="head">
          <div class="login-content">
            <img  src="../../assets/image/timg.jpeg" alt="" class="avatar">
            <span class="name">请登录</span>
          </div>
          <div class="menu">
            <div class="collection">
              <i class="icon iconfont icon-collect"></i>
              <span>我的收藏</span>
            </div>
            <div class="download">
              <i class="icon iconfont icon-download"></i>
              <span>我的下载</span>
            </div>
          </div>
        </div>
        <div class="content">
          <Catalog :data="list"></Catalog>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Catalog from "./catalog.vue"
var data = [
  {
    id: 13,
    name: "日常心理学"
  },
  {
    id: 12,
    name: "用户推荐日报"
  },
  {
    id: 3,
    name: "电影日报"
  },
  {
    id: 11,
    name: "不许无聊"
  },
  {
    id: 4,
    name: "设计日报"
  },
  {
    id: 5,
    name: "大公司日报"
  },
  {
    id: 6,
    name: "财经日报"
  },
  {
    id: 10,
    name: "互联网安全"
  },
  {
    id: 2,
    name: "开始游戏"
  },
  {
    id: 7,
    name: "音乐日报"
  },
  {
    id: 9,
    name: "动漫日报"
  },
  {
    id: 8,
    name: "体育日报"
  }
];
export default {
  data(){
    return{
      list:data
    }
  },
  components:{
    Catalog
  },
  methods: {
    hideMenu() {
      this.$store.dispatch({
        type: "hideSideBar"
      });
    }
  },
  computed: {
    isReallShow() {
      return this.$store.getters.isShowMethod;
    }
  }
};
</script>

<style scoped>

.content {
  height: 100%;
  background-color: #ffffff;
  overflow-y: auto;
}

.menu span{
  color: white;
}
.collection,
.download {
  width: 50%;
  text-align: center;
  line-height: 5.2;
}
.icon {
  font-size: 24px;
  color: white;
  font-weight: bolder;
}
.menu {
  display: flex;
  height: 65px;
}
.name {
  font-size: 16px;
  color: #f7f7f7;
  font-weight: lighter;
}
.avatar {
  width: 36px;
  border-radius: 50%;
  line-height: 36px;
  margin-right: 12px;
}
img {
  vertical-align: middle;
  color: transparent;
  font-size: 0;
}
.head {
  background: rgb(18, 142, 232);
  height: 130px;
  width: 100%;
}
.login-content {
  height: 65px;
  width: 100%;
  padding-left: 20px;
  line-height: 60px;
}

.fade-enter-to,
.fade-leave-to {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.side-enter-to,
.side-leave-to {
  transition: transform 0.3s;
}
.side-enter,
.side-leave-to {
  transform: translate3d(-286px, 0, 0);
}

.sidebar .menu-content .footer {
  position: fixed;
  bottom: 0;
  height: 40px;
  width: 286px;
  font-size: 0;
  background: #f7f7f7;
}
.night-mode {
  line-height: 40px;
  width: 40%;
}
.setting {
  line-height: 40px;
  width: 30%;
}
.exit {
  line-height: 40px;
  width: 30%;
}

.sidebar .menu-content .footer div {
  display: inline-block;
  font-size: 16px;
  height: 100%;
  text-align: center;
}
.sidebar .menu-content .footer div i {
  color: #999;
  font-size: 18px;
  vertical-align: middle;
}
.menu-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 1;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  transform: translateZ(0);
}

.menu-content {
  position: fixed;
  width: 286px;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 11;
  -webkit-overflow-scrolling: touch;
}
</style>


