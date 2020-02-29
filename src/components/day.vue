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
import timeline from './timeline.vue'

export default {
  name: 'day',
  components: { loading, error, timeline },
  data () {
    return {
      dayTime: null,
      loading: false,
      error: false
    }
  },
  methods: {
    async getDay () {
      this.error = false
      this.loading = true
      await this.$axios.day(this.$route.params.serverID).then(data => {
        if (data.length === 0) {
          this.error = true
        } else {
          this.dayTime = JSON.parse(data)
        }
      })
      this.loading = false
      return this.dayTime
    },
    refresh () {
      timeline.methods.destory()
      this.getDay().then(result => {
        timeline.methods.draw(result.data)
      })
    }
  },
  created () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.getDay().then(result => {
      timeline.methods.draw(result.data)
    })
  },
  watch: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    $route (to, from) {
      this.getDay().then(result => {
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
