<template>
  <div class="collections-slider-area">
    <div class="test">

    </div>
    <div class="slider-container">
      <div :class="index == 0 ? 'slider-left' : 'slider-right'" v-for="(images, index) in sliderImages">
        <div class="slider-image"
             v-for="(image, imageIndex) in images"
             :style="index == 0
             ? {display: `${imageIndex == position ? 'block' : 'none'}`}
             : {display: `${imageIndex == position ? 'block' : 'none'}`}">
          <img :src="image">
        </div>
      </div>
      <div class="slider-toggle-area">
        <button class="slider-toggle-btn left-button" @click="toggleLeft()">
          <span class="slider-arrow-left">
            <icon name="arrow-left"></icon>
          </span>
        </button>
        <button class="slider-toggle-btn right-button" @click="toggleRight()">
          <span class="slider-arrow-right">
            <icon name="arrow-right"></icon>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'collectionsSlider',
    props: {
      sliderImages: Array
    },
    data () {
      return {
        position: 0
      }
    },
    methods: {
      toggleLeft () {
        this.position ++
      },
      toggleRight () {
        console.log('right')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "collectionsSlider";
</style>
