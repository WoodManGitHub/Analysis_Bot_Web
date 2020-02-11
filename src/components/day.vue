<template lang="pug">
  .root(:class="loading? 'loading':''")
    button.refresh-btn.btn.btn-primary(v-if="!loading" @click="refresh()") Refresh
    loading(v-if="loading")
    error(v-if="error")
    div.container(v-else="loading || error")
      div.col-md-12
        #visavail_container.visavail(style="overflow: hidden;")
          p#visavail_graph
</template>

<script>
import loading from "./loading.vue";
import error from "./error.vue";
import * as visavail from "../assets/js/visavail";

const options = {
  id_div_container: "visavail_container",
  id_div_graph: "visavail_graph",
  icon: {
    class_has_data: "fas fa-fw fa-check",
    class_has_no_data: "fas fa-fw fa-times"
  },
  custom_categories: true,
  zoom: {
    enabled: true
  },
  sub_chart: {
    enabled: true,
    height: 150,
    graph: { enabled: "" }
  },
  tooltip: {
    height: 10,
    position: "overlay",
    left_spacing: 20
  },
  custom_time_format: {
    format_millisecond: ".%L",
    format_second: ":%S",
    format_minute: "%H:%M",
    format_hour: "%I %p",
    format_day: "%a %d",
    format_week: "%b %d",
    format_month: "%B",
    format_year: "%Y"
  },
  responsive: {
    enabled: true
  }
};

export default {
  name: "day",
  components: { loading, error },
  data() {
    return {
      dayTime: null,
      loading: false,
      error: false,
      chart: null
    };
  },
  methods: {
    async getDay() {
      this.error = false;
      this.loading = true;
      await this.axios
        .get(`http://localhost:8080/day/${this.$route.params.serverID}`)
        .then(data => {
          if (data.data.data.length == 0) {
            this.error = true;
          } else {
            this.dayTime = data.data;
          }
        });
      this.loading = false;
    },
    refresh() {
      this.chart.destroy();
      this.getDay().then(result => {
        this.chart = visavail.generate(options, this.dayTime.data);
      });
    }
  },
  created() {
    this.getDay().then(result => {
      this.chart = visavail.generate(options, this.dayTime.data);
    });
  },
  watch: {
    $route(to, from) {
      this.getDay().then(result => {
        this.chart = visavail.generate(options, this.dayTime.data);
      });
    }
  }
};
</script>

<style lang="sass">
@import "../assets/sass/libs/visavail"
@import "../assets/sass/components/chart_container"
</style>
