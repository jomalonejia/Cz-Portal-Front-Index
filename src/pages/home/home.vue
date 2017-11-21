<template>
  <div>
    <TopHeader></TopHeader>
    <NavHeader></NavHeader>
    <News></News>
  </div>
</template>

<script>
  import TopHeader from '@/components/topHeader/TopHeader.vue'
  import NavHeader from '@/components/navHeader/NavHeader.vue'
  import News from '@/components/news/News.vue'

  export default {
    name: 'home',
    components: {
      TopHeader,
      NavHeader,
      News
    }
  }
</script>

<style lang="scss">
  ul{
    list-style: none;
  }
</style>
