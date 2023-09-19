<template>
  <swiper-container
    class="gallery"
    navigation="true"
    pagination="true"
    autoplay-delay="6000"
    autoplay-disable-on-interaction="false"
    :slides-per-view="slidesPerView"
    :slides-per-group="slidesPerGroup"
    space-between="5"
    loop="true"
  >
    <swiper-slide v-for="book in books" :key="book.id">
      <BookSliderItem
        :id="book.id"
        :name="book.name"
        :img="book.img"
        :price="book.price"
        :rate="book.rate"
      />
    </swiper-slide>
  </swiper-container>
</template>

<script>
import BookSliderItem from "./BookSliderItem.vue";

import { ref, onMounted, onBeforeUnmount } from "vue";
export default {
  components: {
    BookSliderItem,
  },
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const slidesPerView = ref(5); // Số lượng slides hiển thị ban đầu
    const slidesPerGroup = ref(5); // Số lượng slides trong mỗi nhóm

    const updateSwiperOptions = () => {
      // Kiểm tra chiều rộng màn hình và cập nhật tùy chọn Swiper
      if (window.innerWidth > 1500) {
        slidesPerView.value = 5;
        slidesPerGroup.value = 5;
      } else if (window.innerWidth > 1000) {
        slidesPerView.value = 3;
        slidesPerGroup.value = 3;
      } else if (window.innerWidth > 750) {
        slidesPerView.value = 2;
        slidesPerGroup.value = 2;
      } else {
        slidesPerView.value = 1;
        slidesPerGroup.value = 1;
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
      slidesPerGroup,
    };
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 0;
}
</style>
