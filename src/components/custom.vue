<template lang="pug">
  container(type="custom" :serverID="$route.params.serverID" :start="start" :end="end")
</template>

<script>
import container from './container.vue'

export default {
  name: 'custom',
  components: { container },
  props: {
    start: {
      type: String,
      required: true
    },
    end: {
      type: String,
      required: true
    }
  }
}
</script>
