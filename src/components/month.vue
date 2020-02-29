<template lang="pug">
  container(type="month" :serverID="$route.params.serverID")
</template>

<script>
import container from './container.vue'

export default {
  name: 'all',
  components: { container }
}
</script>
