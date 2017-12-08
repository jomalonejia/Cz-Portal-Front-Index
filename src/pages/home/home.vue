<template>
  <div class="homepage">
    <MainContent :isMenuOpen="menuToggleStatus"></MainContent>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MainContent from './components/mainContent/MainContent.vue'

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
    components: {
      MainContent
    }
  }
</script>

<style lang="css">
  .homepage {
    display: flex;
    flex-direction: column;
  }
</style>
