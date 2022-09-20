<template>
  <div class="stepper-panel">
    <div class="container">
      <h1>結帳</h1>
      <div class="stepper-container d-flex">
        <div
          v-for="step in steps"
          :key="step.id"
          :class="[
            'step',
            { active: currentStep === step.id },
            { checked: currentStep > step.id },
          ]"
        >
          <div class="circle-container"></div>
          <div class="label-container">{{ step.title }}</div>
          <div class="connect-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      steps: [
        {
          id: 1,
          title: "寄送地址",
        },
        {
          id: 2,
          title: "運送方式",
        },
        {
          id: 3,
          title: "付款資訊",
        },
      ],
    };
  },
};
</script>