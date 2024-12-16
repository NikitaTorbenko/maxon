export const routes = [
  { path: "/", component: () => import("@/pages/HomePage/ui/HomePage.vue") },
  {
    path: "/product/:id",
    component: () => import("@/pages/ProductPage/ui/ProductPage.vue"),
  },
];
