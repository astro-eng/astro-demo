<script>
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
    Form,
  },
  methods: {
    async click() {
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

<template>
  <div class="py-20">
    <Form />
  </div>
</template>
