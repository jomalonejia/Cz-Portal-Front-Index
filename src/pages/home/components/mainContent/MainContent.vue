<template>
  <main>
    <div class="inner">
      <div class="img-block">
        <img src="static/images/view.gif"/>
        <div class="logo" :style="{top:logoPosition}"><img src="static/images/qie.png"></div>
      </div>
      <div class="frontPage-blocks">
        <div class="block-wrapper">
          <div class="row">
            <div class="frontPage-ingress">
              <p>At Maaemo, my focus is on a complete experience. In doing so, I want to highlight the relationship between the raw nature, produce and our cultural history. Welcome to my universe.</p>
            </div>
            <article class="frontPage-list-article num-1">
              <div class="image-wrapper">
                <img class="article-image" src="static/images/Menu_01_1200px.jpg">
                <span class="mouse-over"></span>
              </div>
              <h4 class="article-title">Menu – A journey through the Norwegian&nbsp;landscape</h4>
            </article>
            <article class="frontPage-list-article num-2">
              <div class="image-wrapper">
                <img class="article-image" src="static/images/Michelin.jpg">
                <span class="mouse-over"></span>
              </div>
              <h4 class="article-title">Maaemo awarded its third Michelin&nbsp;star</h4>
            </article>
          </div>

          <div class="row no-padding">
            <article class="frontPage-list-article num-3">
              <div class="block-image-slideshow image-wrapper" data-images="">
                <img class="article-image" src="static/images/Maaemo-Omslagny2.jpg"
                     sizes="(min-width: 100em) 75vw, (min-width: 62em) 84vw, 100vw">
              </div>
              <h4 class="article-title">The first book from Maaemo is now&nbsp;available</h4>
            </article>
          </div>

          <div class="row clearfix">
            <article class="frontpage-list-article num-4">
              <div class="block-image-slideshow image-wrapper"
                   data-images="https://d27shkkua6xyjc.cloudfront.net/images/00.Frontpage/_1200xAUTO_crop_center-center/Frontpage_03_1500px.jpg?mtime=20141112172549">
                <img class="article-image" src="static/images/About_04_2500px.jpg"></div>
              <h4 class="article-title">About – Reflections on Norwegian nature and&nbsp;climate</h4>
            </article>
            <article class="frontpage-list-article num-5">
              <div class="block-image-slideshow image-wrapper" data-images="">
                <img class="article-image" src="static/images/Esben01.jpg"
                     sizes="(min-width: 100em) calc(38vw - 168px - 16px), (min-width: 75em) calc(34vw - 138px - 16px), (min-width: 62em) calc(42vw - 68px - 16px), (min-width: 45em) calc(50vw - 32px - 68px), calc(100vw - 70px)">
                <span class="mouse-over"></span>
              </div>
              <h4 class="article-title">Stories – How horns filled with cow shit affect the way I&nbsp;cook</h4>
            </article>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        imgHeight: 100,
        logoPosition: '-20%'
      }
    },
    mounted () {
      setTimeout(() => { this.logoPosition = '20%' }, 600)
    }
  }
</script>

<style scoped lang="scss">
  @import "mainContent";
</style>
