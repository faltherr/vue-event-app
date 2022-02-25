<template>
  <div>
    <h1>Oops!</h1>
    <h3>The {{ resource }} you are looking for does not exist</h3>
    <router-link :to="{ name: 'event-list' }">Return home</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page'
    },
  },
}
</script>

