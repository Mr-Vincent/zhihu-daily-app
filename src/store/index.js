import Vue from 'vue'
import Vuex from 'vuex'
import Http from '../lib/http';


Vue.use(Vuex)

// 测面滑动菜单效果
const SHOW_SIDEBAR = true
const HIDE_SIDEBAR = false

const store = new Vuex.Store({
  state: {
    isShow: false,
    title: "",
    home: {}
  },
  getters: {
    isShowMethod: state => {
      return state.isShow;
    }

  },
  mutations: {
    showBar(state) {
      state.isShow = SHOW_SIDEBAR
    },
    hideBar(state) {
      state.isShow = HIDE_SIDEBAR
    },
    setTitle(state, title) {
      state.title = title
    },
    pendingHomeData(state, homeData) {
      state.home = homeData;
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
    },
    getHomeData({
      commit
    }) {
      // 获取API的数据
      Http.get("4/news/latest").then(res => {
        console.log(res);
      });
      commit('pendingHomeData',"haha")
    }
  },

})

export default store