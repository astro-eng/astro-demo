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
      <div class="w-full mx-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
</style>
