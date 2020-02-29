<template lang="pug">
  div.col-md-12
    #visavail_container.visavail(style="overflow: hidden;")
      p#visavail_graph
</template>
<script>
import * as visavail from '../assets/js/visavail'

const options = {
  id_div_container: 'visavail_container',
  id_div_graph: 'visavail_graph',
  icon: {
    class_has_data: 'fas fa-fw fa-check',
    class_has_no_data: 'fas fa-fw fa-times'
  },
  custom_categories: true,
  zoom: {
    enabled: true
  },
  sub_chart: {
    enabled: true,
    height: 150,
    graph: { enabled: '' }
  },
  tooltip: {
    height: 10,
    position: 'overlay',
    left_spacing: 20
  },
  custom_time_format: {
    format_millisecond: '.%L',
    format_second: ':%S',
    format_minute: '%H:%M',
    format_hour: '%I %p',
    format_day: '%a %d',
    format_week: '%b %d',
    format_month: '%B',
    format_year: '%Y'
  },
  responsive: {
    enabled: true
  }
}

export default {
  name: 'timeline',
  methods: {
    draw (data) {
      this.chart = visavail.generate(options, data)
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
@import "../assets/sass/libs/visavail"
</style>
