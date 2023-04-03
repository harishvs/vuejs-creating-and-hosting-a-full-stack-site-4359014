import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductDetailsPage from './pages/ProductDetailsPage.vue'
import ProductsPage from './pages/ProductsPage.vue'

createApp(App)
  .use(
    VueRouter.createRouter({
      history: VueRouter.createMemoryHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/cart",
          component: ShoppingCartPage,
        },
        {
          path: "/products",
          component: ProductsPage,
        },
        {
          path: "/products/:productId",
          component: ProductDetailsPage,
        },
      ],
    })
  )
  .mount("#app");
