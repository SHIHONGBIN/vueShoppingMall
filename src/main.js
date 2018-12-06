// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
  var docEl = document.documentElement;
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