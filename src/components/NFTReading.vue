<template>
  <div class="mb-[180px] lg:mb-[256px]">
    <heading2 class="mb-7.5">{{
      cardContent
        ? `${cardContent.position}: ${cardContent.title}`
        : "Card Reading"
    }}</heading2>
    <div class="opacity-60 mb-[100px]">
      {{
        cardContent
          ? cardContent.description
          : `Your reading was created by master astrologer Bill Hajdu. He's performed
      thousands of card readings over the past 30 years. This reading contains
      three positions.`
      }}
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
        <p
          v-for="(text, index) in cardContent.content"
          :key="index"
          class="mb-5 text-base font-bold font-raleway max-w-full"
        >
          {{ text }}
        </p>
      </div>
    </div>
    <div class="flex items-center justify-between w-[860px] max-w-full mx-auto">
      <div
        class="
          inline-flex
          items-center
          text-sm
          font-bold font-raleway
          cursor-pointer
        "
        @click="showingCard > 0 ? (showingCard -= 1) : $emit('showOverview')"
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
          showingCard === 0 ? "PREVIOUS OVERVIEW" : "PREVIOUS CARD READING"
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
          title: "Heaven",
          description:
            "The East position represents yourself often times revealing your inner secrets.",
          content: [
            "Don’t worry, no one’s dying. The Heaven card means both an end and a beginning. You’re going through a major life change. Are you thinking about leaving your current career to pursue a new one? Breaking up with a longtime partner? Whatever’s rocking your world, Heaven hints your new path will be filled with better things. Whew.",
            "So you might be asking, why am I holding a Jordan on a stick? Once upon a time, there was a buddhist monk who lost one shoe. Instead of feeling bad about it, he took the one that’s left and hung it on a stick. Two shoes, one shoe, no shoe — whatever. Life’s still good. The change you’re going through might seem like a big loss. You’re probably clinging on to the past, and acting a bit possessive. Try hanging up your Jordans. Let them go. It’ll finally begin to feel like Heaven.",
          ],
          image: "/nft/Heaven.png",
          reveal: false,
          id: 1,
        },
        {
          position: "The Center",
          title: "Tortoise",
          description:
            "Sentry card represents the central theme of your reading.",
          content: [
            "The Tortoise represents patience. Success can’t be rushed. Like Karate, you have to earn your stripes before you can kick ass. Learning how not to rush things, or taking it slow and steady, seems to be what your life is all about now. Be like the tortoise. Build a hard shell, and don’t let anyone rattle you from your goal.",
            "Also, did you know tortoises have great built-in GPS? They have a magnetic sense that can determine their location. The Tortoise is a reminder that direction is more important than speed. It might seem like things are moving slow, but the time you spend on foundation and strategy will pay off immensely. You’ll be glad you took it slow.",
          ],
          image: "/nft/Tortoise.png",
          reveal: false,
          id: 2,
        },
        {
          position: "The North",
          title: "Red Dragon",
          description: "The north position represent your long-term future.",
          content: [
            "The TortKACHAW! That’s the sound of luck striking. The Green Dragon is one of the three luckiest cards in the Mahjong deck — The Three Blessings. And it’s real friendly to startups. Having it in the North means whatever you start now will go incredibly well. Key word is “now”. Don’t procrastinate. Grab that dragon by the horns, and ride the lightning!",
          ],
          image: "/nft/Red-Dragon.png",
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
      }
    },
  },
};
</script>
<style lang="postcss" scoped>
</style>
