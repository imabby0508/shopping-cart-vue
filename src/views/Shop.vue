<template>
  <main class="main-content">
    <Stepper :current-step="currentStep" />
    <Form
      :current-step="currentStep"
      :order-data="orderData"
      :counties="counties"
      :shipping-ways="shippingWays"
      @after-choose-shipping="chooseShipping"
    />
    <ShoppingCart />

    <div class="line"></div>

    <Buttons :current-step="currentStep" @after-change-step="changeStep" />
  </main>
</template>

<script>
import Stepper from "./../components/Stepper";
import Form from "./../components/Form";
import ShoppingCart from "./../components/ShoppingCart";
import Buttons from "./../components/Buttons";

const formData = {
  counties: [
    "臺北市",
    "新北市",
    "桃園市",
    "臺中市",
    "臺南市",
    "高雄市",
    "新竹縣",
    "苗栗縣",
    "彰化縣",
    "南投縣",
    "雲林縣",
    "嘉義縣",
    "屏東縣",
    "宜蘭縣",
    "花蓮縣",
    "臺東縣",
    "澎湖縣",
    "金門縣",
    "連江縣",
    "基隆市",
    "新竹市",
    "嘉義市",
  ],
  shippingWays: [
    {
      id: 1,
      method: "標準運送",
      time: "約3~7個工作天",
      fee: 0,
      isChecked: true,
    },
    {
      id: 2,
      method: "DHL貨運",
      time: "48小時內送達",
      fee: 500,
      isChecked: false,
    },
  ],
};


export default {
  name: "Shop",
  components: {
    Stepper,
    Form,
    ShoppingCart,
    Buttons,
  },
  data() {
    return {
      currentStep: 1,
      orderData: {
        salutation: "mr",
        name: "",
        phone: "",
        email: "",
        county: "",
        address: "",
        shipping: 0,
        cardName: "",
        cardNo: "",
        expiration: "",
        cvc: "",
      },
      counties: formData.counties,
      shippingWays: formData.shippingWays,
    };
  },
  methods: {
    changeStep(btn) {
      if (this.currentStep < 3 && btn === "next") {
        this.currentStep++;
      } else {
        this.currentStep--;
      }
    },
    chooseShipping(shippingId) {
      this.shippingWays = this.shippingWays.map((shippingWay) => {
        if (shippingId !== shippingWay.id) {
          return {
            ...shippingWay,
            isChecked: false,
          }
        } else {
          return {
            ...shippingWay,
            isChecked: true,
          }
        }
      });
    },
  },
};
</script>