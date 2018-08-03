<template>
  <div class="sidebar">
    <transition name="fade" @touchmove.stop.prevent>
      <div class="menu-mask" v-show="isReallShow" @click="hideMenu"></div>
    </transition>

    <transition name="side">
      <div class="menu-content" v-show="isReallShow">
        <div class="footer">
          <div class="night-mode">
            <i class="icon-night"></i>
            <span>夜间模式</span>
          </div>
          <div class="setting">
            <i class="icon-setting"></i>
            <span>设置</span>
          </div>
          <div class="exit">
            <i class="icon-exit"></i>
            <span>退出</span>
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


