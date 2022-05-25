<template>
  <button
    v-bind="$attrs"
    class="
      py-2
      px-4
      leading-[22px]
      md:leading-4
      bg-white bg-opacity-10
      md:text-sm
      text-white
      border-0
      font-raleway font-bold
      rounded-md
    "
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
<script setup>
</script>
<style lang="postcss" scoped>
</style>
