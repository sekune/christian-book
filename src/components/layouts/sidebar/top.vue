<template>
  <div
    class="flex items-center h-12 justify-between flex-shrink-0 p-2 bg-side-top dark:bg-side-top-dark"
    :class="{ 'lg:justify-center': !isOpenSidebar }"
  >
    <div
      class="p-2 text-xs tracking-wider font-medium uppercase break-words flex items-center space-x-4"
    >
      <Logo />
      <div :class="{ 'lg:hidden': !isOpenSidebar }">
        {{ orgName }}
      </div>
    </div>
    <button @click="toggleSidebar" class="lg:hidden">
      <Icon name="x" />
    </button>
  </div>
</template>

<script>
import Icon from "@/components/common/icon";
import Logo from "../logo";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { Icon, Logo },
  computed: { ...mapGetters(["isOpenSidebar", "orgName"]) },
  methods: { ...mapMutations(["toggleSidebar"]) },
};
</script>
