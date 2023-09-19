<template>
  <swiper-slide
    :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
    data-swiper-parallax="-23%"
  >
    <div class="content" :class="mode">
      <h3>{{ title }}</h3>
      <h4 v-if="subtitle">{{ subtitle }}</h4>
      <p>
        {{ detail }}
      </p>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: null,
    },
    detail: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String, // Data type for the image path is String
      required: true, // This prop is required
    },
    mode: {
      type: String,
      required: true,
    },
  },
  computed: {
    backgroundImage() {
      return require(`@/assets/sliders/${this.imagePath}`);
    },
  },
};
</script>

<style scoped>
swiper-slide {
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.content {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 60%;
  margin: auto;
  border-radius: 2rem;
  padding: 3rem;
}

.normal {
  color: #004225;
  background-color: white;
}

.white {
  color: white;
  background-color: #004225;
}

.black {
  color: black;
  background-color: white;
}

@media (max-width: 1200px) {
  .content p,
  .content h4 {
    display: none;
  }
}
</style>
