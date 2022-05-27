<template>
  <div class="mb-[180px] lg:mb-[256px]">
    <div class="mb-[100px]">
      <heading2 class="mb-7.5">Card Reading</heading2>
      <div class="opacity-60">
        Your reading was created by master astrologer Bill Hajdu. He's performed
        thousands of card readings over the past 30 years. This reading contains
        three positions.
      </div>
    </div>
    <div v-if="!cardContent" class="flex justify-center flex-wrap mb-10">
      <div
        v-for="card in cards"
        :key="card.id"
        class="flex-shrink-0 basis-[254px] mb-20 mx-6"
      >
        <div class="mb-7.5 text-bold text-center">{{ card.position }}</div>
        <div v-if="card.reveal" class="w-full">
          <img
            :src="card.image"
            width="254"
            class="w-full object-cover h-[358px] mb-7.5"
          />
        </div>
        <div
          v-else
          class="
            w-full
            flex
            justify-center
            items-center
            bg-cover bg-center bg-no-repeat bg-[url('/nft/back.png')]
            h-[358px]
            mb-7.5
          "
        >
          <ButtonPrimary @click="card.reveal = true"
            ><span>FLIP CARD</span></ButtonPrimary
          >
        </div>
      </div>
    </div>
    <div v-else class="flex justify-between mb-10">
      <div class="flex-shrink-0 w-[310px] mr-[70px] mb-10">
        <img :src="cardContent.image" width="310" class="w-full" />
      </div>
      <div class="flex-auto flex-shrink-1">
        <heading4 class="mb-7.5">{{ cardContent.title }}</heading4>
        <div class="text-sm fold-bold font-raleway">
          <p
            v-for="(text, index) in cardContent.content"
            :key="index"
            class="mb-5 max-w-full"
          >
            {{ text }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between max-w-full mx-auto">
      <div
        class="
          inline-flex
          items-center
          text-sm
          font-bold font-raleway
          cursor-pointer
        "
        @click="
          showingCard > 0
            ? (() => {
                showingCard -= 1;
                $emit('scrollTop');
              })()
            : $emit('showZodiac')
        "
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          class="mr-1"
        >
          <path
            d="M8.0026 2.6665L8.9426 3.6065L5.2226 7.33317H13.3359V8.6665H5.2226L8.9426 12.3932L8.0026 13.3332L2.66927 7.99984L8.0026 2.6665Z"
            fill="white"
          />
        </svg>
        <span>{{
          showingCard === 0 ? "ZODIAC READING" : "PREVIOUS CARD READING"
        }}</span>
      </div>
      <ButtonPrimary
        :disabled="!flipAll || showingCard === 3"
        @click="handleShowNextCard"
      >
        <span>NEXT CARD MEANINGS</span>
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
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          position: "The East",
          title: "The Sword in the East (Personality)",
          description:
            "The East position represents yourself often times revealing your inner secrets.",
          content: [
            "The Sword indicates you have a hard choice to make. So it could be you find yourself being indecisive of late.",
            "Have you ever tried lifting a real sword? It’s freakin’ heavy. The Sword is here to remind you that the hardest part about making a decision is facing the fact that you have to make it.",
            "So stop avoiding it. Lift that big ass sword. And once you’ve taken aim, that’s it, the hard part is over. Gravity will take care of the rest. Sure, there’s no turning back. As your sword falls, there might even be some collateral damage. But at least you’re no longer burdened.",
          ],
          image: "/nft/sword.png",
          reveal: false,
          id: 1,
        },
        {
          position: "The Center",
          title: "Ducks are in your Center (Burning Question)",
          description:
            "Sentry card represents the central theme of your reading.",
          content: [
            "These ducks are a couple. They’re in it together for life. The question you’ve been asking yourself have to do with a partner, in love or at work. It seems like one of you want to commit. If you’ve met someone new, or have started a partnership in business, the Ducks suggest your duo will endure. Like the Samurai, this partnership is built on unwavering trust and loyalty.",
            "Or, maybe these ducks are besties. A long-lost friend might have gotten in touch again, and you’re wondering whether you should renew the bond, or to keep a friendly distance. It’s your call. The Ducks seem to be quacking for a night out and drinks at the bar.",
          ],
          image: "/nft/ducks.png",
          reveal: false,
          id: 2,
        },
        {
          position: "The North",
          title: "Water is in your North (Longterm Resolution)",
          description: "The north position represent your long-term future.",
          content: [
            "Water represents communication, short travel, and healing. What do all these things have in common? They all require back and forth. Good flow.",
            "You got great flow, because Water loves being in the North, the upper position, from where it can rush down, powering everything on its way. If there are things that need communicating, you will be able to make them crystal clear, while also impressing others with your ability to keep the conversation moving productively.",
            "A weekend trip will rejuvenate you. And if you’ve been in disagreement with someone, you might find yourself having an uncanny ability to listen and find common ground. Remember, there’s no nook or cranny that water can’t flow into and give life.",
          ],
          image: "/nft/water.png",
          reveal: false,
          id: 3,
        },
      ],
      showingCard: 0,
    };
  },
  computed: {
    flipAll() {
      return !this.cards.find((item) => !item.reveal);
    },

    cardContent() {
      return this.cards.find((item) => item.id === this.showingCard);
    },
  },
  methods: {
    handleShowNextCard() {
      if (this.showingCard < 3) {
        this.showingCard += 1;
        this.$emit("scrollTop");
      }
    },
  },
};
</script>
<style lang="postcss" scoped>
</style>
