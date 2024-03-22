<template lang='pug'>
.page-root
  how_to_use
  .container
    h1 Developers
    .dev
      .item
        img.avatar(src="../assets/images/woodman.png", alt="")
        h4.name WoodMan
        .info Owner
        .info Web Developer
      .item
        img.avatar(src="../assets/images/jimchen5209.png", alt="")
        h4.name jimchen5209
        .info Contributor
        .info Web Developer
      .item
        img.avatar(src="../assets/images/bill96012.png", alt="")
        h4.name bill96012
        .info Contributor
        .info UI/UX
      .item
        img.avatar(src="../assets/images/james58899.png", alt="")
        h4.name james58899
        .info Mouth Gun
        .info Sunrise Sunset
</template>

<script>
import howToUse from './how_to_use.vue'

export default {
  name: 'index',
  components: { how_to_use: howToUse }
}
</script>

<style lang="sass">
@import "../assets/sass/components/container"
</style>
