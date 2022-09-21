<template>
  <div class="button-panel">
    <div class="container button-control d-flex">
      <button
        :disabled="currentStep === 1"
        class="btn btn-previous"
        @click.stop.prevent="handleChangeStep('previous')"
      >
        <img
          src="@/assets/image/arrow-previous.png"
          alt="previous"
          class="btn-previous"
        />上一步
      </button>
      <button
        v-if="currentStep === 3"
        class="btn btn-finish"
        @click.stop.prevent="handleSubmit()"
      >
        確認下單
      </button>
      <button
        v-else
        class="btn btn-next"
        @click.stop.prevent="handleChangeStep('next')"
      >
        下一步<img
          src="@/assets/image/arrow-next.png"
          alt="next"
          class="btn-next"
        />
      </button>
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
  methods: {
    handleChangeStep(btn) {
      this.$emit("after-change-step", btn);
    },
    handleSubmit() {
      this.$emit("after-submit-order");
    },
  },
};
</script>