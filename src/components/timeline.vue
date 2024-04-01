<template lang="pug">
div#visualization
</template>
<script>
import { Timeline } from 'vis-timeline/peer/esm/vis-timeline-graph2d'
import { DataSet } from 'vis-data/peer/esm/vis-data'

export default {
  name: 'timeline',
  methods: {
    draw (data) {
      const container = document.getElementById('visualization')
      const groups = new DataSet(data.groups)
      const items = new DataSet(data.dataSets)

      const options = {
        max: data.properties.endTime,
        min: data.properties.startTime,
        tooltip: {
          followMouse: true
        },
        stack: false,
        locale: 'en_US'
      }

      this.chart = new Timeline(container, items, groups, options)
    },
    destory () {
      if (this.chart !== undefined) {
        this.chart.destroy()
      }
    }
  }
}
</script>

<style lang='sass'>
@import "../assets/sass/libs/vis_timeline_graph2d"
@import "../assets/sass/components/vis_items"
</style>
