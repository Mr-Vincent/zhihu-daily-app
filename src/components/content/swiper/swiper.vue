<template>
  <div class="swiper">
    <div class="window">
      <ul class="container" :style="containerStyle">
        <li><img src="../../../assets/image/1.jpg" alt=""></li>
        <li><img src="../../../assets/image/2.jpg" alt=""></li>
        <li><img src="../../../assets/image/3.jpg" alt=""></li>
        <li><img src="../../../assets/image/4.jpg" alt=""></li>
        <li><img src="../../../assets/image/5.jpg" alt=""></li>
      </ul>

      <ol class="point-wrap">
		    <li class="active"></li>
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
      </ol>

    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // this.play();
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = window.setInterval(() => {
        this.distance += this.speed * 1;
      }, this.interval);
    }
  },
  data() {
    return {
      currentIndex: 1,
      speed: 375,
      distance: 0
    };
  },
  computed: {
    containerStyle() {
      return {
        transform: `translateX(${this.distance}px)`
      };
    },
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
  height: 100%;
  width: 100%;
}
.container {
  position: relative;
  min-height: 100%;
}
.container li {
  width: 100%;
  position: absolute;
  top: 0;
  height: 100%;
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
</style>
