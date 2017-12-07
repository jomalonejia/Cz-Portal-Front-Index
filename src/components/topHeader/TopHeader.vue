<template>
  <header class="page-header">
    <nav class="main-menu">
      <div class="top-bar">
        <a href="https://maaemo.dinesuperb.com/" class="booking-toggle" target="_blank">Book a table</a>
        <div class="menu-toggle hide-menu" @click="toggleMenu">
          <icon class="toggle-icon"
                :name="isMenuOpen ? 'close' : 'navicon'"
                :scale="2">
          </icon>
        </div>
      </div>
      <div class="main-menu-wrapper" :class="isMenuOpen ? 'openedMenu' : 'closedMenu'">
        <div class="list-aligner">
          <ul>
            <li><router-link :to="'/'">Home</router-link></li>
            <li><router-link :to="'/menu'">Menu</router-link></li>
            <li><a href="http://localost:4201" target="_blank">Shop</a></li>
            <li><router-link :to="'/press'">Press</router-link></li>
            <li><router-link :to="'/about'">About</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
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
  .header-hide{
    transform: matrix(1, 0, 0, 1, 0, -80);
    transition: 1s;
  }
  .header-show{
    transform:  matrix(1, 0, 0, 1, 0, 0);
    transition: 1s;
  }
</style>
