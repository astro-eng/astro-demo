<template>
  <footer>
    <div class="border-t-[1px] border-white border-opacity-20 py-5">
      <div class="flex items-center w-[1080px] max-w-full mx-auto px-10">
        <RouterLink to="/" class="mr-5"
          ><img src="@/assets/logo.png" class="h-5" width="50"
        /></RouterLink>
        <div class="opacity-50 text-sm flex w-full">
          © {{ new Date().getFullYear() }} CoiBoi. All rights reserved. Contact
          us at&nbsp;<b>hello@coiboi.io</b>
        </div>
      </div>
    </div>
  </footer>
</template>
<script >
import { RouterLink } from "vue-router";

export default { components: { RouterLink } };
</script>
<style lang="postcss" scoped>
</style>
