<template>
  <div class="hello">
    <span class="span-text">字体</span>
    <van-checkbox v-model="checked">复选框</van-checkbox>
    <van-checkbox v-model="checked" checked-color="#4b0">复选框</van-checkbox>

    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button size="large">大号按钮</van-button>
    <van-button size="normal">普通按钮</van-button>
    <van-button size="small">小型按钮</van-button>
    <van-button size="mini">迷你按钮</van-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      checked: true
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.span-text {
  font-size: 14px;
}
.hello {
  background-color: #eee;
  height: 1rem;
  width: 375px;
  span.span-text{ color:#ff5d73}
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
