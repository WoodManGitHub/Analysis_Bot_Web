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
  name: 'all',
  components: { loading, error, timeline },
  data () {
    return {
      allTime: null,
      loading: false,
      error: false
    }
  },
  methods: {
    async getAll () {
      this.error = false
      this.loading = true
      await this.$axios.all(this.$route.params.serverID).then(data => {
        if (data.length === 0) {
          this.error = true
        } else {
          this.allTime = JSON.parse(data)
        }
      })
      this.loading = false
      return this.allTime
    },
    refresh () {
      timeline.methods.destory()
      this.getAll().then(result => {
        timeline.methods.draw(result.data)
      })
    }
  },
  created () {
    this.getAll().then(result => {
      timeline.methods.draw(result.data)
    })
  },
  watch: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    $route (to, from) {
      this.getAll().then(result => {
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
