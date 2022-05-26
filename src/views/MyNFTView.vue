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
          <img :src="item.data.image" width="250" class="w-[250px]" />
        </RouterLink>
      </div>
      <div v-else class="opacity-50 text-xl">No NFTs found.</div>
    </div>
    <div v-else>
      <ButtonPrimary @click="handleConnectWallet">CONNECT WALLET</ButtonPrimary>
    </div>
  </div>
</template>
