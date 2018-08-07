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
      </div>
    </transition>
  </div>
</template>

<script>
export default {
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
  transfrom: translateZ(0);
}

.menu-content {
  background-color: rgb(228, 144, 144);
  position: fixed;
  width: 286px;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 11;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
</style>


