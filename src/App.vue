<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import FooterMini from "@/components/FooterMini.vue";

export default {
  components: { RouterLink, Header, RouterView, FooterMini },
};
</script>

<template>
  <div class="h-screen">
    <div
      class="min-h-screen w-[1080px] max-w-full mx-auto flex flex-wrap relative"
    >
      <Header />
      <div
        class="
          px-6
          md:px-10
          min-h-[calc(100vh-110px)]
          flex-auto flex-grow-0
          w-full
          mx-auto
          mt-20
          lg:mt-0
        "
      >
        <div class="max-w-full pt-10">
          <RouterView />
        </div>
      </div>
    </div>
    <FooterMini></FooterMini>
  </div>
</template>

<style>
</style>
