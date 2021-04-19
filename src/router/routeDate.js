// import Layout from "@/views/layout/layout.vue";
const Layout = () => import('@/views/layout/layout.vue')
// const knowledgeMap = () => import('@/views/knowledgeMap/index.vue')
// const knowledgeMap = () => import('@/views/capital/capital.vue')
// const knowledgeMap = () => import('@/components/upload/index.vue')
const knowledgeMap = () => import('@/views/iop/crm/index.vue')
export default {
  path: "/",
  component: Layout,
  redirect: "/index",
  name: "main",
  children: [{
    path: "index",
    component: knowledgeMap,
    name: "Index",
    meta: {
      navbar: 1
    }
  }
    // {
    //   path: "turnNotification",
    //   component: () =>
    //     import("@/views/index/turnNotification"),
    //   name: "TurnNotification",
    //   meta: {
    //     navbar: 2
    //   }
    // },
    // {
    //   path: "turnPortrait",
    //   component: () =>
    //     import("@/views/index/turnPortrait"),
    //   name: "TurnPortrait",
    //   meta: {
    //     navbar: 4
    //   }
    // },
    // {
    //   path: "leaflet",
    //   component: () =>
    //     import("@/components/leaflet/index"),
    //   name: "leaflet",
    //   meta: {
    //     navbar: 5
    //   },
    // },
    // {
    //   path: "markIncome",
    //   component: () =>
    //     import("@/views/markIncome/markIncome"),
    //   name: "markIncome",
    //   meta: {
    //     navbar: 3
    //   },
    //   children: [{
    //       path: "plan",
    //       component: () =>
    //         import("@/views/markIncome/plan"),
    //       name: "plan"
    //     },
    //     {
    //       path: "valuePack",
    //       component: () =>
    //         import("@/views/markIncome/valuePack"),
    //       name: "valuePack"
    //     },
    //     {
    //       path: "outside",
    //       component: () =>
    //         import("@/views/markIncome/outside"),
    //       name: "outside"
    //     },
    //     {
    //       path: "family",
    //       component: () =>
    //         import("@/views/markIncome/family"),
    //       name: "family"
    //     },
    //     {
    //       path: "newBussiness",
    //       component: () =>
    //         import("@/views/markIncome/company"),
    //       name: "newBussiness"
    //     },
    //     {
    //       path: "company",
    //       component: () =>
    //         import("@/views/markIncome/newBussiness"),
    //       name: "company"
    //     }
    //   ]
    // }
  ]
}