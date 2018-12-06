// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,    
      //iphone6为参考 375物理像素 直接除以10
      //相应的页面里面的所有尺寸都要除以二   34px像素文字就是17px  直接写px就可以自动转为相应rem
      propList: ['*']
    }
  }
}
