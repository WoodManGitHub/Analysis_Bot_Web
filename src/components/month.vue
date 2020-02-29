<template lang="pug">
  .root(:class="loading? 'loading':''")
    button.refresh-btn.btn.btn-primary(v-if="!loading" @click="refresh()") Refresh
    loading(v-if="loading")
    error(v-if="error")
    div.container(v-else="loading || error")
      timeline
</template>

<script>
import loading from './loading.vue'
import error from './error.vue'
import timeline from './timeline'

export default {
  name: 'month',
  components: { loading, error, timeline },
  data () {
    return {
      monthTime: null,
      loading: false,
      error: false
    }
  },
  methods: {
    async getMonth () {
      this.error = false
      this.loading = true
      await this.$axios.month(this.$route.params.serverID).then(data => {
        if (data.length === 0) {
          this.error = true
        } else {
          this.monthTime = JSON.parse(data)
        }
      })
      this.loading = false
      return this.monthTime
    },
    refresh () {
      timeline.methods.destory()
      this.getMonth().then(result => {
        timeline.methods.draw(result.data)
      })
    }
  },
  created () {
    this.getMonth().then(result => {
      timeline.methods.draw(result.data)
    })
  },
  watch: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    $route (to, from) {
      this.getMonth().then(result => {
        timeline.methods.draw(result.data)
      })
    }
  }
}
</script>

<style lang="sass">
@import "../assets/sass/libs/visavail"
@import "../assets/sass/components/chart_container"
</style>
