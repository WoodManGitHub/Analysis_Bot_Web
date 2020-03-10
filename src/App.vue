<template lang='pug'>
  #app
    nav.navbar.navbar-dark.bg-dark
      a.btn.nav-link(href=".") Home
      a.btn.nav-link(href="https://github.com/WoodManGitHub/Analysis_Bot") GitHub
    h1.title Discord Online Analyzer
    .input-group.mb-3.row
      input.col-md-6.form-control(type='text' placeholder='Enter Discord Server ID To Continue...' v-model.trim="serverID")
      router-link.col-md-2.btn(:class="(serverID)?'':'disabled'" :to="'/day/'+serverID") Today
      router-link.col-md-2.btn(:class="(serverID)?'':'disabled'" :to="'/month/'+serverID") This Month
      router-link.col-md-2.btn(:class="(serverID)?'':'disabled'" :to="'/all/'+serverID") All
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
  },
  created () {
    this.serverID = this.$router.history.current.params.serverID
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
