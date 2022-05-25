<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  components: { RouterLink, RouterView },
  data() {
    return {
      list: [
        {
          id: 1,
          coverImage: "/src/assets/nft/nft1.jpg",
        },
        {
          id: 2,
          coverImage: "/src/assets/nft/nft2.jpg",
        },
        {
          id: 3,
          coverImage: "/src/assets/nft/nft3.jpg",
        },
        {
          id: 4,
          coverImage: "/src/assets/nft/nft4.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>

<template>
  <div class="mb-[180px] lg:mb-[256px]">
    <heading1 class="max-w-[215px] mb-[100px]">My NFTs</heading1>
    <div class="grid gap-5 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
      <RouterLink
        v-for="item in list"
        :key="item.id"
        :to="`/my-nft/${item.id}`"
        class="
          h-[350px]
          sm:h-[320px]
          rounded-10
          bg-no-repeat bg-center bg-cover
          block
        "
        :style="`background-image: url(${item.coverImage})`"
      ></RouterLink>
    </div>
  </div>
</template>
