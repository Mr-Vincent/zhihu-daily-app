<template>
    <div>
      <router-link :to="'/home'" class="link" >
        <div class="item" @click="changeTheme(0)">
            首页
          <i class="icon-add"></i>
        </div>
      </router-link>
      <router-link :to="'/theme/' + item.id" class="link" v-for="item in filteredList" :key="item.id" >
        <div class="item" @click="changeTheme(item.id)">
            {{item.name}}
          <i class="icon-add"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {
      selectedId:-1
    };
  },
  methods: {
    changeTheme(id) {
      var title = "";
      this.selectedId = id;
      this.$store.dispatch({
        type: "hideSideBar"
      });
      var target = this.data.find(item =>item.id === id);
      if(target) {
        title = target.name;
      }else{
        title = "首页";
      }
      this.$store.commit("setTitle",title);
    }
  },
  computed: {
    filteredList() {
      let list = [...this.data];
      list.map(item => {
        if (item.id === this.selectedId) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
      return list;
    }
  }
};
</script>

<style scoped>
.link {
  display: block;
  overflow: hidden;
  background: #fff;
  text-align: left;
  text-decoration-line: none;
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
.active {
  background-color: #dfdfdf;
}
.item:hover {
  background-color: #dfdfdf;
  cursor: pointer;
}
</style>
