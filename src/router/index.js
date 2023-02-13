import Vue from "vue";
import Router from "vue-router";
import ListProductView from "@/components/View/ListProductView";
import DetailsProductView from "@/components/View/DetailsProductView";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "ListProductView",
      component: ListProductView
    },
    {
      path: "/item/:id",
      name: "DetailsProductView",
      component: DetailsProductView
    }
  ]
});
