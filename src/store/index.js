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
    dataAvailable:false,
    home: {},
    themeData:{}
  },
  getters: {
    isShowMethod: state => {
      return state.isShow;
    },
    headerData:state =>{
      return state.home.top_stories;
    },
    newsList:state =>{
      return state.home.stories;
    },
    showLoading:state =>{
      return !state.dataAvailable;
    },
    themeData: state => {
      return state.themeData;
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
      state.dataAvailable = true;
    },
    pendingThemeData(state, data) {
      state.dataAvailable = true;
      var key = data.id;
      state.themeData[key] = data.themeData;
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
      Http.fetch("/api/news/latest",function(res){
        commit('pendingHomeData',res);
      });
    },
    getThemeData(context,id) {
      // 获取API的数据
      var key = id;
      if(context.state.themeData[key] != undefined) {
        console.log("theme 数据已经存在，不再请求api");
        return;
      }
      
      Http.fetch("/api/theme/"+id,function(res){
        context.commit('pendingThemeData',{'themeData':res,"id":id});
      });
    }
  },

});

export default store