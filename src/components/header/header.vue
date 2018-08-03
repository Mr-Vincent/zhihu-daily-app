<template>
  <div class="header">
    <div class="header-wrapper">
      <i class="menu icon-menu" @click="showMueu"></i>
      <div class="header-title"><span>首页</span></div>
    </div>
  </div>
</template>

<script>
import store from '../../store'
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
  methods: {
    showMueu () {
				store.dispatch({
					type: 'showSideBar'
				})
			},
			hideMenu () {
				store.dispatch({
					type: 'hideSideBar'
				})
			}
  }
};
</script>
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 10;
  background: #54f4ff;
}

.header-wrapper {
  background: #902b2b;
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
  color: #eceaea;
}
.icon-menu {
  color: #fff;
  font-size: 26px;
  padding: 12px 15px;
}
</style>

