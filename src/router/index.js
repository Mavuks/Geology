import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TaxonList from "../components/TaxonList"
import TaxonDetails from "../components/TaxonDetails"


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/taxon',
    name: 'taxon',
    component: TaxonList,
    children: [
      {
        path: "/taxons/:id",
        name: "taxon-details",
        component: TaxonDetails,
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
