<template>
  <div>content</div>
</template>
<script>

export default {
  mounted(){
    this.$store.dispatch("getHomeData");
  }
}
</script>

<style scoped>

</style>
