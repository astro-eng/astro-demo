<template>
  <form class="" @submit.prevent="submitSettings">
    <div class="flex flex-wrap">
      <div>
        <Heading4 class="mb-[10px]">First name</Heading4>
        <input
          v-model="formData.firstName"
          placeholder=""
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
    <div class="mt-[100px]">
      <button
        @click="submitSettings"
        class="button"
        :class="loading ? 'cursor-not-allowed' : ''"
        :disabled="loading"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
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
      loading: false,
    };
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
  color: #fff
}
.button {
  width: 166px;
  height: 40px;
  background: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
}
</style>


