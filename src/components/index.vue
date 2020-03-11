<template lang='pug'>
  .page-root
    how_to_use
    .container
      h1 Developers
      .dev
        .item
          img.avatar(src="../assets/images/jimchen5209.png", alt="alt")
          h4.name jimchen5209
          .info Main contributor
          .info Web Developer
        .item
          img.avatar(src="../assets/images/woodman.png", alt="alt")
          h4.name WoodMan
          .info Contributor
          .info Web Developer
</template>

<script>
import how_to_use from './how_to_use.vue'

export default {
  name: 'index',
  components: { how_to_use }
}
</script>

<style lang="sass">
@import "../assets/sass/components/container"
</style>
