<script>
import { RouterLink } from "vue-router";
import BornOn from "@/components/nftz/BornOn.vue";
import SignArchetype from "@/components/nftz/SignArchetype.vue";
import serviceFateMap from "@/api/fate-map";

export default {
  components: { RouterLink, BornOn, SignArchetype },
  async created() {
    try {
      const guid = this.$route.params.guid;
      const dataRes = await serviceFateMap.getTransaction(guid);
      const dataResFateMap = await serviceFateMap.submitDate(guid, {
        birthDate: `${dataRes.data.birth_year}-${dataRes.data.birth_month}-${dataRes.data.birth_day}`,
      });
      const dataResFourSign = await serviceFateMap.submitHour(guid, {
        birthHour: dataRes.data.birth_hour,
        birthMinute: dataRes.data.birth_minute,
      });

      const dataResNFTZ = await serviceFateMap.submitNFTZSign(guid, {
        energy: 0,
        mind: 0,
        tactics: 0,
        style: 0,
        romance: 0,
        dreams: 0,
        outlook: 0,
        gender: 1,
        three_words: "",
      });

      this.dataUser = dataRes.data;
      this.dataFateMap = dataResFateMap.data;
      this.dataFourSign = dataResFourSign.data;
      this.dataNFTZSign = dataResNFTZ.data;
      this.ready = true;
    } catch (e) {
      console.log("🚀 ~ file: ZodiacReadingView.vue ~ line 38 ~ setup ~ e", e);
      this.$router.push("/");
    }
  },
  data() {
    return {
      ready: false,
    };
  },
};
</script>

<template>
  <div class="mb-[256px]">
    <Heading1>
      Chinese Zodiac<br />
      Personality Reading
    </Heading1>
    <template v-if="ready">
      <div class="mt-[100px]"></div>
      <BornOn
        :dataUser="dataUser"
        :dataFateMap="dataFateMap"
        :dataFourSign="dataFourSign"
        :dataNFTZSign="dataNFTZSign"
      />
      <div class="mt-[150px]"></div>
      <SignArchetype
        :dataUser="dataUser"
        :dataFateMap="dataFateMap"
        :dataFourSign="dataFourSign"
        :dataNFTZSign="dataNFTZSign"
      />
    </template>
    <div class="mb-[150px]"></div>
  </div>
</template>
