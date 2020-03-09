<template lang="pug">
  .root(:class="loading? 'loading':''")
    button.refresh-btn.btn.btn-color(v-if="!loading" @click="refresh()") Refresh
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
  name: 'container',
  components: { loading, error, timeline },
  data () {
    return {
      timeData: null,
      loading: false,
      error: false
    }
  },
  props: {
    type: {
      type: String,
      required: true
    },
    serverID: {
      type: String,
      required: true
    }
  },
  methods: {
    async get () {
      this.error = false
      this.loading = true
      await this.$axios.get(this.type, this.serverID).then(result => {
        const timeData = JSON.parse(result)
        if (timeData.data.length === 0) {
          this.error = true
        } else {
          this.timeData = timeData.data
        }
      })
      this.loading = false
      return this.timeData
    },
    refresh () {
      timeline.methods.destory()
      this.get().then(result => {
        timeline.methods.draw(result)
      })
    }
  },
  created () {
    this.get().then(result => {
      timeline.methods.draw(result)
    })
  },
  watch: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    $route (to, from) {
      this.refresh()
    }
  }
}
</script>

<style lang="sass">
@import "../assets/sass/components/chart_container"
</style>
