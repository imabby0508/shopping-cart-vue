const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/main.scss";`,
      },
    },
  },
};

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/shopping-cart-vue/" : "/",
};
