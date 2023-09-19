<template>
  <swiper-container
    autoplay-delay="3000"
    :slides-per-view="slidesPerView"
    space-between="10"
    loop="true"
  >
    <GenreSliderItem
      v-for="(genre, index) in genres"
      :key="index"
      :id="index"
      :genre="genre"
      :type="type"
    />
  </swiper-container>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import GenreSliderItem from "./GenreItem.vue";
export default {
  components: {
    GenreSliderItem,
  },
  props: {
    genres: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  setup() {
    const slidesPerView = ref(5); // Số lượng slides hiển thị ban đầu
    const updateSwiperOptions = () => {
      // Kiểm tra chiều rộng màn hình và cập nhật tùy chọn Swiper
      if (window.innerWidth < 1000) {
        slidesPerView.value = 1;
      } else {
        slidesPerView.value = 5;
      }
    };

    onMounted(() => {
      updateSwiperOptions();
      window.addEventListener("resize", updateSwiperOptions);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateSwiperOptions);
    });

    return {
      slidesPerView,
    };
  },
};
</script>

<style></style>
