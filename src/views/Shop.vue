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
    <ShoppingCart
      :initial-cart-items="cartItems"
      :shipping-fee="shippingFee"
      @after-total-price="fetchTotalPrice"
    />

    <div class="line"></div>

    <Buttons
      :current-step="currentStep"
      @after-change-step="changeStep"
      @after-submit-order="submitOrder"
    />

    <Modal
      :order-data="orderData"
      v-if="isCheckOut"
      @after-handle-modal="closeModal"
    />
  </main>
</template>

<script>
import Stepper from "./../components/Stepper";
import Form from "./../components/Form";
import ShoppingCart from "./../components/ShoppingCart";
import Buttons from "./../components/Buttons";
import Modal from "./../components/Modal";

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

const dummyData = [
  {
    id: 1,
    name: "破壞補丁修身牛仔褲",
    quantity: 1,
    price: 3999,
    img: require("@/assets/image/cart-item-1.png"),
    subTotal: 3999,
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    quantity: 1,
    price: 1299,
    img: require("@/assets/image/cart-item-2.png"),
    subTotal: 1299,
  },
];

export default {
  name: "Shop",
  components: {
    Stepper,
    Form,
    ShoppingCart,
    Buttons,
    Modal,
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
        totalPrice: "",
      },
      counties: formData.counties,
      shippingWays: formData.shippingWays,
      shippingFee: 0,
      cartItems: [],
      isCheckOut: false,
    };
  },
  created() {
    this.setCartItems();
    this.currentStep = Number(this.$route.params.stepId)
      ? Number(this.$route.params.stepId)
      : 1;
  },
  methods: {
    changeStep(btn) {
      if (this.currentStep < 3 && btn === "next") {
        this.currentStep++;
      } else {
        this.currentStep--;
      }
      this.$router.push({ path: `/${this.currentStep}` });
    },
    chooseShipping(shippingId) {
      this.shippingWays = this.shippingWays.map((shippingWay) => {
        if (shippingId !== shippingWay.id) {
          return {
            ...shippingWay,
            isChecked: false,
          };
        } else {
          this.shippingFee = shippingWay.fee;
          return {
            ...shippingWay,
            isChecked: true,
          };
        }
      });
    },
    setCartItems() {
      this.cartItems = dummyData;
    },
    fetchTotalPrice(totalPrice) {
      this.orderData.totalPrice = totalPrice;
    },
    submitOrder() {
      const order = {
        ...this.orderData,
      };
      console.log(order);
      this.isCheckOut = true;
    },
    closeModal() {
      this.isCheckOut = false;
    },
  },
};
</script>