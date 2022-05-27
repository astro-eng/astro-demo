<script>
import { useWallet } from "@/stores/wallet";

export default {
  setup() {
    const wallet = useWallet();
    return { wallet };
  },
  created() {
    this.wallet.$subscribe((_, state) => {
      console.log(
        "🚀 ~ file: HomeView.vue ~ line 11 ~ this.wallet.$subscribe ~ state",
        state.publicKey
      );
      if (state.publicKey) {
        this.$router.push("/nft-detail");
      }
    });
  },
};
</script>

<template>
  <div class="flex justify-center items-center w-full h-full">
    <div
      class="
        w-full
        h-full
        md:w-[800px] md:h-[285px]
        relative
        pt-[150px]
        md:pt-[0px]
      "
    >
      <div class="background w-full h-full absolute top-0 left-0"></div>
      <div
        class="
          w-full
          h-full
          md:w-[800px] md:h-[285px]
          flex
          justify-items-center
          content-between
          flex-col
        "
      >
        <Heading1 class="text-center">
          Get free readings<br />
          in the Astroverse
        </Heading1>
        <p class="text-center mt-[30px] opacity-50 text-sm">
          Connect your wallet to reveal the fortune embedded <br />
          within your NFT
        </p>
        <div class="flex justify-center mt-[60px]">
          <button
            class="
              py-2.5
              px-4
              rounded-[3px]
              bg-white bg-opacity-10
              border border-white border-opacity-20
              flex
              items-center
              justify-between
              w-[300px]
              text-raleway text-sm
              cursor-pointer
              hover:border-opacity-100
            "
            @click="wallet.connectWallet"
          >
            <span class="opacity-50">Connect your Phantom Wallet</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.background {
  background: linear-gradient(
    105.12deg,
    #28ffbf 21.27%,
    #ff00e4 67.16%,
    #7b61ff 108.26%
  );
  opacity: 0.2;
  filter: blur(100px);
  border-radius: 10px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
</style>