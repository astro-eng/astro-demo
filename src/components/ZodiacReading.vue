
<script setup>
</script>
<template>
  <div class="mb-[180px] lg:mb-[256px]">
    <heading2 class="max-w-[215px] mb-7.5">Zodiac</heading2>
    <div class="flex items-start">
      <div
        class="
          flex-shrink-0
          w-[400px]
          h-[400px]
          bg-center bg-cover bg-no-repeat
          rounded-xl
          mr-7.5
          mb-10
        "
      >
        <img src="/nft/astro-avatar.png" width="400" class="w-full" />
      </div>
      <div class="flex-auto">
        <heading4 class="mb-7.5"
          >Your Zodiac Animal is the Metal Rabbit</heading4
        >
        <div
          class="flex-auto flex-shrink-1 text-sm fold-bold font-raleway mb-30"
        >
          <p class="mb-5">
            People often don’t understand your gentle, peace-loving nature. They
            don’t know why you just don’t get angry and blow up. While living in
            harmony might seem impossible for others, it comes easy to you.
            That’s because the Rabbit possesses great sensitivity and wisdom.
          </p>
          <p class="mb-5">
            You’re very considerate, and are always willing to help friends and
            family who are facing difficulties. You’d cancel that Euro trip just
            to lend money to a struggling relative. It’s no wonder you get along
            with everyone in your family. Even if they don’t.
          </p>
          <p class="mb-5">
            The Metal Rabbit values freedom over all. You love to see your
            friends and family having the job they love, going to the school
            they want, or just living comfortably without worries.
          </p>
          <p class="mb-5">
            While you plan and ponder on how you can make everyone’s life
            easier, just don’t forget about your own freedom. Remember, saying
            “no” does not make you insensitive. Rabbits don’t bite. But they,
            too, need the peace and quiet that they’ve worked so hard to give
            everyone else.
          </p>
        </div>
        <div class="flex items-center justify-between">
          <div
            class="
              inline-flex
              items-center
              text-sm
              font-bold font-raleway
              cursor-pointer
            "
            @click="$emit('showOverview')"
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
            <span>PREVIOUS OVERVIEW</span>
          </div>
          <ButtonPrimary class="text-sm" @click="$emit('showCardReading')">
            <span>CARD READING</span>
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
    </div>
  </div>
</template>
<style lang="postcss" scoped>
</style>
