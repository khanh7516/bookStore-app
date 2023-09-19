<template>
  <ImageSlider />
  <DisplaySection :sectionName="'Fiction'" :mode="'genres'" :list="FicGenres" />
  <DisplaySection
    :sectionName="'Non-fiction'"
    :mode="'genres'"
    :list="NonFicGenres"
  />
  <DisplaySection
    :link="'/book-store/orders'"
    :sectionName="'Sách mới'"
    :mode="'books'"
    :list="books"
  />

  <DisplaySection
    :link="'/book-store/orders'"
    :sectionName="'Sách Được Đánh Giá Cao'"
    :mode="'books'"
    :list="books"
  />
  <DisplaySection
    :link="'/book-store/orders'"
    :sectionName="'Sách Mua Nhiều Nhất'"
    :mode="'books'"
    :list="books"
  />

  <!-- <BookSliderItem
    :id="books[1].id"
    :name="books[1].name"
    :img="books[1].img"
    :price="books[1].price"
    :rate="books[1].rate"
  /> -->
</template>

<script>
import ImageSlider from "../../../components/widgets/index/imageSlider/ImageSlider.vue";
import DisplaySection from "../../../components/widgets/index/DisplaySection.vue";
// import BookSliderItem from "@/components/widgets/index/displayBooks/BookSliderItem.vue";

import { ref } from "vue";
export default {
  components: {
    // BookSliderItem,
    ImageSlider,
    DisplaySection,
  },
  setup() {
    const books = ref([
      {
        id: 0,
        img: "book1.webp",
        name: "Khách sạn mặt nạ",
        price: "$10.00",
        rate: 4,
      },
      {
        id: 1,
        img: "book2.webp",
        name: "Khách sạn mặt nạ",
        price: "$10.00",
        rate: 4,
      },
      {
        id: 2,
        img: "book3.jpg",
        name: "Khách sạn mặt nạ",
        price: "$10.00",
        rate: 4,
      },
      {
        id: 3,
        img: "book4.jpg",
        name: "Khách sạn mặt nạ",
        price: "$10.00",
        rate: 4,
      },
      {
        id: 4,
        img: "book5.webp",
        name: "Khách sạn mặt nạ",
        price: "$10.00",
        rate: 4,
      },
      {
        id: 5,
        img: "book5.webp",
        name: "Khách sạn mặt nạ",
        price: "$10.00",
        rate: 4,
      },
      {
        id: 6,
        img: "book5.webp",
        name: "Khách sạn mặt nạ",
        price: "$10.00",
        rate: 4,
      },
      {
        id: 7,
        img: "book5.webp",
        name: "Khách sạn mặt nạ",
        price: "$10.00",
        rate: 4,
      },
      {
        id: 8,
        img: "book5.webp",
        name: "Khách sạn mặt nạ",
        price: "$10.00",
        rate: 4,
      },
      {
        id: 9,
        img: "book5.webp",
        name: "Khách sạn mặt nạ",
        price: "$10.00",
        rate: 4,
      },
    ]);

    const FicGenres = [
      "Sci-fi",
      "Fantasy",
      "Mystery",
      "Romance",
      "Historical Fiction",
      "Adventure",
      "Horror",
      "Thriller",
      "Comedy",
      "Satire",
      "Young Adult",
      "Adult",
      "Fairy Tale",
      "Mythology",
      "Western",
      "Sports",
      "Children's Story",
      "Comic",
      "Manga",
      "Musicals",
      "Short story",
      "Poetry",
      "Picture book",
      "Alternate history",
      "Chick-lit",
    ];

    const NonFicGenres = [
      "Journalism",
      "Travel Literature",
      "Biographies",
      "Memoirs and autobiographies",
      "Arts Books",
      "Humor",
      "Language Books",
      "Textbooks",
      "Educational Guides",
      "Parenting and Family",
      "Cookbooks",
      "Travel Guides",
      "Crafts and Hobbies ",
      "Health and Wellness",
      "Business and Economics ",
      "Self-Help",
      "Essay",
      "Politics and Social Sciences ",
      "Science",
      "Religion and Spirituality",
      "Philosophy",
      "History",
      "Math",
      "Technology",
      "Diary",
      "Sports and leisure",
      "Encyclopedia",
      "Dictionary",
    ];

    return {
      books,
      FicGenres,
      NonFicGenres,
    };
  },
};
</script>

<style></style>
