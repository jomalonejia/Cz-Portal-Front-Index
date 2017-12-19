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
            <li><span class="list-aligner-url" @click="navigate('/')">Home</span></li>
            <li><span class="list-aligner-url" @click="navigate('/collections')">Collections</span></li>
            <li><a href="http://localost:4201" target="_blank">Shop</a></li>
            <li><span class="list-aligner-url" @click="navigate('/info')">Info</span></li>
            <li><span class="list-aligner-url" @click="navigate('/about')">About</span></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    props: {
      isMenuOpen: Boolean,
      toggleMenu: Function
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      navigate (url) {
        this.toggleMenu()
        this.$router.push(url)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "topHeader";

  .header-hide {
    transform: matrix(1, 0, 0, 1, 0, -80);
    transition: 1s;
  }

  .header-show {
    transform: matrix(1, 0, 0, 1, 0, 0);
    transition: 1s;
  }
</style>
