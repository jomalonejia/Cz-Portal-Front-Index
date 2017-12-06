<template>
  <header class="page-header">
    <nav class="main-menu">
      <div class="top-bar" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0); width: 1423px;">
        <a href="https://maaemo.dinesuperb.com/" class="booking-toggle" target="_blank">Book a table</a>
        <div class="menu-toggle hide-menu" @click="toggleMenu">
          <icon class="toggle-icon"
                :name="isMenuOpen ? 'close' : 'navicon'"
                :scale="2">
          </icon>
        </div>
      </div>
      <div class="main-menu-wrapper">
        <div class="list-aligner">
          <ul>
            <li><a href="https://maaemo.no/menu" tabindex="-1">Menu</a></li>
            <li><a href="https://maaemo.no/about-maaemo" tabindex="-1">About</a></li>
            <li><a href="https://maaemo.no/press" tabindex="-1">Press</a></li>
            <li><a href="https://maaemo.no/career" tabindex="-1">Career</a></li>
            <li><a href="https://maaemo.no/faq" tabindex="-1">FAQ</a></li>
            <li><a href="https://maaemo.no/stories" tabindex="-1">Stories</a></li>
            <li><a href="https://maaemo.no/shop" tabindex="-1">Shop</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    props: {
      isMenuOpen: Boolean,
      toggleMenu: Function
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "topHeader";
</style>
