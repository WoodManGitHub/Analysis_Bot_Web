<template lang="pug">
  container(type="week" :serverID="$route.params.serverID")
</template>

<script>
import container from './container.vue'

export default {
  name: 'week',
  components: { container }
}
</script>
