<template>
  <div class="wrapper">
    <home-header></home-header>
    <home-content></home-content>
  </div>
  <home-footer></home-footer>
</template>

<script>

import HomeHeader from "@/views/home/HomeHeader";
import HomeContent from "@/views/home/HomeContent";
import HomeFooter from "@/views/home/HomeFooter";

export default {
  name: "ViewsHome",
  components: {HomeFooter, HomeContent, HomeHeader}
}
</script>

<style lang="scss" scoped>
@import "@/style/viriables.scss";
@import "@/style/mixins.scss";

.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .2rem .18rem;
}


</style>
