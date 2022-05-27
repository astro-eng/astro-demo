<script>
import { RouterLink } from "vue-router";
import { useWallet } from "@/stores/wallet";
import NFTOverview from "@/components/NFTOverview.vue";
import NFTReading from "@/components/NFTReading.vue";
import ZodiacReading from "@/components/ZodiacReading.vue";
import VideoOrder from "@/components/VideoOrder.vue";
export default {
  components: {
    RouterLink,
    NFTOverview,
    NFTReading,
    VideoOrder,
    ZodiacReading,
  },
  setup() {
    const wallet = useWallet();

    return { wallet };
  },

  data() {
    return {
      currentTab: "overview",
    };
  },
  methods: {
    scrollToTop() {
      this.$refs.container.scrollTop = 0;
    },
    async handleClosePopup() {
      try {
        await this.wallet.disconnect();
      } catch (error) {
        console.log("Disconnect wallet error:", error);
      }

      this.$router.push("/");
    },
  },
  computed: {},
  watch: {
    // whenever question changes, this function will run
    currentTab() {
      this.scrollToTop();
    },
  },
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
    ref="container"
  >
    <div
      @click="handleClosePopup"
      class="fixed top-8 right-5 lg:right-[60px] z-[999] cursor-pointer"
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
    </div>
    <div class="w-[1108px] max-w-full mx-auto px-6">
      <div
        class="
          sticky
          top-0
          left-0
          pt-8
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
            border border-2 border-white border-opacity-[0]
            py-1.5
            px-3.5
            group
            mr-[26px]
            my-3
            cursor-pointer
          "
          :class="
            currentTab === 'overview'
              ? `!border-opacity-40 bg-white bg-opacity-10`
              : 'opacity-40'
          "
        >
          <span>Overview</span>
        </div>
        <div
          @click="currentTab = 'zodiac'"
          class="
            rounded-[20px]
            border border-2 border-white border-opacity-[0]
            py-1.5
            px-3.5
            group
            mr-[26px]
            my-3
            cursor-pointer
          "
          :class="
            currentTab === 'zodiac'
              ? `!border-opacity-40 bg-white bg-opacity-10`
              : 'opacity-40'
          "
        >
          <span>Zodiac</span>
        </div>
        <div
          @click="currentTab = 'card-reading'"
          class="
            rounded-[20px]
            border border-2 border-white border-opacity-[0]
            py-1.5
            px-3.5
            group
            mr-[26px]
            my-3
            cursor-pointer
          "
          :class="
            currentTab === 'card-reading'
              ? `!border-opacity-40 bg-white bg-opacity-10`
              : 'opacity-40'
          "
        >
          <span>Card Reading</span>
        </div>
        <div
          @click="currentTab = 'order'"
          class="
            rounded-[20px]
            border border-2 border-white border-opacity-[0]
            py-1.5
            px-3.5
            group
            mr-[26px]
            my-3
            cursor-pointer
          "
          :class="
            currentTab === 'order'
              ? `!border-opacity-40 bg-white bg-opacity-10`
              : 'opacity-40'
          "
        >
          <span>Meet Your Astrologer</span>
        </div>
      </div>
      <div class="pt-12 w-full">
        <NFTOverview
          v-show="currentTab === 'overview'"
          @show-zodiac="currentTab = 'zodiac'"
        />
        <ZodiacReading
          v-show="currentTab === 'zodiac'"
          @show-overview="currentTab = 'overview'"
          @show-card-reading="currentTab = 'card-reading'"
        />
        <NFTReading
          v-show="currentTab === 'card-reading'"
          @show-zodiac="currentTab = 'zodiac'"
          @scroll-top="scrollToTop"
        />
        <VideoOrder v-show="currentTab === 'order'" @scroll-top="scrollToTop" />
      </div>
    </div>
  </div>
</template>
