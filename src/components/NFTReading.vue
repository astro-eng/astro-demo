<template>
  <div class="mb-[180px] lg:mb-[256px]">
    <heading2 class="max-w-[215px] mb-7.5">Card Reading</heading2>
    <div class="opacity-60 mb-[100px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor .
    </div>
    <div class="flex justify-center flex-wrap">
      <div
        v-for="card in cards"
        :key="card.id"
        class="flex-shrink-0 basis-[254px] mb-10 mx-6"
      >
        <div v-if="card.reveal" class="w-full">
          <img
            :src="card.image"
            width="254"
            class="w-full object-cover h-[358px] mb-7.5"
          />
          <div class="text-center text-sm">{{ card.description }}</div>
        </div>
        <div
          v-else
          class="
            w-full
            flex
            justify-center
            items-center
            bg-cover bg-center bg-no-repeat bg-[url('/src/assets/nft/back.png')]
            h-[358px]
          "
        >
          <ButtonPrimary @click="card.reveal = true"
            ><span>FLIP CARD</span></ButtonPrimary
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "First position",
          description: "You got the Green Dragon Card",
          image: "/src/assets/nft/card1.png",
          reveal: false,
          id: 1,
        },
        {
          title: "Center position",
          description: "You got the White Dragon Card",
          image: "/src/assets/nft/card2.png",
          reveal: false,
          id: 2,
        },
        {
          title: "Last position",
          description: "You got the Red Dragon Card",
          image: "/src/assets/nft/card3.png",
          reveal: false,
          id: 3,
        },
      ],
    };
  },
};
</script>
<style lang="postcss" scoped>
</style>
