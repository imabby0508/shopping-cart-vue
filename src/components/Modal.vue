<template>
  <div class="checkout-modal">
    <div class="modal-card">
      <div class="modal-header">
        <h6>已收到訂單!</h6>
        <button @click.stop.prevent="handleModal">X</button>
      </div>
      <div class="modal-body">
        <p>
          訂購人:
          {{ orderData.salutation === "all" ? "" : orderData.salutation }}
          {{ orderData.name }}
        </p>
        <p>電話: {{ orderData.phone }}</p>
        <p>email: {{ orderData.email }}</p>
        <p>地址: {{ orderData.address }}</p>
        <p>運費: ${{ orderData.shipping }}</p>
        <p>持卡人姓名: {{ orderData.cardName }}</p>
        <p>卡號: {{ orderData.cardNo }}</p>
        <p>有效期限: {{ orderData.expiration }}</p>
        <p>CVC/CCV: {{ orderData.cvc }}</p>
        <p>訂單總金額: ${{ orderData.totalPrice.toLocaleString("en-US") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleModal() {
      this.$emit("after-handle-modal");
    },
  },
};
</script>
