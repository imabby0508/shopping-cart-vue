<template>
  <div class="cart-panel">
    <div class="container">
      <div class="cart-content">
        <div class="cart-title">購物籃</div>
        <div
          v-for="cartItem in cartItems"
          :key="cartItem.id"
          class="cart-items-wrapper"
        >
          <div class="cart-item-wrapper">
            <img
              :src="cartItem.img"
              alt="cart-item-1"
              class="cart-item__image"
            />
            <div class="cart-item-details">
              <p class="cart-item__name">{{ cartItem.name }}</p>
              <div class="cart-item-quantity-wrapper d-flex">
                <div
                  class="minus-container"
                  @click.stop.prevent="reduceQuantity(cartItem.id)"
                >
                  -
                </div>
                <div class="cart-item__quantity">{{ cartItem.quantity }}</div>
                <div
                  class="plus-container"
                  @click.stop.prevent="addQuantity(cartItem.id)"
                >
                  +
                </div>
              </div>
              <p class="cart-item__price">
                ${{ cartItem.subTotal.toLocaleString("en-US") }}
              </p>
            </div>
          </div>
        </div>
        <div class="cart-checkout">
          <div class="cart-checkout-wrapper d-flex">
            <div class="checkout__title">運費</div>
            <div class="checkout__amount total-shipping-fee">
              {{ shippingFee > 0 ? "$" + shippingFee : "免費" }}
            </div>
          </div>
          <div class="cart-checkout-wrapper d-flex">
            <div class="checkout__title">小計</div>
            <div class="checkout__amount total-amount">
              ${{ totalPrice.toLocaleString("en-US") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialCartItems: {
      type: Array,
      default: () => [],
    },
    shippingFee: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      cartItems: this.initialCartItems,
    };
  },
  computed: {
    totalPrice() {
      return (
        this.cartItems.reduce((total, item) => total + item.subTotal, 0) +
        this.shippingFee
      );
    },
  },
  created() {
    this.cartItems =
      JSON.parse(localStorage.getItem("CART_ITEMS")) || this.cartItems;
  },
  watch: {
    totalPrice: function () {
      this.$emit("after-total-price", this.totalPrice);
    },
    cartItems: {
      deep: true,
      handler() {
        localStorage.setItem("CART_ITEMS", JSON.stringify(this.cartItems));
      },
    },
  },
  methods: {
    reduceQuantity(itemId) {
      this.cartItems = this.cartItems.map((cartItem) => {
        if (itemId === cartItem.id && cartItem.quantity > 0) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
            subTotal: (cartItem.quantity - 1) * cartItem.price,
          };
        } else {
          return {
            ...cartItem,
          };
        }
      });
    },
    addQuantity(itemId) {
      this.cartItems = this.cartItems.map((cartItem) => {
        if (itemId === cartItem.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            subTotal: (cartItem.quantity + 1) * cartItem.price,
          };
        } else {
          return {
            ...cartItem,
          };
        }
      });
    },
  },
};
</script>