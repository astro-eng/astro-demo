<script>
import { RouterLink } from "vue-router";
import NFTOverview from "@/components/NFTOverview.vue";
import NFTReading from "@/components/NFTReading.vue";
import VideoOrder from "@/components/VideoOrder.vue";
export default {
  components: { RouterLink, NFTOverview, NFTReading, VideoOrder },
  data() {
    return {
      currentTab: "overview",
    };
  },
  methods: {},
};
</script>

<template>
  <div
    class="
      fixed
      w-screen
      h-screen
      top-0
      left-0
      z-50
      overflow-auto
      scrollbar-clear
      bg-blackAstro
      hide-vertical-scrollbar
    "
  >
    <RouterLink
      to="/my-nft"
      class="fixed top-8 right-5 lg:top-14 lg:right-[60px] z-[999]"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        v-bind="$attrs"
      >
        <path
          d="M1.5 20C1.5 9.78273 9.78273 1.5 20 1.5C30.2173 1.5 38.5 9.78273 38.5 20C38.5 30.2173 30.2173 38.5 20 38.5C9.78273 38.5 1.5 30.2173 1.5 20Z"
          stroke="currentColor"
          stroke-width="3"
        />
        <path
          d="M30 12.0143L27.9857 10L20 17.9857L12.0143 10L10 12.0143L17.9857 20L10 27.9857L12.0143 30L20 22.0143L27.9857 30L30 27.9857L22.0143 20L30 12.0143Z"
          fill="currentColor"
        />
      </svg>
    </RouterLink>
    <div class="w-[1108px] max-w-full mx-auto px-6">
      <div
        class="
          sticky
          top-0
          left-0
          pt-6
          lg:pt-12
          pb-4
          flex
          items-center
          flex-wrap
          font-raleway font-bold
          text-sm
          z-50
          bg-blackAstro
        "
      >
        <div
          @click="currentTab = 'overview'"
          class="
            rounded-[20px]
            border border-2 border-white border-opacity-40
            bg-white bg-opacity-10
            py-1.5
            px-3.5
            group
            mr-[26px]
            my-3
            cursor-pointer
          "
        >
          <span
            class="opacity-40 group-hover:opacity-100"
            :class="currentTab === 'overview' ? 'opacity-100' : ''"
            >Overview</span
          >
        </div>
        <div
          @click="currentTab = 'card-reading'"
          class="hover:opacity-100 mr-6 mr-8 my-3 cursor-pointer"
          :class="currentTab === 'card-reading' ? 'opacity-100' : 'opacity-40'"
        >
          <span>Card Reading</span>
        </div>
        <div
          @click="currentTab = 'order'"
          class="hover:opacity-100 mr-6 mr-8 my-3 cursor-pointer"
          :class="currentTab === 'order' ? 'opacity-100' : 'opacity-40'"
        >
          <span>Personalize Consultation</span>
        </div>
      </div>
      <div class="pt-14 lg:pt-20 w-full">
        <NFTOverview v-if="currentTab === 'overview'" />
        <NFTReading v-if="currentTab === 'card-reading'" />
        <VideoOrder v-if="currentTab === 'order'" />
      </div>
    </div>
  </div>
</template>
