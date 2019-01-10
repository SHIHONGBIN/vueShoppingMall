// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//利用babelrc 里面设置 按需加载vant模块，需要什么加载什么
import { Checkbox, CheckboxGroup, Button, Row, Col,Swipe, SwipeItem, lazyload } from 'vant';
//使用模块
Vue.use(Button).use(Checkbox).use(CheckboxGroup).use(Row).use(Col).use(Swipe).use(SwipeItem)
.use(lazyload);


Vue.config.productionTip = false


window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
  var docEl = document.documentElement||document.body;
  if(docEl >= 750){
    docEl = 750
  }
  var rem = docEl.clientWidth / 10;
  docEl.style.fontSize = rem + 'px';
};
setHtmlFontSize();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
