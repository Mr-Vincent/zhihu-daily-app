<template>
  <div class="content">
    <div class="item" :class="{selected: item.selected}" v-for="item in list" :key="item.id" @click="changeTheme(item.id)">{{item.name}}
      <i class="icon-add"></i>
    </div>
  </div>
</template>
<script>
var data = [
  {
    id: 0,
    name: "首页"
  },
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
  data() {
    return {
      list: data
    };
  },
  methods:{
    changeTheme(id){
      console.log(id);
      this.list.map(item => {
        if(item.id === id) {
          item.selected = true;
        }
      });
      // this.$store.dispatch({
      //   type: "hideSideBar"
      // });
    }
  },
  computed:{

  }
};
</script>

<style scoped>
.content {
  height: 100%;
  background-color: #ffffff;
  overflow-y: auto;
}

.item {
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 20px;
  font-size: 17px;
  color: #797979;
}
.item i {
  right: 70px;
  position: absolute;
}
.selected{
  background-color: #dfdfdf;
}
.item:hover {
  background-color: #dfdfdf;
}
</style>
