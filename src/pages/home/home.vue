<template>
  <div class="homepage">
    <TopHeader

      :isMenuOpen="menuToggleStatus"
      :toggleMenu="toggleMenu"></TopHeader>
    <MainContent :isMenuOpen="menuToggleStatus"></MainContent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
  import $ from 'webpack-zepto'
  import { mapGetters, mapActions } from 'vuex'
  import TopHeader from '@/components/topHeader/TopHeader.vue'
  import MainContent from '@/components/mainContent/MainContent.vue'
  import FooterComponent from '@/components/footer/FooterComponent.vue'

  export default {
    name: 'home',
    data () {
      return {
        hideHeader: false
      }
    },
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
      MainContent,
      FooterComponent
    },
    mounted () {
      $(window).on('scroll', () => {
        this.closeMenu()
      })
    },
    beforeDestory () {
      $(window).off('scroll')
    }
  }
</script>

<style lang="css">
  .homepage {
    display: flex;
    flex-direction: column;
  }
</style>
