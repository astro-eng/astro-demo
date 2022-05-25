<template>
  <div class="order">
    <div class="container mx-auto p-[10px] md:p-[0px]">
      <template v-if="!isSubmitted">
        <div class="mb-20">
          <OrderOptions @select="(o) => (orderType = o)" />
        </div>
        <Heading1 class="mt-[100px]">Ask a question</Heading1>
        <Heading4 class="mt-[40px]">Select a question</Heading4>
        <div class="flex flex-wrap mt-[10px]">
          <div
            v-for="(item, index) in suggestQuestions"
            :key="index"
            class="card-hover"
            :class="selected == index ? 'box' : 'question'"
            @click="selected = index"
          >
            {{ item }}
          </div>
        </div>
        <div class="mt-[40px]">
          <Heading4>Or enter your own question</Heading4>
          <textarea
            v-model="question"
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
              mt-[10px]
              md:w-[500px]
              w-full
            "
            @keyup.enter="sendMail"
          >
          </textarea>
        </div>
        <div class="des-1 mt-[50px]">
          <div>
            We can only answer <span class="font-bold">one question</span>.
            Please double check and make sure this is what you want to ask...
          </div>
          <div class="italic">“What does my future look like?”</div>
          <div class="font-bold mt-[15px]">
            Your personalized 5 minute video will be delivered to your inbox
            within 24 hours.
          </div>
        </div>
        <div class="mt-[50px]">
          <div class="text-tran">Recorded Video • 5 minutes • $9.99</div>
          <ButtonPrimary class="mt-[20px]" @click="handleSubmit">
            Order my personalized video
          </ButtonPrimary>
        </div>
        <Heading1 class="mt-[150px]">Example</Heading1>
        <div class="grid grid-cols-1 md:grid-cols-2 mt-[50px] mb-[200px]">
          <div class="video-demo mr-[0px] md:mr-[10px] cursor-pointer">
            <img
              src="/src/assets/nft/video-banner-1.png "
              class="bg-cover"
              alt=""
            />
          </div>
          <div
            class="
              video-demo
              ml-[0px]
              md:ml-[10px]
              mt-[10px]
              md:mt-[0px]
              cursor-pointer
            "
          >
            <img
              src="/src/assets/nft/video-banner-2.png "
              class="bg-cover"
              alt=""
            />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="flex flex-col justify-items-center items-center mb-30">
          <h1 class="yay">Yay!!!</h1>
          <Heading2 class="mt-[40px]">Your order has been confirmed</Heading2>
          <div class="icon-done flex justify-center items-center">
            <div class="background w-full h-full absolute top-0 left-0"></div>
            <img src="/src/assets/icons/check.png" alt="" />
          </div>
          <div class="text-center des-2">
            <div>A copy of this transaction has been emailed to you.</div>
            <div class="mt-[15px] font-bold">
              Your video will be sent within 48 hours.
            </div>
            <div class="mt-[15px]">
              If you have any questions, please email us at hello@coiboi.io
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import OrderOptions from "@/components/OrderOptions.vue";
export default {
  components: { OrderOptions },
  data() {
    return {
      suggestQuestions: [
        "What does my future look like?",
        "What does my career look like in 2022?",
        "When will I get married?",
        "How do I overcome challenges I’m facing?",
        "When will I get married?",
      ],
      isSubmitted: false,
      question: "",
      selected: "",
      orderType: "",
    };
  },
  methods: {
    handleSubmit() {
      this.isSubmitted = true;
    },
  },
};
</script>
<style lang="postcss" scoped>
.icon-done {
  height: 285px;
  position: relative;
  width: 100%;
}
.background {
  background: linear-gradient(
    105.12deg,
    #28ffbf 21.27%,
    #ff00e4 67.16%,
    #7b61ff 108.26%
  );
  opacity: 0.2;
  filter: blur(200px);
  border-radius: 10px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.question {
  cursor: pointer;
  background: #1e1a25;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0px 0px 10px rgba(18, 18, 18, 0.1);
  border-radius: 100px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  padding: 15px 30px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #ffffff7e;
}
.box {
  cursor: pointer;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  padding: 15px 30px;
  border-radius: 100px;
  position: relative;
  box-sizing: border-box;
  background: linear-gradient(
    90deg,
    rgba(247, 58, 60, 0.15) 0%,
    rgba(255, 0, 228, 0.15) 51.01%,
    rgba(112, 0, 255, 0.15) 100%
  );
  margin-right: 10px;
  margin-bottom: 10px;
  background-clip: padding-box;
  border: solid 2px transparent;
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
  border-radius: 100px;
}
.box::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -2;
  margin: -2px;
  /* !importanté */
  border-radius: 100px;
  /* !importanté */
  background: linear-gradient(270deg, #7b61ff 0%, #ff00e4 48.56%, #f73a3c 100%);
}
.input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  height: 100px;
}
.des-1 {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
}
.text-tran {
  background: linear-gradient(
    270deg,
    #6f1fff -1.92%,
    #ff00e4 47.83%,
    #f73a3c 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
}
.video-demo {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
.video-demo::after {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  height: 25%;
  background: linear-gradient(360deg, #05010d 0%, rgba(5, 1, 13, 0) 100%);
  content: " ";
}
.yay {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  line-height: 113px;
  /* identical to box height */

  background: linear-gradient(
    270deg,
    #6f1fff -1.92%,
    #ff00e4 47.83%,
    #f73a3c 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.des-2 {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
}
</style>
