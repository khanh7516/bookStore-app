<template>
  <header>
    <input type="checkbox" id="check" />
    <nav>
      <h1><router-link to="/"> BookStore</router-link></h1>
      <input class="search-bar" type="text" placeholder="  Search..." />
      <ul class="icons">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/book-store/books">Books</router-link></li>
        <li><router-link to="/book-store/about-us">About</router-link></li>
        <li>
          <router-link to="/book-store/orders">
            <i class="fa-solid fa-clock-rotate-left"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/book-store/cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/book-store/user-books">
            <i class="fa-solid fa-book"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-user"></i>
          </router-link>
        </li>
      </ul>
      <label for="check" class="bar">
        <span class="fa fa-bars" id="bars"></span>
        <span class="fa fa-times" id="times"></span>
      </label>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: #004225;
  position: fixed;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  z-index: 100000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

header a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: 0.2rem solid transparent;
}

h1 {
  margin: 0;
  width: 20%;
}

h1 a {
  color: white;
  margin: 0;
  font-size: 2rem;
}

header nav {
  width: 90%;
  margin: auto;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

/* header .menu li:active,
header .menu li:hover {
    
} */

input {
  display: block;
  width: 40%;
  height: 50%;
  border: none;
  outline: none;
  border-radius: 10rem;
}

.search-bar:focus {
  border: 0.3rem solid #ffb000;
  outline: none;
}

.search-bar::placeholder {
  font-size: 1.2rem;
}

.icons {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

i {
  font-size: 1.2rem;
}

nav .bar {
  position: relative;
  margin: auto;
  display: none;
}

nav .bar span {
  position: absolute;
  color: #fff;
  font-size: 1rem;
}

input[type="checkbox"] {
  -webkit-appearance: none;
  display: none;
}

@media (max-width: 1250px) {
  header nav {
    display: block;
    padding: 0;
    background-color: #004225;
    height: auto;
    padding: 1rem;
  }
  nav .search-bar {
    width: 90%;
    margin: auto;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    z-index: 1000;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.4s, opacity 0.4s;
  }

  nav .bar {
    display: block;
    position: absolute;
    top: 40px;
    right: 50px;
    cursor: pointer;
  }
  nav .bar #times {
    display: none;
  }

  #check:checked ~ nav .bar #times {
    display: block;
  }

  #check:checked ~ nav .bar #bars {
    display: none;
  }

  #check:checked ~ nav ul {
    opacity: 1;
    max-height: 20rem;
  }
}
</style>
