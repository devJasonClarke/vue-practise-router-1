<template>
  <TheNavigation />
  <router-view> </router-view>
</template>
<script>
import gsap from "gsap";
import TheNavigation from "@/components/TheNavigation";
export default {
  components: {
    TheNavigation,
  },
  methods: {
    beforeEnter(el) {
      gsap.set(el, {
        y: 250,
        opacity: 0,
      });
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 0.5,
        y: 0,
        opacity: 1,
        onComplete: done,
      });
    },
  },
};
</script>

<style lang="scss">
#1 {
  background-color: royalblue;
  height: 200px;
}
#2 {
  background-color: lightpink;
}
#3 {
  background-color: lavenderblush;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
