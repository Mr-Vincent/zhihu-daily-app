<template>
  <div class="header">
    <div class="header-wrapper">
      <i class="menu icon-menu" @click="showMueu"></i>
      <div class="header-title"><span>{{latestTitle}}</span></div>
    </div>
  </div>
</template>

<script>
import store from "../../store";
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    showMenu: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: "首页"
    };
  },
  methods: {
    showMueu() {
      store.dispatch({
        type: "showSideBar"
      });
    },
    hideMenu() {
      store.dispatch({
        type: "hideSideBar"
      });
    }
  },
  computed: {
    latestTitle() {
      var title = store.state.title;
      return title === "" ? this.title : title;
    }
  }
};
</script>
<style scoped>
.header {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
  z-index: 10;
  background: rgb(18, 142, 232);
}

.header-wrapper {
  background: rgb(18, 142, 232);
  height: 100%;
  display: flex;
  align-items: center;
}
.header-title {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
span {
  display: inline-block;
  font-size: 20px;
  color: rgb(254, 254, 255);
}
.icon-menu {
  color: #fff;
  font-size: 26px;
  padding: 12px 15px;
}
</style>

