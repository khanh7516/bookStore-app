<template>
  <base-card>
    <section>
      <div class="section-header">
        <h4>{{ sectionName }}</h4>
        <router-link v-if="link" :to="link" class="link">view all</router-link>
      </div>
      <BooksSlider v-if="mode === 'books'" :books="list" />
      <GenresSlider v-if="mode === 'genres'" :genres="list" :type="sectionName === 'Fiction' ? 'fiction' : 'non-fiction'" />
      
    </section>
  </base-card>
</template>

<script>
import BooksSlider from "@/components/widgets/index/displayBooks/BooksSlider.vue";
import GenresSlider from "@/components/widgets/index/displayGenres/GenresSlider.vue";
export default {
  components: {
    BooksSlider,
    GenresSlider,
  },
  props: {
    sectionName: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
      default: null,
    },
    mode: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h4 {
  color: #004225;
  font-size: 1.5rem;
}

.link {
  text-decoration: none;
  color: #183d3d;
  transition: 0.4s ease-out;
}

.link:hover {
  color: #ffb000;
}
</style>
