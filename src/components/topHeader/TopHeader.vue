<template>
  <div class="header-wrapper">
    <h1><a href="/"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/common/logo.png" width="116" height="20" alt="Plantation" class="pc"></a></h1>
    <nav>
      <ul >
        <li ><a href="http://www.plantation1982.com/news/"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/common/g_navi01.gif" width="40" height="18" alt="News"></a></li>
        <li ><a href="http://www.plantation1982.com/collection/"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/common/g_navi03.gif" width="78" height="18" alt="Collection"></a></li>
        <li ><a href="http://www.plantation1982.com/recommend/"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/common/g_navi04.gif" width="94" height="18" alt="Recommend"></a></li>
        <li ><a href="http://www.plantation1982.com/philosophy/"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/common/g_navi02.gif" width="86" height="18" alt="Philosophy"></a></li>
        <li ><a href="http://www.plantation1982.com/shop_list/"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/common/g_navi05.gif" width="74" height="18" alt="Shop List"></a></li>
        <li ><a href="http://www.hmr.jp/shop/r/PL" target="_blank"><img src="http://www.plantation1982.com/wp/wp-content/themes/plantation/img/common/g_navi06.gif" width="96" height="18" alt="Online Shop"></a></li>
      </ul>
    </nav>
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
  @import "topHeader";
</style>
