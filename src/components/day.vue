<template lang="pug">
  container(type="day" :serverID="$route.params.serverID")
</template>

<script>
import container from './container.vue'

export default {
  name: 'day',
  components: { container }
}
</script>
