import { createRouter, createWebHistory } from "vue-router";

import UserView from "./views/home/UserView.vue";
import IndexView from "./views/home/index/IndexView.vue";
import BookDetailView from "./views/home/books/BookDetailView.vue";
import BookListView from "./views/home/books/BookListView.vue";
import CartView from "./views/home/cart/CartView.vue";
import CheckoutView from "./views/home/cart/CheckoutView.vue";
import UserBooksView from "./views/home/user/UserBooksView.vue";
import UserReadingView from "./views/home/user/UserReadingView.vue";
import UserOrdersView from "./views/home/user/UserOrdersView.vue";
import UserDetailOrderView from "./views/home/user/UserDetailOrderView.vue";
import AboutUsView from "./views/home/us/AboutUsView.vue";
import ContactUsView from "./views/home/us/ContactUsView.vue";
import FAQView from "./views/home/us/FAQView.vue";

import AdminView from "./views/admin/AdminView.vue";


// import NotFoundView from "./views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: "/", redirect: "/book-store/home" },
    {
      path: "/book-store",
      component: UserView,
      children: [
        { path: "", redirect: "/book-store/home" },
        { path: "home", component: IndexView },
        { path: "books", component: BookListView },
        { path: "books/:id", component: BookDetailView, props: true },
        { path: "cart", component: CartView },
        { path: "checkout/:id", component: CheckoutView, props: true },
        { path: "user-books", component: UserBooksView },
        { path: "user-books/:id", component: UserReadingView, props: true },
        { path: "orders", component: UserOrdersView, children: [
            { path: ":id", component: UserDetailOrderView, props: true },
        ] },
        { path: "about-us", component: AboutUsView },
        { path: "contact-us", component: ContactUsView },
        { path: "faq", component: FAQView },
      ],
    },

    { path: "/admin", component: AdminView },
    { path: "/:notFound(.*)", redirect: "/book-store/home" },
  ],
});

export default router;
