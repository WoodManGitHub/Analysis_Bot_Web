<template lang='pug'>
  .container
    h1 How To Use
    ol
      li Go to your #[b Discord Settings] -&gt; #[b Appearance] -&gt; #[b ADVANCED] and turn #[b Developer Mode] on.
      li Right click on #[b the server icon you want to query] and select #[b Copy ID].
      li Paste the #[b ID] you copied onto the text area and click on one of the buttons.
    img(src="../assets/images/how_to_use.png" width="100%")
</template>

<script>
export default {
  name: 'how_to_use',
  components: {}
}
</script>

<style lang="sass">
@import "../assets/sass/components/container"
</style>
