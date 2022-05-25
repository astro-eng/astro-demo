<template>
  <button
    v-bind="$attrs"
    class="
      text-sm
      font-bold font-raleway
      rounded-[5px]
      uppercase
      hover:cursor-pointer hover:text-white
      disabled:cursor-not-allowed
      disabled:opacity-40
      disabled:pointer-events-none
      text-black
      p-0.5
      bg-white bg-opacity-40
      group
    "
    @click="$emit('click')"
  >
    <span
      class="
        inline-flex
        items-center
        py-1.5
        px-4
        bg-white
        rounded-[5px]
        group-hover:bg-black group-hover:bg-opacity-50 group-hover:relative
        text-center
        w-full
        justify-center
      "
    >
      <slot />
    </span>
  </button>
</template>
<script setup>
</script>
<style lang="postcss" scoped>
button:hover:not(:disabled) {
  position: relative;
}
button:hover:not(:disabled):before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 5px;
  background: linear-gradient(270deg, #7b61ff 0%, #ff00e4 48.56%, #f73a3c 100%);
}
</style>
