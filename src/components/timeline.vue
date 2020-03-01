<template lang="pug">
  div#visualization
</template>
<script>
import { DataSet, Timeline } from 'vis-timeline'

export default {
  name: 'timeline',
  methods: {
    draw (data) {
      console.log(data)
      // DOM element where the Timeline will be attached
      const container = document.getElementById('visualization')

      const groups = new DataSet([
        {
          id: 'cute_panda',
          content: 'cute_panda'
        },
        {
          id: 'bill96012',
          content: 'bill96012'
        }
      ])

      // Create a DataSet (allows two way data-binding)
      const items = new DataSet([
        {
          content: 'Sun',
          start: '2020-02-28 06:00:00',
          end: '2020-02-28 18:00:00',
          type: 'background',
          className: 'sun'
        },
        { content: '', start: '2020-02-28 00:00:00', end: '2020-02-28 00:25:23', group: 'bill96012', className: 'online', title: 'Online<br>00:00:00 - 00:25:23' },
        { content: '', start: '2020-02-28 00:25:23', end: '2020-02-28 12:14:14', group: 'bill96012', className: 'offline', title: 'Offline<br>00:25:23 - 12:14:14' },

        { content: '', start: '2020-02-28 00:00:00', end: '2020-02-28 01:11:54', group: 'cute_panda', className: 'online', title: 'Online<br>00:00:00 - 01:11:54' },
        { content: '', start: '2020-02-28 01:11:54', end: '2020-02-28 01:12:58', group: 'cute_panda', className: 'offline', title: 'Offline<br>01:11:54 - 01:12:58' },
        { content: '', start: '2020-02-28 01:12:58', end: '2020-02-28 05:11:15', group: 'cute_panda', className: 'online', title: 'Online<br>01:12:58 - 05:11:15' },
        { content: '', start: '2020-02-28 05:11:15', end: '2020-02-28 12:14:15', group: 'cute_panda', className: 'offline', title: 'Offline<br>05:11:15 - 12:14:15' }
      ])

      // Configuration for the Timeline
      const options = {
        max: '2020-02-29 00:00:00',
        min: '2020-02-28 00:00:00',
        start: '2020-02-28 00:00:00',
        zoomMax: 86400000,
        tooltip: {
          followMouse: true
        },
        stack: false
      }

      // Create a Timeline
      this.chart = new Timeline(container, items, groups, options)
      // this.chart = visavail.generate(options, data)
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
