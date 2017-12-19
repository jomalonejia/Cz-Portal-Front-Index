<template>
  <div class="info">
    <InfoHeader></InfoHeader>
    <InfoContent></InfoContent>
  </div>
</template>

<script>
  import InfoHeader from './components/infoHeader/InfoHeader.vue'
  import InfoContent from './components/infoContent/InfoContent.vue'
  export default {
    name: 'info',
    components: {
      InfoHeader,
      InfoContent
    }
  }
</script>

<style scoped lang="css">
  .info{
    padding-top: 180px;
  }
</style>
