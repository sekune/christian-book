<template>
  <li>
    <router-link :to="menu.path" v-slot="{ isActive, navigate }">
      <div
        @click="navigate"
        class="flex justify-around bg-red-100"
        :class="{
          'bg-blue-500': isActive && !darkMode,
          'hover:bg-blue-400': !darkMode,
          'bg-gray-700': isActive && darkMode,
          'hover:bg-gray-600': darkMode,
        }"
      >
        <Icon :name="menu.icon" />

        <span>{{ menu.name }}</span>
      </div>
    </router-link>
  </li>
</template>
<script>
import Icon from "@/components/common/icon";
import { mapGetters } from "vuex";
export default {
  props: {
    menu: { type: Object, required: true },
  },
  components: { Icon },
  computed: { ...mapGetters(["darkMode"]) },
};
</script>
