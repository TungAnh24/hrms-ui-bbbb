import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardVue from "../views/home/Dashboard.vue"
import UserIndex from "../views/user/UserIndex.vue"
import UserList from "../views/user/UserList.vue"
import GridUser from "../views/user/GridUser.vue"
import UserProfile from "../views/user/UserProfile.vue"
import AssignmentIndex from "../views/assignment/AssignmentIndex.vue"
import AssignmentEdit from "../views/assignment/AssignmentEdit.vue"
import DepartmentIndex from "../views/department/DepartmentIndex.vue"
const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import(`../components/Login.vue`),
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/trang-chu",
    name: "trang-chu",
    component: DashboardVue,
  },
  {
    path: "/user",
    name: "user",
    component: UserIndex
    ,
    children: [
      {
        path: "list",
        name: "list",
        component: UserList,
      }
    ],
  },
  {
    path: "/user-list",
    name: "user-list",
    component: UserList,
  },
  {
    path: "/user-grid",
    name: "user-grid",
    component: GridUser,
  },
  {
    path: "/profile",
    name: "user-profile",
    component: UserProfile,
  },
  {
    path: "/assignment",
    name: "assignment",
    component: AssignmentIndex,
  },
  {
    path: "/assignment/edit/:id",
    name: "assignmentEdit",
    component: AssignmentEdit,
  },
  {
    path: "/department",
    name: "department",
    component: DepartmentIndex,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
