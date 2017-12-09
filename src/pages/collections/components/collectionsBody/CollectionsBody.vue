<template>
  <div>
   <CollectionsSlider :sliderImages="sliderImages"></CollectionsSlider>
    <div class="collection-list">
      <div class="collection-one">
        <div class="collection-image-wrapper">
          <img src="static/images/collections/collection-gallery_7.jpg">
        </div>
        <div class="collection-one-content-wrapper">
          <h1 class="title">About The Collection</h1>
          <p>For 2016, the Basics collection is casual and chic and echoes the spirit of travel. The lightweight and breathable cotton fabrics make this collection hassle free to mix and match resulting in fresh and comfortable look that can easily be dressed up or down depending on the occasion.
          </p>
        </div>
      </div>
      <div class="collection-two">
        <div class="collection-image-wrapper image-wrapper-two">
          <img src="static/images/collections/collection-gallery_2.jpg">
        </div>
      </div>
      <div class="collection-three">
        <div >
          <img src="static/images/collections/corp_1.jpg">
        </div>
        <div class="collection-three-content">
          <h1 class="title">
            <b>The</b><br>
            Inspiration
          </h1>
          <p>The 2016 Basics collection is based on Bouguessa’s signature Shirt Dress, reworked in various styles and colors. These Shirt Dresses are essentially longer versions of the classic button-downs, and are the perfect addition to a woman‘s wardrobe.</p>
        </div>
      </div>
    </div>
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
