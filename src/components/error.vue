<template lang="pug">
.root
  h1.card-title Error occured
  p Something wrong happened, check your input or contact developer.
</template>

<script>
export default {
  name: 'error',
  components: {}
}
</script>

<style lang="sass">
@import "../assets/sass/components/error_card"

.root
  display: flex
  flex-direction: column
  align-items: center
  padding: 40px 10px
  h1
    padding: 20px 0px
</style>
