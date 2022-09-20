<template>
  <div class="cart-panel">
    <div class="container">
      <div class="cart-content">
        <div class="cart-title">購物籃</div>
        <div class="cart-items-wrapper">
          <div class="cart-item-wrapper d-flex">
            <img
              src="@/assets/image/cart-item-1.png"
              alt="cart-item-1"
              class="cart-item__image"
            />
            <div class="cart-item-details d-flex">
              <p class="cart-item__name">破壞補丁修身牛仔褲</p>
              <div class="cart-item-quantity-wrapper d-flex">
                <div class="minus-container">-</div>
                <div class="cart-item__quantity">1</div>
                <div class="plus-container">+</div>
              </div>
              <p class="cart-item__price">$3,999</p>
            </div>
          </div>
          <div class="cart-item-wrapper d-flex">
            <img
              src="@/assets/image/cart-item-2.png"
              alt="cart-item-2"
              class="cart-item__image"
            />
            <div class="cart-item-details d-flex">
              <p class="cart-item__name">刷色直筒牛仔褲</p>
              <div class="cart-item-quantity-wrapper d-flex">
                <div class="minus-container">-</div>
                <div class="cart-item__quantity">1</div>
                <div class="plus-container">+</div>
              </div>
              <p class="cart-item__price">$1,299</p>
            </div>
          </div>
        </div>
        <div class="cart-checkout">
          <div class="cart-checkout-wrapper d-flex">
            <div class="checkout__title">運費</div>
            <div class="checkout__amount total-shipping-fee">免費</div>
          </div>
          <div class="cart-checkout-wrapper d-flex">
            <div class="checkout__title">小計</div>
            <div class="checkout__amount total-amount">$5,298</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>