<template>
  <div class="swiper">
    <div class="window">
      <ul class="container" ref="imagesWrapper">
        
        <li v-for="(e,i) in imgs" :key="i">
          <img :src="e.image" :alt="e.title">
          <div class="desc">{{e.title}}</div>
        </li>
        
      </ul>

      <ol class="point-wrap">
        <li :class="{active:i==currentIndex}" v-for="(e,i) in imgs" :key="i"></li>
      </ol>

    </div>
  </div>
</template>

<script>
export default {
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
      let total = this.imgs.length;
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
      // this.play();
    },
    next() {
      this.currentIndex++;
      // 边界判断
      if (this.currentIndex > this.imgs.length - 1) {
        this.currentIndex = 0;
      }

      // center 为显示的图片
      let center = this.currentIndex;
      // 左边的 如果为负数 就取最后一张图片下标
      let left = center - 1 < 0 ? this.imgs.length - 1 : center - 1;
      // 右边的 如果超过了最大图片数量 取第一张图片下标
      let right = center + 1 == this.imgs.length ? 0 : center + 1;

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
      imgs: [
        {
          image:
            "https://pic1.zhimg.com/v2-91ddd47c73ba396ce91ce27364621944.jpg",
          type: 0,
          id: 9693041,
          ga_prefix: "081407",
          title: "我们都躲着太阳，而这个叫「帕克」的却要「触摸」太阳"
        },
        {
          image:
            "https://pic2.zhimg.com/v2-30c6707c1f3602950ed7aa780d150bc5.jpg",
          type: 0,
          id: 9693033,
          ga_prefix: "081407",
          title: "猫，其实是狗的一种，它又被称为「淡水狗」……"
        },
        {
          image:
            "https://pic3.zhimg.com/v2-2f51cb1fb5209b84fd183fcd4d10bf62.jpg",
          type: 0,
          id: 9692842,
          ga_prefix: "081321",
          title: "今晚点映 · 一部今夏最被低估的美剧，没开玩笑"
        },
        {
          image:
            "https://pic4.zhimg.com/v2-4de31b7aca6e7d785127fc8aa9d4f717.jpg",
          type: 0,
          id: 9692906,
          ga_prefix: "081407",
          title: "《一出好戏》，就是一部小小荒岛上的小小人类史"
        },
        {
          image:
            "https://pic4.zhimg.com/v2-3d293a3124c1da16ffae9a7979b6e823.jpg",
          type: 0,
          id: 9692818,
          ga_prefix: "081315",
          title: "你可以这样向孩子解释「父母正在吵架」这件事"
        }
      ],
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
