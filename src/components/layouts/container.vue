<template>
  <div :class="{ dark: darkMode }" class="antialiased text-gray-700 sm:text-sm">
    <div class="flex h-screen overflow-y-hidden">
      <Loader v-if="loading" />
      <!-- <Sidebar /> -->
      <div id="container" class="flex flex-col flex-1 h-full overflow-hidden">
        <Header />
        <Notification />
        <main
          class="bg-white dark:bg-gray-900 dark:text-gray-300 flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll"
        >
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./header/header";
import Notification from "@/components/feedback/notification";
import Loader from "@/components/common/loader";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Header, Notification, Loader },
  computed: {
    ...mapGetters(["loading", "darkMode", "isOpenSidebar"]),
  },
  actions: { ...mapActions(["toggleSidebar"]) },
};
</script>
