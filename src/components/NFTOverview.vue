<template>
  <div class="mb-[180px] lg:mb-[256px]">
    <heading2 class="max-w-[215px] mb-7.5">Overview</heading2>
    <div class="flex flex-wrap">
      <div
        class="
          flex-shrink-0
          w-[400px]
          h-[400px]
          bg-center bg-cover bg-no-repeat
          rounded-xl
          mr-7.5
          mb-10
        "
      >
        <img :src="imageUrl" width="400" class="w-full" />
      </div>
      <div class="flex-auto">
        <heading4>Astroverse Gen 1</heading4>
        <heading1 class="text-gradient mb-7.5 inline-block">#3651</heading1>
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-3 mb-20">
          <div
            v-for="item in properties"
            :key="item.title"
            class="rounded-10 bg-white bg-opacity-10 p-2.5 flex items-center"
          >
            <div
              class="
                h-9
                rounded-[5px]
                bg-white bg-opacity-20 bg-center
                bg-[length:18px_auto]
                bg-no-repeat
                flex-shrink-0
                basis-9
                mr-5
              "
              :style="`background-image: url(${item.icon})`"
            ></div>
            <div>
              <div class="text-sm opacity-50">{{ item.title }}</div>
              <div class="font-raleway font-black leading-5">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <ButtonPrimary class="text-sm" @click="$emit('cardReading')">
            <span>CARD READING</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="ml-1 w-4 h-4"
            >
              <path
                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                fill="currentColor"
              />
            </svg>
          </ButtonPrimary>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  components: { RouterLink },
  props: {
    data: Object,
  },
  data() {
    return {
      properties: [
        { title: "Type", text: "Human", icon: "/icons/human.png" },
        {
          title: "Special",
          text: "Butterfly",
          icon: "/icons/special.png",
        },
        {
          title: "Background",
          text: "Blue",
          icon: "/icons/background.png",
        },
        {
          title: "Headgear",
          text: "None",
          icon: "/icons/headgear.png",
        },
        {
          title: "Outfit",
          text: "Water",
          icon: "/icons/outfit2.png",
        },
        { title: "Hand", text: "Weapon", icon: "/icons/hand.png" },
        { title: "Eyes", text: "Blue", icon: "/icons/eyes.png" },
        { title: "Ears", text: "None", icon: "/icons/ears.png" },
        { title: "Mouth", text: "Happy", icon: "/icons/mouth.png" },
        {
          title: "Hair",
          text: "Dreads Shaved",
          icon: "/icons/hair.png",
        },
        { title: "Neck", text: "Tattoo", icon: "/icons/neck.png" },
        { title: "Face", text: "None", icon: "/icons/face.png" },
      ],
      imageUrl: "/nft/astro-avatar.png",
    };
  },
  methods: {},
};
</script>
<style lang="postcss" scoped>
</style>
