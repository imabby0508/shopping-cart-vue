<template>
  <div class="form-panel">
    <div class="container">
      <form class="form">
        <div class="form-content">
          <!-- part one -->
          <div v-show="currentStep === 1" class="part">
            <h1>寄送地址</h1>
            <div class="form-content-name">
              <!-- 稱謂 -->
              <div class="form-row form-row-salutation">
                <label for="">稱謂</label>
                <div class="select-wrapper">
                  <select
                    v-model="orderData.salutation"
                    name="salutation"
                    id="salutation"
                  >
                    <option value="mr">先生</option>
                    <option value="ms">小姐</option>
                    <option value="all">不拘</option>
                  </select>
                </div>
              </div>
              <!-- 姓名 -->
              <div class="form-row form-row-name">
                <label for="">姓名</label>
                <input
                  v-model="orderData.name"
                  type="text"
                  placeholder="請輸入姓名"
                  size="10"
                />
              </div>
            </div>
            <div class="form-content-contact">
              <!-- 電話 -->
              <div class="form-row form-row-phone">
                <label for="">電話</label>
                <input
                  v-model="orderData.phone"
                  type="text"
                  placeholder="請輸入行動電話"
                  size="10"
                />
              </div>
              <!-- Email -->
              <div class="form-row form-row-email">
                <label for="">Email</label>
                <input
                  v-model="orderData.email"
                  type="text"
                  placeholder="請輸入電子郵件"
                  size="10"
                />
              </div>
            </div>
            <div class="form-content-residence">
              <!-- 縣市 -->
              <div class="form-row form-row-county">
                <label for="">縣市</label>
                <div class="select-wrapper">
                  <select
                    v-model="orderData.county"
                    name="county"
                    id="county"
                    required
                  >
                    <option value="" disabled selected>請選擇縣市</option>
                    <option
                      v-for="county in counties"
                      :key="counties.indexOf(county)"
                      :value="county"
                    >
                      {{ county }}
                    </option>
                  </select>
                </div>
              </div>
              <!-- 地址 -->
              <div class="form-row form-row-address">
                <label for="">地址</label>
                <input
                  v-model="orderData.address"
                  type="text"
                  placeholder="請輸入地址"
                />
              </div>
            </div>
          </div>
          <!-- part two -->
          <div v-show="currentStep === 2" class="part">
            <h1>運送方式</h1>
            <div class="form-row">
              <div
                v-for="shippingWay in shippingWays"
                :key="shippingWay.id"
                class="shipping-wrapper d-flex"
              >
                <input
                  v-model="orderData.shipping"
                  name="shipping"
                  type="radio"
                  :value="shippingWay.fee"
                  :checked="shippingWay.isChecked"
                  @click="handleShippingMethod(shippingWay.id)"
                />
                <label for="" class="d-flex flex-column">
                  <span class="shipping-method">{{ shippingWay.method }}</span>
                  <span class="shipping-time">{{ shippingWay.time }}</span>
                </label>
                <span class="shipping-fee">{{
                  shippingWay.fee > 0 ? "$" + shippingWay.fee : "免費"
                }}</span>
              </div>
            </div>
          </div>
          <!-- part three -->
          <div v-show="currentStep === 3" class="part">
            <h1>付款資訊</h1>
            <!-- 持卡人姓名 -->
            <div class="form-row">
              <label for="">持卡人姓名</label>
              <input
                v-model="orderData.cardName"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <!-- 卡號 -->
            <div class="form-row">
              <label for="">卡號</label>
              <input
                v-model="orderData.cardNo"
                type="text"
                placeholder="1111 2222 3333 4444"
              />
            </div>
            <div class="form-content-card">
              <!-- 有效期限 -->
              <div class="form-row form-row-expiration">
                <label for="">有效期限</label>
                <input
                  v-model="orderData.expiration"
                  type="text"
                  placeholder="MM/YY"
                  size="5"
                />
              </div>
              <!-- CVC/CCV -->
              <div class="form-row form-row-cvc">
                <label for="">CVC/CCV</label>
                <input
                  v-model="orderData.cvc"
                  type="text"
                  placeholder="123"
                  size="5"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
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
    orderData: {
      type: Object,
      required: true,
    },
    counties: {
      type: Array,
      required: true,
    },
    shippingWays: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    handleShippingMethod(shippingId) {
      this.$emit("after-choose-shipping", shippingId);
    },
  },
};
</script>