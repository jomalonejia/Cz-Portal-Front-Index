<template>
  <div class="header-wrapper">
    <div class="nav-left">
      <div class="slick-track" >
        <div class="image-wrapper">
          <img src="static/images/photo06.jpg"/>
        </div>
      </div>
    </div>
    <div class="nav-right">
        <div class="rInner">
          <ul class="naviUl">
            <li ><a href="http://www.plantation1982.com/news/"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/index/imgtext01.gif" width="42" height="16" alt="News"></a></li>
            <li ><a href="http://www.plantation1982.com/collection/"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/index/imgtext03.gif" width="83" height="17" alt="Collection"></a></li>
            <li ><a href="http://www.plantation1982.com/recommend/"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/index/imgtext04.gif" width="98" height="16" alt="Recommend"></a></li>
            <li ><a href="http://www.plantation1982.com/philosophy/"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/index/imgtext02.gif" width="89" height="20" alt="Philosophy"></a></li>
            <li ><a href="http://www.plantation1982.com/shop_list/"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/index/imgtext05.gif" width="77" height="20" alt="Shop List"></a></li>
            <li ><a href="http://www.hmr.jp/shop/r/PL" target="_blank"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/index/imgtext06.gif" width="100" height="20" alt="Online Shop"></a></li>
          </ul>
          <h1><a href="/"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/index/h1_img.gif" width="240" height="42" alt="Plantation"></a></h1>
        </div>
        <p>Nov 7. 2017 update</p>
        <div class="link"><a class="nomover" href="#news"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/common/icon03.png" alt=""></a></div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "navHeader";
</style>
