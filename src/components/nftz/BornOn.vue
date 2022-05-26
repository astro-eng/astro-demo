<template>
  <div>
    <div class="flex items-center flex-wrap">
      <Heading2> You were born on</Heading2>
      <span class="time ml-[30px]">{{ birthDay }} at {{ birthTime }}</span>
    </div>
    <div class="mt-[20px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      <div class="card p-[21px] md:mr-[9px] md:text-left text-center">
        <div class="flex justify-center w-full">
          <img
            class="card-image md:h-[200px] w-9/12 md:w-auto"
            :src="dataFourSign.yearSignImg"
          />
        </div>
        <div class="card-title mt-[20px]">
          Year of the {{ dataFourSign.yearSign }}
        </div>
      </div>
      <div
        class="
          card
          md:text-left
          text-center
          p-[21px]
          md:ml-[3px]
          xl:mr-[9px]
          mt-[10px]
          md:mt-[0px]
        "
      >
        <div class="flex justify-center w-full">
          <img
            class="card-image md:h-[200px] w-9/12 md:w-auto"
            :src="dataFourSign.monthSignImg"
          />
        </div>
        <div class="card-title mt-[20px]">
          Month of the {{ dataFourSign.monthSign }}
        </div>
      </div>
      <div
        class="
          card
          md:text-left
          text-center
          p-[21px]
          md:ml-[3px] md:mr-[9px]
          mt-[10px]
          md:mt-[0px]
          xl:mt-[0px]
          md:mt-[10px]
        "
      >
        <div class="flex justify-center w-full">
          <img
            class="card-image md:h-[200px] w-9/12 md:w-auto"
            :src="dataFourSign.daySignImg"
          />
        </div>
        <div class="card-title mt-[20px]">
          Day of the {{ dataFourSign.daySign }}
        </div>
      </div>
      <div
        class="
          card
          md:text-left
          text-center
          p-[21px]
          md:ml-[3px]
          mt-[10px]
          md:mt-[0px]
          xl:mt-[0px]
          md:mt-[10px]
        "
      >
        <div class="flex justify-center w-full">
          <img
            class="card-image md:h-[200px] w-9/12 md:w-auto"
            :src="dataFourSign.hourSignImg"
          />
        </div>
        <div class="card-title mt-[20px]">
          Hour of the {{ dataFourSign.hourSign }}
        </div>
      </div>
    </div>
    <div class="mt-[40px] des">
      Based on the Four Pillars Chart, your Year and Day Zodicas have the
      strongest influence on your personality.
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    dataUser: Object,
    dataFateMap: Object,
    dataFourSign: Object,
    dataNFTZSign: Object,
  },
  computed: {
    birthDay() {
      const day = this.dataUser.birth_day?.toString().padStart(2, "0") || "";
      const month =
        this.dataUser.birth_month?.toString().padStart(2, "0") || "";
      const year = this.dataUser.birth_year?.toString() || "";
      return day + "/" + month + "/" + year;
    },

    birthTime() {
      const hour = this.dataUser.birth_hour?.toString().padStart(2, "0") || "";
      const minute =
        this.dataUser.birth_minute?.toString().padStart(2, "0") || "";
      return moment(hour + ":" + minute, "HH:mm").format("hh:mm A");
    },
  },
};
</script>
<style lang="postcss" scoped>
.time {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
}
.change {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: right;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #7b61ff;
}
.card {
  background: #1e1a25;
  border-radius: 10px;
  overflow: hidden;
}
.card-image {
  object-fit: contain;
}
.card-title {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
}
.card-content {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  opacity: 0.5;
}
.des {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
}
.link {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: right;
  font-feature-settings: "pnum" on, "lnum" on;
}
</style>
