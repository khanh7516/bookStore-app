<template>
  <swiper-slide :class="type">
    <p>{{ genre }}</p>
  </swiper-slide>
</template>

<script>
export default {
  props: {
    genre: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
swiper-slide {
  height: 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.fiction {
  background-color: #004225;
  color: white;
}

.non-fiction {
  background-color: white;
  color: #004225;
}

p {
  font-weight: 300;
  font-size: 1rem;
}
</style>
