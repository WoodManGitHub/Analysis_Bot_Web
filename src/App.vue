<template lang='pug'>
  #app
    nav.navbar.navbar-dark.bg-dark
      a.btn.nav-link(href=".") Home
      a.btn.nav-link(href="https://github.com/WoodManGitHub/Analysis_Bot") GitHub
    h1.title
      a(href=".") Discord Online Analyzer
    .input-group
      input.col-xl-6.form-control(type='text' placeholder='Enter Discord Server ID To Continue...' v-model.trim="serverID")
      router-link.col-xl-2.btn(:class="(serverID)?'':'disabled'" :to="'/day/'+serverID") Today
      router-link.col-xl-2.btn(:class="(serverID)?'':'disabled'" :to="'/week/'+serverID") This Week
      b-button.col-xl-2.btn(:class="(serverID)?'':'disabled'" :disabled="!serverID" v-b-toggle.customDate) Custom
    b-collapse#customDate(:visible="customEnabled")
      .input-group
        date-picker.col-xl-10.date-picker(prefix-class="xmx" placeholder="Pick a ranged date..." :disabled="!serverID" :disabled-date="checkDisabled" v-model="customTime" type="date" value-type="timestamp" range)
        router-link.col-xl-2.btn(:class="(serverID && (customTime[0] !== null && customTime[1] !== null))?'':'disabled'" :to="'/custom/'+serverID+'?start='+(customTime[0]/1000)+'&end='+(customTime[1]/1000)") Search
    hr
    router-view
</template>

<script>
import DatePicker from 'vue2-datepicker'

export default {
  name: 'app',
  components: { DatePicker },
  methods: {
    checkDisabled (date) {
      return date > new Date()
    }
  },
  data () {
    return {
      serverID: '',
      customTime: [null, null],
      customEnabled: false
    }
  },
  created () {
    this.serverID = this.$router.history.current.params.serverID
    if (/^\d+$/.test(this.$router.history.current.query.start) && /^\d+$/.test(this.$router.history.current.query.end)) {
      this.customTime = [this.$router.history.current.query.start * 1000, this.$router.history.current.query.end * 1000]
      this.customEnabled = true
    }
    if (this.$router.history.current.name === 'custom') this.customEnabled = true
  }
}
</script>

<style lang="sass">
@import './assets/sass/components/index_elements'
@import './assets/sass/components/datepicker_style'
@import 'vue2-datepicker/scss/index.scss'

#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  margin: 0
  padding: 0
  position: relative
  height: 100%
</style>
