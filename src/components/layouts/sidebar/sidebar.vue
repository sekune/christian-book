<template>
  <!-- Sidebar -->
  <aside
    x-transition:enter="transition transform duration-300"
    x-transition:enter-start="-translate-x-full opacity-30  ease-in"
    x-transition:enter-end="translate-x-0 opacity-100 ease-out"
    x-transition:leave="transition transform duration-300"
    x-transition:leave-start="translate-x-0 opacity-100 ease-out"
    x-transition:leave-end="-translate-x-full opacity-0 ease-in"
    class="fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform text-white bg-side shadow-lg lg:z-auto lg:static lg:shadow-none sm:text-sm dark:bg-gray-800"
    :class="{
      '-translate-x-full lg:translate-x-0 lg:w-20': !isOpenSidebar,
    }"
  >
    <Top />
    <Nav />
    <Bottom />
  </aside>
</template>
<script>
import Top from "./top";
import Nav from "./nav";
import Bottom from "./bottom";
import { mapGetters } from "vuex";
export default {
  name: "Sidebar",
  components: { Nav, Top, Bottom },
  computed: { ...mapGetters(["isOpenSidebar"]) },
};
</script>
