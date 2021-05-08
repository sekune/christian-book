<template>
  <button
    @click="toggleSidebar"
    class="rounded-md focus:outline-none focus:none"
  >
    <Icon
      class="text-gray-600 dark:text-gray-300"
      :name="isOpenSidebar ? 'chevronsLeft' : 'chevronsRight'"
    />
  </button>
</template>
<script>
import Icon from "@/components/common/icon";
import { mapMutations, mapGetters } from "vuex";
export default {
  components: { Icon },
  computed: { ...mapGetters(["isOpenSidebar"]) },
  methods: { ...mapMutations(["toggleSidebar"]) },
};
</script>
