<template>
  <div>
    <h1>汇总</h1>
    <li v-for="item in items" :key="item.path">
      <router-link :to="item.path">{{
        item.meta && item.meta.name
      }}</router-link>
    </li>
  </div>
</template>

<script>
import { liRoutes } from "../../router/routes";
export default {
  data() {
    return {
      items: liRoutes
    };
  }
};
</script>

<style>
li {
  margin-bottom: 10px;
}
</style>
