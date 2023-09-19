<template>
  <div class="content">
    <img :src="imgPath" alt="" />
    <h5>{{ name }}</h5>
    <span>{{ price }}</span>
    <ul>
      <li v-for="i in rate" :key="i">
        <i class="fa fa-star checked"></i>
      </li>
    </ul>
    <button :class="`buy-${id}`">Buy Now</button>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    img: String,
    price: String,
    rate: Number,
  },
  computed: {
    imgPath() {
      return require(`@/assets/bookImgs/${this.img}`);
    },
  },
};
</script>

<style scoped>
.content {
  box-sizing: border-box;
  text-align: center;
  border-radius: 0.8rem;
  cursor: pointer;
  padding-top: 0.3rem;
  /* box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); */
  transition: 0.4s;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: translate(0px, -8px);
}

h5 {
  text-align: center;
  font-size: 1rem;
  margin: 0.5rem 0;
  padding-top: 0.3rem;
  color: #183d3d;
}

img {
  text-align: center;
  margin: 0 auto;
  display: block;
}

span {
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: #183d3d;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: #ffb000;
}
.fa {
  font-size: 1rem;
  transition: 0.4s;
}

button {
  text-align: center;
  font-size: 0.8rem;
  color: #fff;
  padding: 0.5rem;
  outline: none;
  border: 0;
  cursor: pointer;
  margin-top: 5px;
  border-bottom-right-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  background: #183d3d;
  width: 100%;
}

</style>
