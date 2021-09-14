import { createWebHistory, createRouter } from "vue-router";
import Home from "@/App.vue";
import Add from "@/views/AddPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
  }/*,
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit,
    props: true
  },
  {
    path: '/delete/:id',
    name: 'delete',
    component: Delete,
    props: true
  }*/
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;