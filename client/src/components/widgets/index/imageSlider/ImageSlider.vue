<template>
  <swiper-container
    navigation="true"
    pagination="true"
    autoplay-delay="6000"
    autoplay-disable-on-interaction="false"
    effect="fade"
    loop="true"
  >
    <ImageSliderItem
      v-for="image in images"
      :key="image.id"
      :id="image.id"
      :title="image.title"
      :subtitle="image.subtitle"
      :detail="image.detail"
      :imagePath="image.backgroundImage"
      :mode="image.mode"
    />
  </swiper-container>
</template>

<script>
import "swiper/css";

import { ref } from "vue";
import ImageSliderItem from "./ImageSliderItem.vue";
export default {
  components: {
    ImageSliderItem,
  },
  setup() {
    const images = ref([
      {
        id: 0,
        title: "SÁCH NƯỚC NGOÀI",
        subtitle: null,
        detail:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.",
        backgroundImage: "nuocngoai.avif",
        mode: "normal",
      },
      {
        id: 1,
        title: "SÁCH THIẾU NHI",
        subtitle: null,
        detail:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.",
        backgroundImage: "thieunhi.jpg",
        mode: "white",
      },
      {
        id: 2,
        title: "MANGA",
        subtitle: null,
        detail:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.",
        backgroundImage: "manga.jpg",
        mode: "black",
      },
    ]);

    return {
      images,
    };
  },
};
</script>

<style scoped>
swiper-container {
  width: 100%;
  height: 500px;
}

/* swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
} */
</style>
