<template>
  <div class="swiper">
    <div class="window">
      <ul class="container" ref="imagesWrapper">
        <li v-for="(e,i) in headerData" :key="i">
          <img :src="e.image" :alt="e.title">
          <div class="desc">{{e.title}}</div>
        </li>
      </ul>
      <ol class="point-wrap">
        <li :class="{active:i==currentIndex}" v-for="(e,i) in headerData" :key="i"></li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    headerData:{
      type:Array,
      required:true,
      default:[]
    }
  },
  watch: {
    distance(val) {
      this.distance = val;
    }
  },
  mounted() {
    this.windowChange();
    this.init();
  },
  methods: {
    // 窗口变化 重新初始化
    windowChange() {
      const that = this;
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth;
          that.distance = window.screenWidth;
          this.init();
        })();
      };
    },
    init() {
      let wrappers = this.$refs.imagesWrapper;
      let children = wrappers.children;
      let total = this.headerData.length;
      if(total <=0) return;
      // 纯js操作 只需要先将三张图片位置确定好
      // 最左边按道理说是没有图片的 但是为了无限滚动效果 这里将其置为最后一张
      let left = total - 1;
      let center = 0;
      let right = 1;

      // 初始化的时候将li左移动了一个屏幕宽度，就是为了防止叠加的元素挡住要显示的图
      // 现在第一张显示的图片实际是最后一张 3张轮播起来就行了 没必要对每个图片进行位置计算
      // left处于最左边的位置 不显示
      children[left].style.transform = "translateX(" + -this.distance + "px)";
      // center处于中间位置 显示
      children[center].style.transform = "translateX(" + 0 + "px)";
      // right处于右边 不显示
      children[right].style.transform = "translateX(" + this.distance + "px)";
      this.sliderItem = children;
      this.play();
    },
    next() {
      this.currentIndex++;
      // 边界判断
      if (this.currentIndex > this.headerData.length - 1) {
        this.currentIndex = 0;
      }

      // center 为显示的图片
      let center = this.currentIndex;
      // 左边的 如果为负数 就取最后一张图片下标
      let left = center - 1 < 0 ? this.headerData.length - 1 : center - 1;
      // 右边的 如果超过了最大图片数量 取第一张图片下标
      let right = center + 1 == this.headerData.length ? 0 : center + 1;

      let children = this.sliderItem;
      // 给元素添加过渡
      children[center].style.transition = "transform .5s";
      children[left].style.transition = "transform .5s";
      // 右边的图片是替补图片，不需要走过渡
      children[right].style.transition = "none";
      // 3张图片同时移动
      children[left].style.transform = "translateX(" + -this.distance + "px)";
      children[center].style.transform = "translateX(0px)";
      children[right].style.transform = "translateX(" + this.distance + "px)";
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = window.setInterval(() => {
        this.next();
      }, this.interval);
    }
  },
  data() {
    return {
      sliderItem: {},
      timer: null,
      currentIndex: 0,
      speed: 375,
      distance:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    };
  },
  computed: {
    interval() {
      return 3 * 1000;
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

img {
  width: 100%;
}
.container {
  position: relative;
  min-height: 100%;
}
.container li {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(100%);
}

.window {
  position: relative;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.swiper {
  width: 100%;
  height: 230px;
  background-color: rgb(176, 179, 176);
  text-align: center;
  box-sizing: border-box;
}

ul,
ol {
  list-style: none;
}

.point-wrap {
  text-align: center;
  font-size: 0;
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;
}
.point-wrap li {
  width: 7px;
  height: 7px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: inline-block;
  margin: 0 3px;
}
.point-wrap li.active {
  background-color: #fff;
}

.desc {
  color: #e9e9e9;
  position: absolute;
  top: 55%;
  text-align: left;
  font-size: 22px;
  padding: 16px;
}
</style>
