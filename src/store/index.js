import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 测面滑动菜单效果
const SHOW_SIDEBAR = true
const HIDE_SIDEBAR = false

const store = new Vuex.Store({
  state: {
    isShow: false
  },
  getters: {
    isShowMethod: state => {
      console.log('isShowMethod');
      return state.isShow;
    }

  },
  mutations: {
    showBar(state) {
      state.isShow = SHOW_SIDEBAR
    },
    hideBar(state) {
      state.isShow = HIDE_SIDEBAR
    }
  },
  actions: {
    showSideBar({
      commit
    }) {
      commit('showBar');
    },
    hideSideBar({
      commit
    }) {
      commit('hideBar')
    }
  },

})

export default store