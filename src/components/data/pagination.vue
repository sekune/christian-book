<template>
  <div class="py-1 flex items-center justify-between">
    <div class="flex flex-1 items-center justify-between">
      <button
        @click="prev"
        class="px-2 py-2 text-sm font-medium text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 focus:outline-none"
        :class="[canPrev ? 'cursor-pointer' : 'cursor-not-allowed']"
        :disabled="!canPrev"
      >
        <Icon name="chevronLeft" />
      </button>
      <div>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Хуудас:
          {{ ' ' }}
          <span class="font-medium">{{ current }}</span> /
          {{ ' ' }}
          <span class="font-medium">{{ page }}</span>
          {{ ' ' }}
          Нийт:
          <span class="font-medium">{{ totalRow }}</span>
        </p>
      </div>
      <button
        @click="next"
        class="px-2 py-2 text-sm font-medium text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 focus:outline-none"
        :class="[canNext ? 'cursor-pointer' : 'cursor-not-allowed']"
        :disabled="!canNext"
      >
        <Icon name="chevronRight" />
      </button>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/common/icon';

export default {
  props: {
    totalRow: { type: Number, required: true },
    currentPage: { type: Number, required: true },
    pageSize: { type: Number, required: true },
  },
  components: {
    Icon,
  },
  data() {
    return { current: this.currentPage };
  },
  computed: {
    page() {
      return this.totalRow % this.pageSize === 0
        ? this.totalRow / this.pageSize
        : parseInt(this.totalRow / this.pageSize + 1);
    },
    canPrev() {
      return this.current > 1;
    },
    canNext() {
      return this.current < this.page;
    },
  },
  methods: {
    prev() {
      if (!this.canPrev) return;
      this.current--;
      this.$emit('change', this.current);
    },
    next() {
      if (!this.canNext) return;
      this.current++;
      this.$emit('change', this.current);
    },
  },
};
</script>
