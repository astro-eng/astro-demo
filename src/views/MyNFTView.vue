<script>
import { RouterLink, RouterView } from "vue-router";
import { useWallet } from "@/stores/wallet";

export default {
  components: { RouterLink, RouterView },
  data() {
    return {};
  },
  methods: {
    handleConnectWallet() {
      this.wallet.connectWallet();
    },
  },
  setup() {
    const wallet = useWallet();

    return { wallet };
  },
};
</script>

<template>
  <div class="mb-[180px] lg:mb-[256px]">
    <heading1 class="max-w-[215px] mb-[100px]">My NFTs</heading1>

    <div v-if="!!wallet.publicKey">
      <div
        v-if="!!wallet.tokens.length"
        class="flex items-center gap-10 flex-wrap"
      >
        <RouterLink
          v-for="item in wallet.tokens"
          :key="item.mint"
          :to="`/my-nft/${item.mint}`"
          class="rounded-10 bg-no-repeat bg-center bg-cover block"
        >
          <img :src="item.parsedMetaData.image" width="250" class="w-[250px]" />
        </RouterLink>
      </div>
      <div v-if="wallet.loadingNFT">
        <svg
          class="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      <div
        v-if="!wallet.tokens.length && !wallet.loadingNFT"
        class="opacity-50 text-xl"
      >
        No NFTs found.
      </div>
    </div>
    <div v-else>
      <ButtonPrimary @click="handleConnectWallet">CONNECT WALLET</ButtonPrimary>
    </div>
  </div>
</template>
