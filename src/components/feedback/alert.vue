<template>
  <div class="bg-indigo-600">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-indigo-800">
            <Icon name="bell" class="text-white" />
          </span>
          <p class="ml-3 font-medium text-white truncate">
            {{ text }}
          </p>
        </div>

        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button
            @click="$emit('close')"
            type="button"
            class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
          >
            <Icon name="x" class="text-white" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/common/icon';
export default {
  components: { Icon },
  props: {
    text: { type: String, required: true },
  },
  created() {
    setTimeout(() => {
      this.$emit('close');
    }, 3000);
  },
};
</script>
