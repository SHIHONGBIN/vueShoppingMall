<template>
  <div class="index-page">
    <!-- search导航 -->
    <van-row>
      <van-col span="3">
        <img :src="locationIcon" alt>
      </van-col>
      <van-col span="16">
        <input type="text" appear-active-class="search-input">
      </van-col>
      <van-col span="5">
        <van-button size="mini">查找</van-button>
      </van-col>
      <!-- //轮播图 -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image">
        </van-swipe-item>
      </van-swipe>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "indexPage",
  data() {
    return {
      locationIcon: require("../assets/images/search.png"),
      images:[
      'https://img.yzcdn.cn/2.jpg',
      'https://img.yzcdn.cn/2.jpg',
      'https://img.yzcdn.cn/2.jpg',
    ]
    };
  }
};
</script>

<style scoped lang='scss'>
.index-page {
  height: 1.1rem;
  line-height: 1.1rem;
  background-color: #e5017d;
  .van-row {
    input {
      height: 0.7rem;
      line-height: 0.7rem;
      border: none;
      border-bottom: 1px solid #fff;
      width: 100%;
      background-color: transparent;
      color: #fff;
    }
    .van-col {
      height: 100%;
      img {
        height: 0.6rem;
        display: inline-block;
        vertical-align: middle;
      }
      button {
        background-color: #ccc;
        border-color: #ccc;
      }
    }
  }
}
.van-swipe{ width: 10rem; height: 5rem; background-color: #e0e0e0;
  img{ width: 100%; height: 100%;}
}
</style>