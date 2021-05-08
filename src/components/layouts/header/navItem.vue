<template>
  <li>
    <router-link :to="menu.path" v-slot="{ isActive, navigate }">
      <div
        @click="navigate"
        class="flex items-center justify-around py-2 px-4 space-x-4"
        :class="{
          'bg-blue-500 rounded-lg': isActive && !darkMode,
          'hover:bg-gray-200 rounded-lg': !darkMode,
          'bg-gray-700 rounded-lg text-white': isActive && darkMode,
          'hover:bg-gray-500 rounded-lg text-white': darkMode,
        }"
      >
        <Icon :name="menu.icon" />

        <span class="sm:block md:block lg:block xl:block xs:hidden">{{
          menu.name
        }}</span>
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
  computed: {
    ...mapGetters(["darkMode", "isOpenSidebar"]),
  },
};
</script>
