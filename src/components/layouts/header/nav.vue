<template>
  <nav class="flex-1">
    <ul class="overflow-hidden flex flex-row space-x-4 justify-center">
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