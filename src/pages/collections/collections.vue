<template>
  <div class="collections">
    <div class="collections-header">
      <CollectionsHeader></CollectionsHeader>
    </div>
    <div class="collections-body">
      <CollectionsBody :sliderImages="sliderImagesStatus"></CollectionsBody>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import CollectionsHeader from './components/collectionsHeader/CollectionsHeader.vue'
  import CollectionsBody from './components/collectionsBody/CollectionsBody.vue'
  export default {
    name: 'collections',
    computed: {
      ...mapGetters({
        sliderImagesStatus: 'sliderImagesStatus'
      })
    },
    methods: {
      ...mapActions(['listSliderImages'])
    },
    mounted () {
      this.listSliderImages()
    },
    components: {
      CollectionsHeader,
      CollectionsBody
    }
  }
</script>

<style scoped lang="scss">
  .collections{
    padding-top: 80px;
    .collections-body{
      padding: 180px 0;
    }
  }
</style>
