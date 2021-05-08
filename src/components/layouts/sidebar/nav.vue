<template>
  <nav class="flex-1 overflow-hidden hover:overflow-y-auto">
    <ul class="overflow-hidden">
      <NavItem v-for="(m, i) in menu" :key="i" :menu="m" />
    </ul>
  </nav>
</template>

<script>
import NavItem from "./navItem";
import { mapGetters } from "vuex";
export default {
  components: { NavItem },
  computed: { ...mapGetters(["menu"]) },
};
</script>