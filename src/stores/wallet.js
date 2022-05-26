// @ts-check
import { getProvider } from '../utils/helpers';
import { defineStore } from 'pinia';
import axios from 'axios';
import { Connection as MpConnection, programs } from '@metaplex/js';

export const useWallet = defineStore('wallet', {
  state: () => {
    return {
      connected: false,
      publicKey: '',
      provider: null,
      tokens: [],
    };
  },
  actions: {
    connectWallet() {
      this.provider = getProvider();

      if (!this.provider) {
        return;
      }

      this.provider.connect({ onlyIfTrusted: false }).catch((err) => {
        // fail silently
      });

      this.provider.on('connect', (publicKey) => {
        if (!this.publicKey) {
          this.publicKey = publicKey;
          this.connected = true;
          this.getTokens();
        }
        console.log('Connected wallet!');
      });
      this.provider.on('disconnect', () => {
        this.publicKey = null;
        this.connected = false;
        this.tokens = [];
        console.log('Disconnected wallet!');
      });
      this.provider.on('accountChanged', (publicKey) => {
        this.publicKey = publicKey;

        if (publicKey) {
          console.log(
            '[accountChanged] Switched account to ' + publicKey?.toBase58()
          );
        } else {
          console.log('[accountChanged] Switched unknown account');
          // In this case, dapps could not to anything, or,
          // Only re-connecting to the new account if it is trusted
          // this.provider.connect({ onlyIfTrusted: true }).catch((err) => {
          //   // fail silently
          // });
          // Or, always trying to reconnect
          this.provider
            .connect()
            .then(() =>
              console.log('[accountChanged] Reconnected successfully')
            )
            .catch((err) => {
              console.log(
                '[accountChanged] Failed to re-connect: ' + err.message
              );
            });
        }
      });
    },
    async getTokens() {
      try {
        const {
          metadata: { Metadata },
        } = programs;
        const mpConnection = new MpConnection('devnet');
        const ownedMetadata = await Metadata.findDataByOwner(
          mpConnection,
          this.publicKey
        );
        console.log(
          '🚀 ~ file: wallet.js ~ line 80 ~ getTokens ~ ownedMetadata',
          ownedMetadata
        );

        const tokens = [];

        for (let index = 0; index < ownedMetadata.length; index++) {
          const metadataUrl = ownedMetadata[index].data.uri;
          const { data } = await axios.get(metadataUrl);
          tokens.push({ metadataUrl, data, mint: ownedMetadata[index].mint });
        }

        this.tokens = tokens;
        console.log(
          '🚀 ~ file: wallet.js ~ line 90 ~ getTokens ~ this.tokens',
          tokens
        );
      } catch (err) {
        console.warn('[error] getTokens: ' + JSON.stringify(err));
      }
    },
  },
});
