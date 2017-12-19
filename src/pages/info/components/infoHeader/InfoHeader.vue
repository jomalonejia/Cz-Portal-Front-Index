<template>
  <div class="info-header">
    <div class="info-header-container">
      <div class="info-header-wrapper">
        <div class="info-header-box">
          <div class="info-header-box-container">
            <header>
              <div class="info-header-title-small">
                <span>Iris von Arnim</span>
              </div>
              <div class="info-header-title-large">
                <span>Branding Commerce</span>
              </div>
            </header>
            <div class="info-header-link">
              <div class="info-header-link-area">
                <a class="d-ib" href="http://www.baidu.com">
                  <div class="link-content">
                    <span class="filled d-7">View Case Study</span>
                    <span class="link-decoration"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="info-header-box">
          <div class="info-header-box-container">
            <div class="info-video">
              <video autoplay loop>
                <source src="static/videos/info/info.mp4" type="video/mp4">
              </video>
              <div class="info-header-background">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'infoHeader'
  }
</script>

<style scoped lang="scss">
  @import "infoHeader";
</style>
