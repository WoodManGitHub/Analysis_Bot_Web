<template lang='pug'>
  #app
    nav.navbar.navbar-dark.bg-dark
      ul.nav.justify-content-center
        li.nav-item
          a.nav-link(href=".") Home
        li.nav-item
          a.nav-link(href="https://github.com/WoodManGitHub/Analysis_Bot") Repo
        li.nav-item
          a.nav-link(href="https://woodman.pw") Developer
    .input-group.mb-3
      input.form-control(type='text' placeholder='Enter Discord Server ID To Continue...' v-model.trim="serverID")
    .button-group(v-if="serverID != ''")
      router-link.btn.btn-color(:to="'/day/'+serverID") Today
      router-link.btn.btn-color(:to="'/month/'+serverID") This Month
      router-link.btn.btn-color(:to="'/all/'+serverID") All
    hr
    router-view
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      serverID: ''
    }
  }
}
</script>

<style lang="sass">
@import './assets/sass/components/index_elements'

#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  margin: 0
  padding: 0
  position: relative
  height: 100%
  display: flex
  flex-direction: column
  align-items: center

</style>
