<template>
 <div>
   about
 </div>
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
  @import "aboutContent";
</style>
