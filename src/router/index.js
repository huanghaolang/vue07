import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Index from "../views/layout/Index.vue";
import account from "../views/routerTest.vue";

Vue.use(VueRouter);

var register = {
  template:'<h3>注册</h3>'
}
const routes = [
  
  {
    path: '',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: "/about",
    name: "about", 
    component: () =>
      import("../views/About.vue")
  },
  {
    path: "/index",
    name: "Index", 
    component: Index
  },
  {
    path: "/user",
    name: "用户管理", 
    component: Index,
    chlidren: [
      {
        path: "list",
        name: "所有用户", 
        /* component: () =>
          import("@/views/user/List.vue") */
          component:  register
      },
      {
        path: "list2",
        name: "所有用户2", 
        component: () =>
          import("../views/user/List2.vue")
      }
    ]

  } ,{
    path: "/sist",
    name: "所有用户", 
    component: () =>
      import("@/views/routerTest.vue")
  },
  {
    path:'/account', 
    component: account,
    children: [
        {path:'login2', login},
        {path:'register2', register}
    ]
},
];

var login = {
  template:'<h3>登陆</h3>'
}
var register = {
  template:'<h3>注册</h3>'
}
const router = new VueRouter({
  routes
});
router.beforeEach((to,form,next)=>{
  console.log(to);
  next();

})


export default router;
