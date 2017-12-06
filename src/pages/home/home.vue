<template>
  <div>
    <TopHeader :isMenuOpen="menuToggleStatus"
               :toggleMenu="toggleMenu"></TopHeader>
    <News></News>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import TopHeader from '@/components/topHeader/TopHeader.vue'
  import News from '@/components/news/News.vue'

  export default {
    name: 'home',
    computed: {
      ...mapGetters({
        menuToggleStatus: 'menuToggleStatus'
      })
    },
    methods: mapActions([
      'toggleMenu'
    ]),
    components: {
      TopHeader,
      News
    }
  }
</script>

<style lang="scss">
</style>
