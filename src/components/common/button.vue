<template>
  <button
    class="w-full inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm rounded-md text-base sm:w-auto sm:text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="[colors[color], loading ? ' cursor-not-allowed' : '']"
    :disabled="loading"
  >
    <Icon v-if="loading" name="loader" class="animate-spin mr-2" />
    <Icon v-if="icon && !loading" :name="icon" class="mr-2" />
    {{ text }}
  </button>
</template>

<script>
import Icon from '@/components/common/icon';

export default {
  name: 'Button',
  components: { Icon },
  props: {
    text: { type: String, required: true },
    color: { type: String, default: 'white' },
    loading: { type: Boolean, default: false },
    icon: { type: String, default: '' },
  },
  data() {
    return {
      colors: {
        white:
          'bg-white dark:bg-gray-500 dark:text-white dark:hover:bg-gray-600 hover:bg-gray-50 focus:ring-gray-300 text-gray-700 border-gray-300 dark:border-gray-600',
        primary:
          'bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 text-white',
        info: 'bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 text-white',
        success:
          'bg-green-500 hover:bg-green-700 focus:ring-green-500 text-white',
        warning:
          'bg-yellow-500 hover:bg-yellow-700 focus:ring-yellow-500 text-white',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white',
      },
    };
  },
};
</script>
