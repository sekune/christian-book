<template>
  <div class="flex-shrink-0 p-2 max-h-14">
    <button
      class="flex items-center justify-center w-full px-4 py-2 space-x-1 tracking-wider uppercase bg-blue-500 rounded-md focus:outline-none focus:none"
      @click="logout"
    >
      <Icon name="exit" />
      <span :class="{ 'lg:hidden': !isOpenSidebar }"> Гарах </span>
    </button>
  </div>
</template>
<script>
import Icon from "@/components/common/icon";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { Icon },
  computed: { ...mapGetters(["isOpenSidebar"]) },
  methods: { ...mapMutations(["logout"]) },
};
</script>

