<template>
  <transition name="notifications">
    <div
      class="absolute overflow-hidden right-0 top-10 h-5/6 w-auto z-20 p-4 space-y-4"
      v-if="hasNotice"
    >
      <transition-group name="notice">
        <div v-for="(notice, index) in notifications" :key="index">
          <div
            class="bg-white w-full max-w-xs px-3 py-2 border-2 border-transparent rounded-md shadow-lg"
          >
            <div class="flex items-center transition duration-500 ease-in-out">
              <Icon
                class="w-7 mr-3"
                :name="type[notice.type].icon"
                :class="type[notice.type].class"
              />

              <p class="text-md font-medium text-gray-900">
                {{ notice.title }}
              </p>

              <Icon
                class="w-5 text-gray-500 cursor-pointer ml-auto"
                name="x"
                @click="hideNotice(notice.id)"
              />
            </div>
            <p class="ml-10 mt-1 text-gray-500 text-sm pr-10">
              {{ notice.text }}
            </p>
          </div>
        </div>
      </transition-group>
    </div>
  </transition>
</template>

<script>
import Icon from "@/components/common/icon";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Notification",
  components: { Icon },
  data() {
    return {
      type: {
        info: {
          icon: "bell",
          class: ["text-blue-500"],
        },
        success: {
          icon: "checkCircle",
          class: ["text-green-500"],
        },
        warning: {
          icon: "errorCircle",
          class: ["text-yellow-500"],
        },
        error: {
          icon: "errorCircle",
          class: ["text-red-500"],
        },
      },
    };
  },
  computed: { ...mapGetters(["notifications", "hasNotice"]) },
  methods: { ...mapMutations(["hideNotice"]) },
};
</script>

<style scoped>
.notifications-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.notifications-enter-active,
.notifications-leave-active {
  transition: all 1s ease;
}

.notifications-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.notice-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.notice-enter-active {
  transition: all 1s ease;
}
</style>
