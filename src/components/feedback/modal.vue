<template>
  <div
    class="fixed z-10 inset-0 overflow-y-hidden"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!-- backdrop -->
      <div
        class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        aria-hidden="true"
        @click="$emit('close')"
      ></div>

      <!-- small device modal bottom -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="bg-white dark:bg-gray-600 dark:text-white inline-block align-bottom rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-lg w-full"
      >
        <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4">
          <h3
            class="text-center sm:text-left text-lg leading-6 font-medium text-gray-700 dark:text-white"
            id="modal-title"
          >
            {{ title }}
          </h3>
        </div>
        <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <slot name="content">
            <p class="text-sm text-gray-500">Modal content</p>
          </slot>
        </div>
        <div
          class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
        >
          <slot name="footer">
            <Button
              text="ОК"
              class="sm:ml-3"
              color="danger"
              @click="$emit('ok')"
            />
            <Button text="Хаах" class="mt-3 sm:mt-0" @click="$emit('close')" />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/button";
export default {
  name: "Modal",
  props: {
    title: { type: String, required: true },
  },
  components: { Button },
};
</script>