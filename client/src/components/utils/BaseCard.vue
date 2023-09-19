<template>
  <div class="card">
    <slot> </slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border-radius: 0.5rem;

  padding: 1rem;
  margin: 2rem auto;
  max-width: 65%;
}
</style>
