<template>
  <div>
   <img src="static/images/view.gif">
  </div>
</template>

<script>
  export default {
    name: 'News',
    data () {
      return {
        videoUrl: 'https://d27shkkua6xyjc.cloudfront.net/videos/maaemo-film-2.mp4?mtime=20141113185431'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "news";
</style>
