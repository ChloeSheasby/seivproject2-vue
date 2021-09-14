import { createWebHistory, createRouter } from "vue-router";
import List from "@/views/CourseList.vue";
import Add from "@/views/CourseAdd.vue";
import Edit from "@/views/CourseEdit.vue";

const routes = [
  {
    path: "/",
    name: "List",
    component: List
  },
  {
    path: "/add",
    name: "Add",
    component: Add
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit,
    props: true
  }/*,
  {
    path: '/delete/:id',
    name: 'delete',
    component: Delete,
    props: true
  }*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;