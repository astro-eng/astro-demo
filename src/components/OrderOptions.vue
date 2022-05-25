<template>
  <div class="pt-7 flex items-center justify-start flex-wrap">
    <div
      v-for="item in options"
      :key="item.id"
      class="basis-[320px] flex-shrink-0 card-hover sm:mr-5 last:mr-0 mb-4"
    >
      <div
        v-if="item.isRecommended"
        class="
          rounded-10
          bg-purple-gradient
          pt-2.5
          px-3
          pb-6
          inline-block
          text-xs
          font-bold
          uppercase
        "
        :class="{
          'opacity-20':
            item.isRecommended && !!selected && selected !== item.id,
        }"
      >
        RECOMMENDED
      </div>
      <BoxGradient
        class="relative z-[2]"
        :style="item.isRecommended ? 'margin: -17px 0 17px;' : ''"
        :class="{
          'before:hidden': !item.isRecommended && selected !== item.id,
          'before:opacity-40':
            item.isRecommended && !!selected && selected !== item.id,
        }"
        @click="handleSelect(item.id)"
      >
        <div
          class="p-[27px] rounded-10"
          :class="{
            'bg-black-10': selected !== item.id,
            'bg-blackAstro':
              selected === item.id || (!selected && item.isRecommended),
            'bg-opacity-40':
              !!selected && selected !== item.id && !item.isRecommended,
          }"
        >
          <div
            class="mb-7.5"
            :class="{
              'opacity-40': !!selected && selected !== item.id,
            }"
          >
            <div class="flex items-center mb-7.5">
              <div
                class="
                  rounded-[5px]
                  bg-white bg-opacity-20 bg-no-repeat bg-center
                  bg-[length:18px_18px]
                  mr-2.5
                  w-9
                  h-9
                "
                :style="`background-image: url(${item.icon})`"
              ></div>
              <heading4>{{ item.title }}</heading4>
            </div>
            <div
              class="mb-[60px] text-sm"
              :style="
                selected === item.id || (!selected && item.isRecommended)
                  ? 'margin-bottom: 100px;'
                  : ''
              "
            >
              <p
                v-for="(desc, index) in item.desc"
                :key="index"
                class="mb-5 last:mb-0"
              >
                {{ desc }}
              </p>
            </div>
            <div class="text-gradient text-base font-black font-raleway">
              {{ item.priceText }}
            </div>
          </div>
          <ButtonPrimary class="w-full">{{
            item.buttonText
          }}</ButtonPrimary>
        </div>
      </BoxGradient>
    </div>
  </div>
</template>
<script>
import BoxGradient from "@/components/BoxGradient.vue";
export default {
  components: { BoxGradient },
  data() {
    return {
      selected: "",
      options: [
        {
          id: "2min",
          title: "2-minute Video",
          desc: [
            "Do you have a burning question and need help from an Astrologer? The Firepig has helped over 50,000 people over the last 30 years.  ",
            "You can now get a personalized video recorded for you for only $9.99",
          ],
          priceText: "Recorded Video • 2 minutes • $8.88",
          buttonText: "SELECT 2-min video",
          icon: "/src/assets/icons/screen.png",
          isRecommended: false,
        },
        {
          id: "5min",
          title: "5-minute Video",
          desc: [
            "Do you have a burning question and need help from an Astrologer? The Firepig has helped over 50,000 people over the last 30 years.  ",
            "You can now get a personalized video recorded for you for only $9.99",
          ],
          priceText: "Recorded Video • 5 minutes • $18.88",
          buttonText: "SELECTED 5-MIN VIDEO",
          icon: "/src/assets/icons/camera.png",
          isRecommended: true,
        },
        {
          id: "live",
          title: "Live Consultation",
          desc: [
            "Do you have a burning question and need help from an Astrologer? The Firepig has helped over 50,000 people over the last 30 years.  ",
            "You can now get a personalized video recorded for you for only $9.99",
          ],
          priceText: "Online Meeting • 30 minutes • $48.88",
          buttonText: "SELECT consultation",
          icon: "/src/assets/icons/message.png",
          isRecommended: false,
        },
      ],
    };
  },
  methods: {
    handleSelect(option) {
      this.selected = option;
      this.$emit("select", option);
    },
  },
};
</script>
<style lang="postcss" scoped>
</style>
