<template>
  <div
    class="relative inline-block text-left"
    @mouseover="show = true"
    @mouseleave="show = false"
  >
    <div>
      <slot name="button">
        <button
          type="button"
          class="flex items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {{ text }}
          <Icon
            name="chevronLeft"
            class="-mr-2 ml-2 transform transition-transform duration-200 ease-in-out"
            :class="show ? 'rotate-90' : '-rotate-90'"
          />
        </button>
      </slot>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-100"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="show"
        class="absolute mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-600 dark:text-white ring-2 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
        :class="[`origin-top-${type} ${type}-0`, classT]"
      >
        <slot name="dropdown"> </slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from '@/components/common/icon';
export default {
  props: {
    type: { type: String, default: 'right' },
    text: { type: String, default: 'Option' },
    classT: { type: String, default: '' },
  },
  components: { Icon },
  data() {
    return {
      show: false,
    };
  },
};
</script>
