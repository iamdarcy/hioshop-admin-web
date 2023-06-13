import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission () =>importments
 * all roles can be accessed
 */
// export const constantRoutes = [
//   {
//     path: '/login',
//     component: () => import('@/views/login/index'),
//     hidden: true
//   },

//   {
//     path: '/404',
//     component: () => import('@/views/404'),
//     hidden: true
//   },

//   {
//     path: '/',
//     component: Layout,
//     redirect: '/dashboard',
//     children: [{
//       path: 'dashboard',
//       name: 'Dashboard',
//       component: () => import('@/views/dashboard/index'),
//       meta: { title: 'Dashboard', icon: 'dashboard' }
//     }]
//   },

//   {
//     path: '/example',
//     component: Layout,
//     redirect: '/example/table',
//     name: 'Example',
//     meta: { title: 'Example', icon: 'el-icon-s-help' },
//     children: [
//       {
//         path: 'table',
//         name: 'Table',
//         component: () => import('@/views/table/index'),
//         meta: { title: 'Table', icon: 'table' }
//       },
//       {
//         path: 'tree',
//         name: 'Tree',
//         component: () => import('@/views/tree/index'),
//         meta: { title: 'Tree', icon: 'tree' }
//       }
//     ]
//   },

//   {
//     path: '/form',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         name: 'Form',
//         component: () => import('@/views/form/index'),
//         meta: { title: 'Form', icon: 'form' }
//       }
//     ]
//   },

//   {
//     path: '/nested',
//     component: Layout,
//     redirect: '/nested/menu1',
//     name: 'Nested',
//     meta: {
//       title: 'Nested',
//       icon: 'nested'
//     },
//     children: [
//       {
//         path: 'menu1',
//         component: () => import('@/views/nested/menu1/index'), // Parent router-view
//         name: 'Menu1',
//         meta: { title: 'Menu1' },
//         children: [
//           {
//             path: 'menu1-1',
//             component: () => import('@/views/nested/menu1/menu1-1'),
//             name: 'Menu1-1',
//             meta: { title: 'Menu1-1' }
//           },
//           {
//             path: 'menu1-2',
//             component: () => import('@/views/nested/menu1/menu1-2'),
//             name: 'Menu1-2',
//             meta: { title: 'Menu1-2' },
//             children: [
//               {
//                 path: 'menu1-2-1',
//                 component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
//                 name: 'Menu1-2-1',
//                 meta: { title: 'Menu1-2-1' }
//               },
//               {
//                 path: 'menu1-2-2',
//                 component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
//                 name: 'Menu1-2-2',
//                 meta: { title: 'Menu1-2-2' }
//               }
//             ]
//           },
//           {
//             path: 'menu1-3',
//             component: () => import('@/views/nested/menu1/menu1-3'),
//             name: 'Menu1-3',
//             meta: { title: 'Menu1-3' }
//           }
//         ]
//       },
//       {
//         path: 'menu2',
//         component: () => import('@/views/nested/menu2/index'),
//         name: 'Menu2',
//         meta: { title: 'menu2' }
//       }
//     ]
//   },

//   {
//     path: 'external-link',
//     component: Layout,
//     children: [
//       {
//         path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
//         meta: { title: 'External Link', icon: 'link' }
//       }
//     ]
//   },

//   // 404 page must be placed at the end !!!
//   { path: '*', redirect: '/404', hidden: true }
// ]

export const constantRoutes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/components/DashboardPage"),
    children: [
      {
        path: "welcome",
        name: "welcome",
        component: () => import("@/components/WelcomePage"),
      },
      {
        path: "goods",
        name: "goods",
        component: () => import("@/components/Goods/GoodsPage"),
      },
      {
        path: "goods/add",
        name: "goods_add",
        component: () => import("@/components/Goods/GoodsAddPage"),
      },
      {
        path: "nature",
        name: "nature",
        component: () => import("@/components/Nature/NaturePage"),
      },
      {
        path: "specification/detail",
        name: "specification_detail",
        component: () =>
          import("@/components/Specification/SpecificationAddPage"),
      },
      {
        path: "category",
        name: "category",
        component: () => import("@/components/Category/CategoryPage"),
      },
      {
        path: "category/add",
        name: "category_add",
        component: () => import("@/components/Category/CategoryAddPage"),
      },
      {
        path: "order",
        name: "order",
        component: () => import("@/components/Order/OrderPage"),
      },
      {
        path: "order/detail",
        name: "order_detail",
        component: () => import("@/components/Order/OrderDetailPage"),
      },
      {
        path: "user",
        name: "user",
        component: () => import("@/components/User/UserPage"),
      },
      {
        path: "user/add",
        name: "user_add",
        component: () => import("@/components/User/UserAddPage"),
      },
      {
        path: "shipper",
        name: "shipper",
        component: () => import("@/components/Shipper/ShipperPage"),
      },
      {
        path: "shipper/list",
        name: "shipper_list",
        component: () => import("@/components/Shipper/ShipperListPage"),
      },
      {
        path: "shipper/add",
        name: "shipper_add",
        component: () => import("@/components/Shipper/ShipperAddPage"),
      },
      {
        path: "freight",
        name: "freight",
        component: () => import("@/components/Freight/FreightPage"),
      },
      {
        path: "except_area",
        name: "except_area",
        component: () => import("@/components/Freight/ExceptAreaPage"),
      },
      {
        path: "except_area/add",
        name: "except_area_add",
        component: () => import("@/components/Freight/ExceptAreaAddPage"),
      },
      {
        path: "freight/add",
        name: "freight_add",
        component: () => import("@/components/Freight/FreightAddPage"),
      },
      {
        path: "notice",
        name: "notice",
        component: () => import("@/components/Settings/NoticePage"),
      },
      {
        path: "ad",
        name: "ad",
        component: () => import("@/components/Ad/AdPage"),
      },
      {
        path: "ad/add",
        name: "ad_add",
        component: () => import("@/components/Ad/AdAddPage"),
      },
      {
        path: "shopcart",
        name: "shopcart",
        component: () => import("@/components/ShopCart/ShopCartPage"),
      },
      {
        path: "keywords",
        name: "keywords",
        component: () => import("@/components/Keywords/KeywordsPage"),
      },
      {
        path: "keywords/add",
        name: "keywords_add",
        component: () => import("@/components/Keywords/KeywordsAddPage"),
      },
      {
        path: "goodsgalleryedit",
        name: "goodsgalleryedit",
        component: () =>
          import("@/components/GoodsGallery/GoodsGalleryEditPage"),
      },
      {
        path: "admin",
        name: "admin",
        component: () => import("@/components/Admin/AdminPage"),
      },
      {
        path: "admin/add",
        name: "admin_add",
        component: () => import("@/components/Admin/AdminAddPage"),
      },
      {
        path: "settings/showset",
        name: "showset",
        component: () => import("@/components/Showset/ShowSetPage"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/components/LoginPage"),
  },
  {
    path: "*",
    redirect: "/dashboard",
  },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // () =>import service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
