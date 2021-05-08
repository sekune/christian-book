<template>
  <div @mouseleave="expanded = false">
    <Label :for="control.label">{{ control.label }}</Label>
    <div class="relative">
      <button
        type="button"
        class="w-full flex items-center justify-between px-3 py-1 shadow-sm border rounded focus:outline-none focus:ring-0 dark:bg-form-control-dark"
        @click="expanded = !expanded"
        :class="
          control.errors
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:border-blue-600 dark:border-gray-500'
        "
      >
        <span>{{ text }}</span>
        <Icon name="chevronLeft" class="transform -rotate-90" />
      </button>
      <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-300 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
        <ul
          v-show="expanded"
          class="absolute w-full bg-white dark:bg-gray-600 rounded shadow-lg max-h-44 overflow-y-auto py-2 mt-0.5 ring-2 ring-black ring-opacity-5"
        >
          <li
            v-for="(option, index) in control.options"
            @click="
              expanded = false;
              select(option);
            "
            :key="index"
            class="px-3 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {{ option[label] }}
          </li>
        </ul>
      </transition>
    </div>
    <Feedback :text="control.errors ? control.errors[0] : null" />
  </div>
</template>

<script>
import Icon from '@/components/common/icon';
import Label from './label';
import Feedback from './feedback';
export default {
  name: 'Select',
  components: { Icon, Label, Feedback },
  props: {
    control: { required: true },
  },
  data() {
    return {
      expanded: false,
      label: '_name',
      text: '',
    };
  },
  methods: {
    select(selected) {
      this.text = selected[this.label];
      this.$emit('changed', selected);
    },
  },
};
</script>
