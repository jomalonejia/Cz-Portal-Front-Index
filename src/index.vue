<template>
  <transition name="fade">
    <div class="body">
      <TopHeader
        :isMenuOpen="menuToggleStatus"
        :toggleMenu="toggleMenu"></TopHeader>
      <div class="content" :class="menuToggleStatus ? 'openedMain' : 'closedMain' ">
        <router-view></router-view>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  </transition>
</template>

<script>
  import $ from 'webpack-zepto'
  import { mapGetters, mapActions } from 'vuex'
  import TopHeader from '@/components/topHeader/TopHeader.vue'
  import FooterComponent from '@/components/footer/FooterComponent.vue'
  export default {
    name: 'index',
    computed: {
      ...mapGetters({
        menuToggleStatus: 'menuToggleStatus'
      })
    },
    methods: {
      ...mapActions(['toggleMenu', 'closeMenu'])
    },
    components: {
      TopHeader,
      FooterComponent
    },
    mounted () {
      $(window).on('scroll', () => {
        if (this.menuToggleStatus) {
          this.closeMenu()
        }
      })
    },
    beforeDestory () {
      $(window).off('scroll')
    }
  }
</script>

<style lang="css">
  body {
    font-family: Tahoma, Verdana, Segoe, sans-serif;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  p {
    opacity: 0.5;
  }

  h1, h2, h3, h4, h5 {
    opacity: 0.6;
  }

  .openedMain {
    transition: 0.5s;
    transform: matrix(1, 0, 0, 1, -225, 0);
  }

  .closedMain {
    transition: 0.5s;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
</style>
