<template>
  <header
    class="
      sticky
      top-0
      left-0
      h-[110px]
      bg-blackAstro
      z-50
      justify-between
      items-center
      basis-full
      pt-10
      pl-[50px]
      pr-6
      pb-5
      hidden
      lg:flex
    "
  >
    <div class="basis-[240px] flex-shrink-0">
      <RouterLink to="/">
        <svg width="61" height="28" viewBox="0 0 61 28" fill="none">
          <path
            d="M47.9419 28C47.4299 28 47.0032 27.6757 46.6619 27.0272C46.2523 26.2421 45.6891 25.0986 44.9722 23.5967C44.2554 22.0606 43.4533 20.3539 42.5658 18.4765C41.7124 16.565 40.842 14.6364 39.9545 12.6908C39.1012 10.7451 38.3161 8.93603 37.5993 7.26345C36.9166 5.55674 36.3875 4.17431 36.012 3.11615C35.8755 2.74067 35.756 2.38226 35.6536 2.04092C35.5512 1.69958 35.5 1.46064 35.5 1.3241C35.5 1.01689 35.6024 0.726751 35.8072 0.453679C36.012 0.180604 36.3363 0.0440674 36.78 0.0440674C37.0531 0.0440674 37.3091 0.129403 37.5481 0.300074C37.787 0.436611 37.9406 0.641415 38.0089 0.914488C38.3502 2.00678 38.8281 3.33802 39.4425 4.90819C40.0569 6.44423 40.7396 8.08267 41.4906 9.82352C42.2415 11.5644 43.0095 13.3223 43.7946 15.0973C44.5797 16.8381 45.3307 18.4765 46.0475 20.0126C46.7643 21.5145 47.3958 22.8116 47.9419 23.9039C48.6246 22.5044 49.4268 20.8318 50.3484 18.8861C51.27 16.9064 52.1916 14.8412 53.1133 12.6908C54.069 10.5403 54.9565 8.44108 55.7757 6.39303C56.6291 4.34498 57.3118 2.53586 57.8238 0.965691C58.0286 0.385409 58.4553 0.095268 59.1038 0.095268C59.4451 0.095268 59.7353 0.231805 59.9742 0.504879C60.2132 0.743818 60.3326 1.05103 60.3326 1.4265C60.3326 1.5289 60.2814 1.73371 60.179 2.04092C60.1108 2.34813 59.9572 2.826 59.7182 3.47456C59.2745 4.63512 58.6942 6.05169 57.9774 7.72426C57.2947 9.39684 56.5267 11.1889 55.6733 13.1004C54.8541 15.0119 54.0178 16.8893 53.1645 18.7325C52.3111 20.5758 51.526 22.2484 50.8092 23.7503C50.0924 25.2522 49.5121 26.4469 49.0683 27.3344C48.8635 27.7781 48.4881 28 47.9419 28Z"
            fill="white"
          />
          <path
            d="M12.4419 1.90735e-05C11.9299 1.90735e-05 11.5032 0.324295 11.1619 0.972845C10.7523 1.75793 10.1891 2.90143 9.47224 4.40333C8.75542 5.93937 7.95327 7.64608 7.06578 9.52346C6.21243 11.435 5.342 13.3636 4.45451 15.3092C3.60116 17.2549 2.81607 19.064 2.09925 20.7365C1.41657 22.4433 0.887489 23.8257 0.512013 24.8839C0.375476 25.2593 0.256007 25.6177 0.153604 25.9591C0.0512014 26.3004 0 26.5394 0 26.6759C0 26.9831 0.102403 27.2732 0.307208 27.5463C0.512013 27.8194 0.836288 27.9559 1.28003 27.9559C1.55311 27.9559 1.80911 27.8706 2.04805 27.6999C2.28699 27.5634 2.4406 27.3586 2.50886 27.0855C2.85021 25.9932 3.32809 24.662 3.9425 23.0918C4.55692 21.5558 5.2396 19.9173 5.99055 18.1765C6.74151 16.4356 7.50953 14.6777 8.29461 12.9027C9.0797 11.1619 9.83065 9.52346 10.5475 7.98742C11.2643 6.48552 11.8958 5.18842 12.4419 4.09612C13.1246 5.49562 13.9268 7.1682 14.8484 9.11385C15.77 11.0936 16.6916 13.1588 17.6133 15.3092C18.569 17.4597 19.4565 19.5589 20.2757 21.607C21.1291 23.655 21.8118 25.4641 22.3238 27.0343C22.5286 27.6146 22.9553 27.9047 23.6038 27.9047C23.9451 27.9047 24.2353 27.7682 24.4742 27.4951C24.7132 27.2562 24.8326 26.949 24.8326 26.5735C24.8326 26.4711 24.7814 26.2663 24.679 25.9591C24.6108 25.6519 24.4572 25.174 24.2182 24.5254C23.7745 23.3649 23.1942 21.9483 22.4774 20.2757C21.7947 18.6032 21.0267 16.8111 20.1733 14.8996C19.3541 12.9881 18.5178 11.1107 17.6645 9.26746C16.8111 7.42421 16.026 5.75163 15.3092 4.24973C14.5924 2.74782 14.0121 1.55313 13.5683 0.665636C13.3635 0.221891 12.9881 1.90735e-05 12.4419 1.90735e-05Z"
            fill="white"
          />
        </svg>
      </RouterLink>
    </div>
    <div class="flex justify-between flex-auto">
      <div></div>
      <div v-show="false" class="flex flex-row items-center gap-5">
        <RouterLink to="/my-nft" class="mr-10"
          ><span class="font-bold text-raleway">My NFT</span></RouterLink
        >
        <ButtonPrimary @click="connectWallet">CONNECT WALLET</ButtonPrimary>
      </div>
    </div>
  </header>
</template>
<script>
import { RouterLink } from "vue-router";
import Form from "@/components/Form.vue";
import {
  Connection,
  SystemProgram,
  Transaction,
  clusterApiUrl,
  PublicKey,
} from "@solana/web3.js";
import Wallet from "@project-serum/sol-wallet-adapter";
export const TOKEN_PROGRAM = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";

const createConnectionConfig = (
  clusterApi = clusterApiUrl("devnet"),
  commitment = "confirmed"
) => new Connection(clusterApi, commitment);

const connect = createConnectionConfig(clusterApiUrl("devnet"));

export default {
  components: {
    RouterLink,
  },
  methods: {
    async connectWallet() {
      if (window.solana) {
        const response = await window.solana.connect();
        console.log(
          "🚀 ~ file: HomeView.vue ~ line 16 ~ click ~ response",
          response
        );
        console.log(
          "🚀 ~ file: HomeView.vue ~ line 17 ~ click ~ response",
          response.publicKey.toString()
        );

        const { value: splAccounts } =
          await connect.getParsedTokenAccountsByOwner(
            new PublicKey(response.publicKey.toString()),
            {
              programId: new PublicKey(TOKEN_PROGRAM),
            }
          );

        this.tokens = splAccounts;
        console.log(
          "🚀 ~ file: HomeView.vue ~ line 43 ~ click ~ this.tokens",
          this.tokens
        );
        console.log(
          "🚀 ~ file: HomeView.vue ~ line 43 ~ click ~ this.tokens",
          this.tokens[0].account.owner.toString()
        );
      }

      // let provider = "https://www.sollet.io";

      // // For sollet extension use
      // // provider = window.sollet

      // let wallet = new Wallet(provider);
      // wallet.on("connect", (publicKey) =>
      //   console.log("Connected to " + publicKey.toBase58())
      // );
      // wallet.on("disconnect", () => console.log("Disconnected"));
      // await wallet.connect();
    },
    async disconnect() {
      if (window.solana) {
        console.log(
          "🚀 ~ file: HomeView.vue ~ line 24 ~ disconnect ~ window.solana",
          window.solana
        );
        window.solana.disconnect();
      }
    },
  },
};
</script>
<style lang="postcss" scoped>
</style>
