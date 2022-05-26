<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 mt-[50px]">
      <div class="md:mr-[30px]">
        <div class="sticky top-[110px] left-0">
          <Heading1 class="mb-[50px]">
            Your are the <br /><span class="text-tran"
              >{{ archetypeMapping[dataNFTZSign.architype.name] }}
              {{ dataFateMap.yearSign }}</span
            ></Heading1
          >
          <div class="box">
            <img
              class="p-[35px] object-cover"
              :src="dataNFTZSign.archetypeImage"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-row h-[94px] mb-[50px] justify-end"></div>
        <div class="card">
          <div class="card-title">
            <div class="mini-box mr-[10px]">
              <img src="/src/assets/nftz/sign-1.png" alt="" />
            </div>
            <div class="mini-box mr-[20px]">
              <img src="/src/assets/nftz/sign-2.png" alt="" />
            </div>
            {{ threeWords[0] }}, {{ threeWords[1] }}, and
            {{ threeWords[2] }}
          </div>
          <div
            class="card-content mt-[30px]"
            v-html="dataNFTZSign.architype.content"
          ></div>
        </div>
        <div
          v-for="(item, index) in rangeOptions"
          :key="index"
          class="card mt-[30px]"
        >
          <div class="card-title">
            <div class="mini-box mr-[10px]">
              <img :src="item.image" alt="" />
            </div>
            {{ item.title }}
          </div>
          <div class="card-title mt-[30px]">{{ item.attributeLabels }}</div>
          <div class="card-content mt-[10px]" v-html="item.content"></div>
        </div>

        <div class="mint mt-[100px] p-[40px]">
          <div class="mint-title">Ready to mint?</div>
          <div class="mint-content mt-[10px]">
            <p class="mt-[10px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p class="mt-[10px]">
              Eaque ipsa quae ab illo inventore.Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore.
            </p>
          </div>
          <Button class="px-[18px] py-[8px] mt-[30px] uppercase">
            Mint the
            {{ archetypeMapping[dataNFTZSign.architype.name] }}
            {{ dataFateMap.yearSign }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      archetypeMapping: {
        creator: "Creator",
        atlas: "Citizen",
        ruler: "Ruler",
        innocent: "Dreamer",
        explorer: "Explorer",
        rebel: "Disruptor",
        hero: "Hero",
        wizard: "Wizard",
        jester: "Joker",
        caregiver: "Giver",
        entrepreneur: "Innovator",
        lover: "Romantic",
      },
      attributeMapping: {
        energy1: "Exceptionally Yin",
        energy2: "Yin Energy",
        energy3: "Balanced",
        energy4: "Yang Energy",
        energy5: "Exceptionally Yang",
        mind1: "Extraordinary Logic",
        mind2: "Logical",
        mind3: "Balanced",
        mind4: "Intuitive",
        mind5: "Extraordinary Intuition",
        tactics1: "Superior Discipline",
        tactics2: "Disciplined",
        tactics3: "Balanced",
        tactics4: "Spontaneous",
        tactics5: "Wildly Spontaneous",
        style1: "Exquisitely Subtle",
        style2: "Subtle",
        style3: "Balanced",
        style4: "Chic",
        style5: "Tastefully Chic",
        romance1: "Deeply Intimate",
        romance2: "Intimate",
        romance3: "Balanced",
        romance4: "Passionate",
        romance5: "Intensely Passionate",
        dreams1: "Pragmatic Realist",
        dreams2: "Realist",
        dreams3: "Balanced",
        dreams4: "Idealist",
        dreams5: "Visionary Idealist",
        outlook1: "Grounded in Tradition",
        outlook2: "Traditional",
        outlook3: "Balanced",
        outlook4: "Progressive",
        outlook5: "Ultra Progressive",
      },
      twMapping: {
        twClever: "Clever",
        twConvincing: "Convincing",
        twEntrepreneurial: "Entrepreneurial",
        twResponsible: "Responsible",
        twDetermined: "Determined",
        twRobust: "Robust",
        twBrave: "Brave",
        twConfident: "Confident",
        twAdventurous: "Adventurous",
        twVisionary: "Visionary",
        twMajestic: "Majestic",
        twInspiring: "Inspiring",
        twPeaceful: "Peaceful",
        twDiplomatic: "Diplomatic",
        twClassy: "Classy",
        twSeductive: "Seductive",
        twThoughtful: "Thoughtful",
        twCharming: "Charming",
        twGentle: "Gentle",
        twArtistic: "Artistic",
        twSensitive: "Sensitive",
        twEntertaining: "Entertaining",
        twIndependent: "Independent",
        twAthletic: "Athletic",
        twProtective: "Protective",
        twTraditional: "Traditional",
        twLoyal: "Loyal",
        twFun: "Fun",
        twVersatile: "Versatile",
        twEfficient: "Efficient",
        twSharp: "Sharp",
        twManagerial: "Managerial",
        twGiving: "Giving",
        twNice: "Nice",
        twHedonistic: "Hedonistic",
      },
    };
  },

  props: {
    dataUser: Object,
    dataFateMap: Object,
    dataFourSign: Object,
    dataNFTZSign: Object,
  },

  computed: {
    threeWords() {
      return this.dataNFTZSign.threeWords.split(",").map((f) => {
        return this.twMapping["tw" + (f.charAt(0).toUpperCase() + f.slice(1))];
      });
    },

    rangeOptions() {
      const data = [
        {
          title: "Energy",
          attributeLabels: "",
          content: "",
          image: "/src/assets/nftz/energy.png",
        },
        {
          title: "Mind",
          attributeLabels: "",
          content: "",
          image: "/src/assets/nftz/mind.png",
        },
        {
          title: "Tactics",
          attributeLabels: "",
          content: "",
          image: "/src/assets/nftz/tactics.png",
        },
        {
          title: "Style",
          attributeLabels: "",
          content: "",
          image: "/src/assets/nftz/style.png",
        },
        {
          title: "Love",
          attributeLabels: "",
          content: "",
          image: "/src/assets/nftz/love.png",
        },
        {
          title: "Dreams",
          attributeLabels: "",
          content: "",
          image: "/src/assets/nftz/dreams.png",
        },
        {
          title: "Outlook",
          attributeLabels: "",
          content: "",
          image: "/src/assets/nftz/outlook.png",
        },
      ];

      data[0].content = this.dataNFTZSign.energy.content.replaceAll(
        /\n/g,
        "<br />"
      );
      data[1].content = this.dataNFTZSign.mind.content.replaceAll(
        /\n/g,
        "<br />"
      );
      data[2].content = this.dataNFTZSign.tactics.content.replaceAll(
        /\n/g,
        "<br />"
      );
      data[3].content = this.dataNFTZSign.style.content.replaceAll(
        /\n/g,
        "<br />"
      );
      data[4].content = this.dataNFTZSign.romance.content.replaceAll(
        /\n/g,
        "<br />"
      );
      data[5].content = this.dataNFTZSign.dream.content.replaceAll(
        /\n/g,
        "<br />"
      );
      data[6].content = this.dataNFTZSign.outlook.content.replaceAll(
        /\n/g,
        "<br />"
      );

      data[0].attributeLabels =
        this.attributeMapping["energy" + (this.dataNFTZSign.energy.rating + 3)];
      data[1].attributeLabels =
        this.attributeMapping["mind" + (this.dataNFTZSign.mind.rating + 3)];
      data[2].attributeLabels =
        this.attributeMapping[
          "tactics" + (this.dataNFTZSign.tactics.rating + 3)
        ];
      data[3].attributeLabels =
        this.attributeMapping["style" + (this.dataNFTZSign.style.rating + 3)];
      data[4].attributeLabels =
        this.attributeMapping[
          "romance" + (this.dataNFTZSign.romance.rating + 3)
        ];
      data[5].attributeLabels =
        this.attributeMapping["dream" + (this.dataNFTZSign.dream.rating + 3)];
      data[6].attributeLabels =
        this.attributeMapping[
          "outlook" + (this.dataNFTZSign.outlook.rating + 3)
        ];
      return data;
    },

    getArchetype() {},
  },
};
</script>
<style lang="postcss" scoped>
.text-tran {
  background: linear-gradient(
    270deg,
    #6f1fff -1.92%,
    #ff00e4 47.83%,
    #f73a3c 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.box {
  border-radius: 10px;
  width: 100%;

  position: relative;
  box-sizing: border-box;
  background: linear-gradient(
    90deg,
    rgba(247, 58, 60, 0.15) 0%,
    rgba(255, 0, 228, 0.15) 51.01%,
    rgba(112, 0, 255, 0.15) 100%
  );

  background-clip: padding-box;
  border: solid 3px transparent;
}
.box::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: #1e1a25;
  border-radius: 10px;
}
.box::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -2;
  margin: -3px;
  /* !importanté */
  border-radius: 10px;
  /* !importanté */
  background: linear-gradient(270deg, #7b61ff 0%, #ff00e4 48.56%, #f73a3c 100%);
}
.card {
  padding: 40px;
  border-radius: 10px;
  position: relative;
}
.card::before {
  background: #ffffff;
  opacity: 0.1;
  border-radius: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  content: " ";
  top: 0;
  left: 0;
}
.card-title {
  display: flex;
  align-items: center;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
}
.card-content {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  opacity: 0.5;
}
.mini-box {
  width: 36px;
  height: 36px;
  justify-items: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  padding: 9px;
}
.mint {
  background: linear-gradient(
    98.15deg,
    #fea7a7 -4.31%,
    #8812a0 25.6%,
    #1b184c 100%
  );
  border-radius: 10px;
}
.mint-title {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 23px;
}
.mini-content {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
}
.mint-button {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
}
</style>
