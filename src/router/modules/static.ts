export const staticRouter = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/",
    name: "welcome",
    component: () => import("@/views/welcome.vue"),
  },
];
