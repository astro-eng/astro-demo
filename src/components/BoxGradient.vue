<template>
  <div
    v-bind="$attrs"
    class="
      relative
      bg-clip-padding
      border border-[3px] border-transparent
      bg-blackAstro
      rounded-10
      box-border
      before:content-['']
      before:absolute
      before:left-0
      before:top-0
      before:right-0
      before:bottom-0
      before:-z-[1]
      before:-m-[3px]
      before:rounded-10
      gradient-box-cpn
    "
    @click="$emit('click')"
  >
    <slot></slot>
  </div>
</template>
<script setup>
</script>
<style lang="postcss" scoped>
.gradient-box-cpn:before {
  background: linear-gradient(270deg, #7b61ff 0%, #ff00e4 48.56%, #f73a3c 100%);
}
</style>


<script setup>
</script>
<style lang="postcss" scoped>
</style>
