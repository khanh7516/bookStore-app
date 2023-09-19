<template>
  <TheHeader />
  <div class="content-container">
    <router-view></router-view>
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from "../../components/layout/TheHeader.vue";
import TheFooter from "../../components/layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
.content-container {
  padding-top: 5rem;
}
</style>
