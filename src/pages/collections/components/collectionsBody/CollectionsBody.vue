<template>
  <div >
   <CollectionsSlider :sliderImages="sliderImages"></CollectionsSlider>
  </div>
</template>

<script>
  import CollectionsSlider from '../collectionsSlider/CollectionsSlider.vue'
  export default {
    name: 'collectionsBody',
    props: {
      sliderImages: Array
    },
    components: {
      CollectionsSlider
    }
  }
</script>

<style scoped lang="scss">
  @import "collectionsBody";
</style>
