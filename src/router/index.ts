import { createRouter, createWebHashHistory } from "vue-router";
import { staticRouter } from "./modules/static";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRouter],
});
router.beforeEach(async (to, from, next) => {
  if (to.path == "/login") return next();
});
export default router;
