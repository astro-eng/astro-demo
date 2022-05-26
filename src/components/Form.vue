<template>
  <form class="" @submit.prevent="submit">
    <div class="flex flex-wrap">
      <div>
        <Heading4 class="mb-[10px]">First name</Heading4>
        <input
          v-model="formData.firstName"
          placeholder=""
          name="first_name"
          class="
            border-none
            !outline-none
            bg-transparent
            basis-[260px]
            leading-[28px]
            md:leading-[22px]
            pl-4
            py-2.5
            input
          "
        />
      </div>
      <div class="md:ml-[50px] mt-[50px] md:mt-[0px]">
        <Heading4 class="mb-[10px]">Last name</Heading4>
        <input
          v-model="formData.lastName"
          placeholder=""
          name="last_name"
          class="
            border-none
            !outline-none
            bg-transparent
            basis-[260px]
            leading-[28px]
            md:leading-[22px]
            pl-4
            py-2.5
            input
          "
        />
      </div>
    </div>
    <div class="mt-[50px]">
      <Heading4 class="mb-[10px]"
        >Gender <span class="optional">optional</span></Heading4
      >
      <select
        v-model="formData.gender"
        name="gender"
        class="
          border-none
          !outline-none
          bg-transparent
          basis-[260px]
          leading-[28px]
          md:leading-[22px]
          pl-4
          py-2.5
          input
        "
      >
        <option v-for="(item, index) in gender" :key="index" :value="item.key">
          {{ item.label }}
        </option>
      </select>
    </div>
    <div class="mt-[50px]">
      <div class="flex flex-wrap">
        <div>
          <Heading4 class="mb-[10px]">Date of Birth</Heading4>
          <input
            v-model="formData.birthday"
            name="birthday"
            class="
              border-none
              !outline-none
              bg-transparent
              basis-[260px]
              leading-[28px]
              md:leading-[22px]
              pl-4
              py-2.5
              input
            "
            type="date"
          />
        </div>
        <div class="md:ml-[50px] mt-[50px] md:mt-[0px]">
          <Heading4 class="mb-[10px]"
            >Time of Birth <span class="optional">optional</span></Heading4
          >
          <input
            v-model="formData.birthTime"
            name="birthTime"
            class="
              border-none
              !outline-none
              bg-transparent
              basis-[260px]
              leading-[28px]
              md:leading-[22px]
              pl-4
              py-2.5
              input
            "
            type="time"
          />
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div v-if="showError" class="text-red mb-4">
        Please enter your information.
      </div>
      <ButtonPrimary
        class="w-[150px]"
        :class="loading ? 'cursor-not-allowed' : ''"
        :disabled="loading"
        type="submit"
      >
        Submit
      </ButtonPrimary>
    </div>
  </form>
</template>

<script>
import serviceFateMap from "@/api/fate-map";

export default {
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        birthTime: null,
        birthday: null,
        gender: null,
      },
      gender: [
        { key: 1, label: "Male" },
        { key: 2, label: "Female" },
      ],
      loading: false,
      showError: false,
    };
  },
  methods: {
    async submit() {
      if (this.loading) {
        return false;
      }

      if (
        !this.formData.firstName ||
        !this.formData.birthday ||
        !this.formData.birthTime
      ) {
        this.showError = true;
        return false;
      } else {
        this.showError = false;
      }

      const response = await serviceFateMap.submitName({
        name: this.formData.firstName,
      });

      const guid = response.data.guid;
      // submit date
      await serviceFateMap.submitDate(guid, {
        birthDate: this.formData.birthday,
      });

      let birthHour = 12;
      let birthMinute = 0;

      if (this.formData.birthTime) {
        const arr = this.formData.birthTime.split(":");
        birthHour = parseInt(arr[0]);
        birthMinute = parseInt(arr[1]);
      }

      await serviceFateMap.submitHour(guid, { birthHour, birthMinute });

      await serviceFateMap.submitNFTZSign(guid, {
        energy: 0,
        mind: 0,
        tactics: 0,
        style: 0,
        romance: 0,
        dreams: 0,
        outlook: 0,
        gender: this.formData.gender || 3,
        three_words: "",
      });

      this.$router.push(`/reading/${guid}`);
    },
  },
};
</script>
<style lang="postcss" scoped>
.input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  width: 300px;
  height: 44px;
}
.optional {
  font-family: Noto Sans;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(255, 255, 255, 0.5);
}
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  color: #fff;
}
</style>


